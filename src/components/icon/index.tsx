import React, { useMemo } from 'react';
import { StyleProp, TouchableOpacity } from 'react-native';

import FastImage, { ImageStyle } from 'react-native-fast-image';

import { icons } from '@assets/icon';

import { IconProps } from './icon.props';

const SIZE = 24;

export const Icon = ({
  icon,
  color,
  onPress,
  size = SIZE,
  resizeMode = 'contain',
  style: styleOverride,
}: IconProps) => {
  // style
  const style = useMemo<StyleProp<ImageStyle>>(
    () => [{ width: size, height: size }],
    [size],
  );

  // render
  return (
    <TouchableOpacity
      style={styleOverride}
      disabled={typeof onPress !== 'function'}
      onPress={onPress}>
      <FastImage
        style={style}
        tintColor={color}
        resizeMode={resizeMode}
        source={icons[icon]}
      />
    </TouchableOpacity>
  );
};
