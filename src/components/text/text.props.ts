import React from 'react';
import {
  StyleProp,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';

import { I18nKeys } from '@utils/i18n/locales';

import { TextPresetNames } from './text.presets';

export interface TextProps extends TextProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * Text which is looked up via i18n.
   */
  tx?: I18nKeys;

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: any;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;

  /**
   * Set true for using textAlign = 'center'
   */
  center?: boolean;

  /**
   * Text color, default is colors.greyscale[400]
   */
  color?: string;

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresetNames;
}
