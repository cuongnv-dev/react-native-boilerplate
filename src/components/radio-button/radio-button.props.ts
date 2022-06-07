export interface RadioButtonProps {
  /**
   * Default state of radio button
   * @default false
   */
  initialValue?: boolean;

  /**
   * Overwrite value
   * @default undefined
   */
  value?: boolean;

  /**
   * On radio button press
   */
  onToggle?: (value: boolean) => void;

  /**
   * Color when value equal true
   * @default #246BFD
   */
  activeColor?: string;

  /**
   * Color when value equal false
   * @default #FFFFFF
   */
  unActiveColor?: string;

  /**
   * Size of radio button
   * @default 24
   */
  sizeDot?: number;

  /**
   * Stroke width of radio button
   * @default 3
   */
  strokeWidth?: number;
}
