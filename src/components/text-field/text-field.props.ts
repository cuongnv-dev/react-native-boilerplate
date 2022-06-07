import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

import { UseFormTrigger } from 'react-hook-form';

import { IconTypes } from '@assets/icon';
import { I18nKeys } from '@utils/i18n/locales';

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: I18nKeys;

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string;

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Various look & feels.
   */
  // preset?: keyof typeof PRESETS;

  forwardedRef?: any;

  /**
   * Input invalid or not
   * @default false
   */
  error?: boolean;

  /**
   * Disable input or not
   * @default false
   */
  disabled?: boolean;

  /**
   * Call trigger react hook form
   */
  trigger?: UseFormTrigger<any>;

  /**
   * function pass to last input of form when click return key
   */
  onSubmit?: () => void;

  /**
   * Name to trigger
   */
  nameTrigger?: string;

  /**
   * Remove characters with regex on change text
   * @default undefined
   */
  rxRemove?: RegExp;

  /**
   * Left icon
   */
  leftIcon?: IconTypes;

  /**
   * Password field
   * @default false
   */
  isPassword?: boolean;
}
