import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '@features/un-authentication';
import { useGetTodoList } from '@networking';
import { responsiveHeight, responsiveWidth, spacing, typography } from '@theme';

export const HomeScreen = () => {
  const { signOut } = useAuth();
  const { data } = useGetTodoList();
  console.log('data :>> ', data);
  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.root}>
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.label}>Sign out</Text>
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
    color: '#246BFD',
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#E9F0FF',
    paddingVertical: responsiveHeight(spacing.md),
    alignItems: 'center',
  },
});
