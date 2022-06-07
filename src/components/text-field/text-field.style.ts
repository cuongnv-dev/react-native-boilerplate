import { StyleSheet } from 'react-native';

import { colors, responsiveWidth, spacing, typography } from '@theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveWidth(spacing.md),
    paddingHorizontal: responsiveWidth(spacing.md),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.grey[50],
    borderColor: colors.grey[50],
    flexDirection: 'row',
  },
  focusedContainer: {
    borderColor: colors.primary[500],
    backgroundColor: 'rgba(36,107,253,0.08)',
  },
  errorContainer: {
    borderColor: colors.alertAndStatus.error,
    backgroundColor: 'rgba(247, 85, 85,0.08)',
  },
  inputContainer: {
    flex: 1,
    fontSize: 14,
    lineHeight: 19.6,
    color: colors.grey[900],
  },
  placeholderFont: {
    fontFamily: typography.regular,
  },
  inputValueFont: {
    fontFamily: typography.semibold,
  },
  leftIcon: { paddingRight: responsiveWidth(12) },
});
