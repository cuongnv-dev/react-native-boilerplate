import { Dimensions, Platform, StatusBar } from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');
const [shortDimension, longDimension] =
  deviceWidth < deviceHeight
    ? [deviceWidth, deviceHeight]
    : [deviceHeight, deviceWidth];
const STANDARD_WINDOW = { width: 375, height: 812 };

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? 34 : StatusBar.currentHeight;
const isLargeView = shortDimension >= 600;
const isTabletMode = shortDimension / longDimension > 0.7;

/**
 *
 Sometimes you don't want to scale everything in a linear manner, that's where moderate scale comes in.
 The cool thing about it is that you can control the resize factor (default is 0.5).
 If normal scale will increase your size by +2X, moderateScale will only increase it by +X, for example:
 ➡️ responsiveWidth(10) = 20
 ➡️ responsiveHeight(10) = 15
 ➡️ responsiveFontSize(10, 0.1) = 11
 * @param {*} size Number
 * @param {*} factor Number : default = 0.5
 */

const responsiveWidth = (size: number) =>
  (shortDimension / STANDARD_WINDOW.width) * size;
const responsiveHeight = (size: number) =>
  (longDimension / STANDARD_WINDOW.height) * size;
const responsiveFontSize = (size: number, factor = 0.5) =>
  size + (responsiveWidth(size) - size) * factor;

export {
  deviceWidth,
  deviceHeight,
  isLargeView,
  isTabletMode,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
};
