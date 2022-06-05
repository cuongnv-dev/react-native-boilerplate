import React, { Suspense, useEffect } from 'react';
import { LogBox, StyleSheet, Text, UIManager } from 'react-native';

import { I18nextProvider } from 'react-i18next';
import RNBootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { isIos, STORAGE_KEY_APP_THEME } from '@common';
import { loadString, saveString } from '@storage';
import { typography } from '@theme';
import I18n from '@utils/i18n/i18n';
import { translate } from '@utils/i18n/translate';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

if (!isIos) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

export default function App() {
  // const [t, i18n] = useTranslation();
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      saveString(STORAGE_KEY_APP_THEME, 'LIGHT');
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  // const switchLocaleToEn = useCallback(() => {
  //   i18n.changeLanguage('en');
  // }, [i18n]);

  // const switchLocaleToVi = useCallback(() => {
  //   i18n.changeLanguage('vi');
  // }, [i18n]);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <I18nextProvider i18n={I18n}>
          <Suspense fallback={null}>
            <GestureHandlerRootView style={styles.root}>
              {/* <AppContainer /> */}
              <SafeAreaView edges={['bottom', 'top']}>
                <Text style={styles.text}>
                  {translate('error:errorNetwork')}
                </Text>
                <Text>{loadString(STORAGE_KEY_APP_THEME)}</Text>
              </SafeAreaView>
            </GestureHandlerRootView>
          </Suspense>
        </I18nextProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    fontFamily: typography.light,
    fontSize: 24,
  },
});
