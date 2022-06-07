import React, { Suspense, useEffect } from 'react';
import { LogBox, StyleSheet, UIManager } from 'react-native';

import { I18nextProvider } from 'react-i18next';
import RNBootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { isIos, STORAGE_KEY_APP_THEME } from '@common';
import { AnimatedLoading } from '@components';
import { AuthProvider } from '@features/un-authentication';
import { AppContainer } from '@navigation/app-navigation';
import { saveString } from '@storage';
import I18n from '@utils/i18n/i18n';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

if (!isIos) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
      retry: false,
    },
  },
});

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
    <SafeAreaProvider>
      <I18nextProvider i18n={I18n}>
        <Suspense fallback={null}>
          <GestureHandlerRootView style={styles.root}>
            <AuthProvider>
              <QueryClientProvider client={queryClient}>
                <AppContainer />
                <AnimatedLoading />
              </QueryClientProvider>
            </AuthProvider>
          </GestureHandlerRootView>
        </Suspense>
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
