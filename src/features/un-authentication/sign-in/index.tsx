import React from 'react';
import { StyleSheet } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Button,
  CheckBox,
  Divider,
  LocalImage,
  RadioButton,
  SizedBox,
  Text,
  TextField,
} from '@components';
import { useGetTodoList } from '@networking';
import { colors, responsiveHeight, responsiveWidth, spacing } from '@theme';

import { useAuth } from '../auth-provider';

export const SignInScreen = () => {
  const { signIn } = useAuth();

  const { data } = useGetTodoList();
  console.log('data :>> ', data);

  const handleSignIn = async () => {
    signIn({});
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView edges={['bottom', 'top']} style={styles.root}>
        <Text preset="h4" text="Custom Global Component" center />
        <SizedBox height={spacing.lg} />

        <Text text="Primary Button Component" />
        <SizedBox height={spacing.sm} />
        <Button text="Signin" onPress={handleSignIn} />
        <Text text="Secondary Button Component" />
        <SizedBox height={spacing.sm} />
        <Button text="Signin" onPress={handleSignIn} preset="secondary" />
        <Text text="Rounded Button Component" />
        <SizedBox height={spacing.sm} />
        <Button text="Signin" onPress={handleSignIn} preset="primaryRounded" />
        <SizedBox height={spacing.lg} />

        <Text text="TextField Component" />
        <SizedBox height={spacing.sm} />
        <TextField placeholder="Username" leftIcon="profile" />
        <SizedBox height={spacing.lg} />

        <Text text="Password TextField Component" />
        <SizedBox height={spacing.sm} />
        <TextField placeholder="Password" isPassword />
        <SizedBox height={spacing.lg} />

        <Text text="Checkbox Component" />
        <SizedBox height={spacing.sm} />
        <CheckBox text="Remember" />
        <SizedBox height={spacing.lg} />

        <Text text="Radio button Component" />
        <SizedBox height={spacing.sm} />
        <RadioButton />
        <SizedBox height={spacing.lg} />

        <Text text="Divider Component" />
        <SizedBox height={spacing.sm} />
        <Divider color={colors.grey[300]} />
        <SizedBox height={spacing.lg} />

        <Text text="Local image Component" />
        <SizedBox height={spacing.sm} />
        <LocalImage source="logo" style={styles.image} />
        <SizedBox height={spacing.lg} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    marginHorizontal: responsiveWidth(spacing.lg),
  },
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
});
