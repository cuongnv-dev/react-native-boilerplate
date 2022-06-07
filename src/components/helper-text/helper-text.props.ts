import { AlertAndStatusColors } from '@theme';

export interface HelperTextProps {
  /**
   * Show text or not
   * @default false
   */
  visible: boolean;

  /**
   * Type of helper text
   */
  type: 'info' | 'error';

  /**
   * Text for text component
   */
  msg: string;

  /**
   * Overwrite color error with theme
   * @default undefined
   */
  colorThemeError?: keyof AlertAndStatusColors;

  /**
   * Overwrite color info with theme
   * @default undefined
   */
  colorThemeInfo?: keyof AlertAndStatusColors;
}
