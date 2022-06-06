import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { STORAGE_KEY_APP_THEME } from '@common';
import { responsiveWidth, spacing, typography } from '@theme';
import { translate } from '@utils/i18n/translate';
import { loadString } from '@utils/storage';

export const SignInScreen = () => {
  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.root}>
      <Text style={styles.text}>{translate('error:errorNetwork')}</Text>
      <Text>{loadString(STORAGE_KEY_APP_THEME)}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    marginHorizontal: responsiveWidth(spacing.lg),
  },
  text: {
    fontFamily: typography.light,
    fontSize: 24,
  },
});
