import { StyleSheet } from 'react-native';

import { colors, typography } from '@theme';

export const textPresets = StyleSheet.create({
  h1: {
    fontFamily: typography.bold,
    fontSize: 48,
    color: colors.grey[900],
  },
  h2: {
    fontFamily: typography.bold,
    fontSize: 40,
    color: colors.grey[900],
  },
  h3: {
    fontFamily: typography.bold,
    fontSize: 32,
    color: colors.grey[900],
  },
  h4: {
    fontFamily: typography.bold,
    fontSize: 24,
    color: colors.grey[900],
  },
  h5: {
    fontFamily: typography.bold,
    fontSize: 20,
    color: colors.grey[900],
  },
  h6: {
    fontFamily: typography.bold,
    fontSize: 18,
    color: colors.grey[900],
  },
  bodyXLBold: {
    fontFamily: typography.bold,
    fontSize: 18,
    color: colors.grey[800],
    lineHeight: 25.2,
  },
  bodyXLSemiBold: {
    fontFamily: typography.semibold,
    fontSize: 18,
    color: colors.grey[800],
    lineHeight: 25.2,
  },
  bodyXLMedium: {
    fontFamily: typography.medium,
    fontSize: 18,
    color: colors.grey[800],
    lineHeight: 25.2,
  },
  bodyXLRegular: {
    fontFamily: typography.regular,
    fontSize: 18,
    color: colors.grey[800],
    lineHeight: 25.2,
  },
  bodyLargeBold: {
    fontFamily: typography.bold,
    fontSize: 16,
    color: colors.grey[800],
    lineHeight: 22.4,
  },
  bodyLargeSemiBold: {
    fontFamily: typography.semibold,
    fontSize: 16,
    color: colors.grey[800],
    lineHeight: 22.4,
  },
  bodyLargeMedium: {
    fontFamily: typography.medium,
    fontSize: 16,
    color: colors.grey[800],
    lineHeight: 22.4,
  },
  bodyLargeRegular: {
    fontFamily: typography.regular,
    fontSize: 16,
    color: colors.grey[800],
    lineHeight: 22.4,
  },
  bodyBold: {
    fontFamily: typography.bold,
    fontSize: 14,
    color: colors.grey[800],
    lineHeight: 19.6,
  },
  bodySemiBold: {
    fontFamily: typography.semibold,
    fontSize: 14,
    color: colors.grey[800],
    lineHeight: 19.6,
  },
  bodyMedium: {
    fontFamily: typography.medium,
    fontSize: 14,
    color: colors.grey[800],
    lineHeight: 19.6,
  },
  bodyRegular: {
    fontFamily: typography.regular,
    fontSize: 14,
    color: colors.grey[800],
    lineHeight: 19.6,
  },
  bodySmBold: {
    fontFamily: typography.bold,
    fontSize: 12,
    color: colors.grey[800],
    lineHeight: 16.8,
  },
  bodySmSemiBold: {
    fontFamily: typography.semibold,
    fontSize: 12,
    color: colors.grey[800],
    lineHeight: 16.8,
  },
  bodySmMedium: {
    fontFamily: typography.medium,
    fontSize: 12,
    color: colors.grey[800],
    lineHeight: 16.8,
  },
  bodySmRegular: {
    fontFamily: typography.regular,
    fontSize: 12,
    color: colors.grey[800],
    lineHeight: 16.8,
  },
  bodyXsBold: {
    fontFamily: typography.bold,
    fontSize: 10,
    color: colors.grey[800],
    lineHeight: 14,
  },
  bodyXsSemiBold: {
    fontFamily: typography.semibold,
    fontSize: 10,
    color: colors.grey[800],
    lineHeight: 14,
  },
  bodyXsMedium: {
    fontFamily: typography.medium,
    fontSize: 10,
    color: colors.grey[800],
    lineHeight: 14,
  },
  bodyXsRegular: {
    fontFamily: typography.regular,
    fontSize: 10,
    color: colors.grey[800],
    lineHeight: 14,
  },
  default: {},
});

export type TextPresetNames = keyof typeof textPresets;
