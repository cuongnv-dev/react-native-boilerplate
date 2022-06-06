import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { responsiveHeight, responsiveWidth, spacing, typography } from '@theme';

import { useAuth } from '../auth-provider';

export const SignInScreen = () => {
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn({ email: 'cuongnv230796@gmail.com', password: 'cuong123' });
  };

  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.root}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.label}>SignIn</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    marginHorizontal: responsiveWidth(spacing.lg),
  },
  label: {
    fontFamily: typography.bold,
    fontSize: 16,
    color: 'white',
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#246BFD',
    paddingVertical: responsiveHeight(spacing.md),
    alignItems: 'center',
  },
});
