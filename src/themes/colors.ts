const primaryColors = {
  '500': '#246BFD',
  '400': '#5089FD',
  '300': '#7CA6FE',
  '200': '#A7C4FE',
  '100': '#E9F0FF',
};

const secondaryColors = {
  '500': '#FFD300',
  '400': '#FFDC33',
  '300': '#FFE566',
  '200': '#FFED99',
  '100': '#FFFBE6',
};

export const alertAndStatusColors = {
  success: '#4ADE80',
  info: '#246BFD',
  warning: '#FACC15',
  error: '#F75555',
  disabled: '#D8D8D8',
  buttonDisabled: '#476EBE',
};

const greyscaleColors = {
  '900': '#212121',
  '800': '#424242',
  '700': '#616161',
  '600': '#757575',
  '500': '#9E9E9E',
  '400': '#BDBDBD',
  '300': '#E0E0E0',
  '200': '#EEEEEE',
  '100': '#F5F5F5',
  '50': '#FAFAFA',
};

const darkColors = {
  dark1: '#181A20',
  dark2: '#1F222A',
  dark3: '#35383F',
};

const paletteColors = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#F44336',
  pink: '#E91E63',
  purple: '#9C27B0',
  deepPurple: '#673AB3',
  indigo: '#3F51B2',
  blue: '#1A96F0',
  lightBlue: '#00A9F1',
  cyan: '#00BCD3',
  teal: '#009689',
  green: '#4AAF57',
  lightGreen: '#8BC255',
  lime: '#CDDC4C',
  yellow: '#FFEB4F',
  amber: '#FFC02D',
  orange: '#FF981F',
  deepOrange: '#FF5726',
  brown: '#7A5548',
  blueGrey: '#607D8A',
};

const backgroundColors = {
  blue: '#F6FAFD',
  red: '#FFF5F5',
  purple: '#FCF4FF',
  yellow: '#FFFEE0',
};

export const colors = {
  primary: primaryColors,
  secondary: secondaryColors,
  alertAndStatus: alertAndStatusColors,
  grey: greyscaleColors,
  dark: darkColors,
  palette: paletteColors,
  background: backgroundColors,
};

export type PrimaryColor = typeof primaryColors;
export type SecondaryColor = typeof secondaryColors;
export type AlertAndStatusColors = typeof alertAndStatusColors;
export type GreyscaleColors = typeof greyscaleColors;
export type DarkColors = typeof darkColors;
export type PaletteColors = typeof paletteColors;

export type Colors = PrimaryColor &
  SecondaryColor &
  AlertAndStatusColors &
  GreyscaleColors &
  DarkColors &
  PaletteColors;
