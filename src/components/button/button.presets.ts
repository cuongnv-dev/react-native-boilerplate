import { TextStyle, ViewStyle } from 'react-native';

import { colors, responsiveWidth, spacing } from '@theme';

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: responsiveWidth(spacing.md),
  paddingHorizontal: responsiveWidth(spacing.lg),
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  primary: { ...BASE_VIEW, backgroundColor: colors.primary[500] } as ViewStyle,
  secondary: {
    ...BASE_VIEW,
    backgroundColor: colors.primary[100],
  } as ViewStyle,

  primaryRounded: {
    ...BASE_VIEW,
    backgroundColor: colors.primary[500],
    borderRadius: 100,
  } as ViewStyle,
  secondaryRounded: {
    ...BASE_VIEW,
    backgroundColor: colors.primary[100],
    borderRadius: 100,
  } as ViewStyle,

  primaryDisabled: {
    ...BASE_VIEW,
    backgroundColor: colors.alertAndStatus.buttonDisabled,
  } as ViewStyle,
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { color: colors.palette.white } as TextStyle,
  secondary: {
    color: colors.primary[500],
  } as TextStyle,

  primaryRounded: {
    color: colors.palette.white,
    borderRadius: 100,
  } as TextStyle,
  secondaryRounded: {
    color: colors.primary[500],
    borderRadius: 100,
  } as TextStyle,

  primaryDisabled: {
    color: colors.palette.white,
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets;
