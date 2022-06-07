import React from 'react';
import { StyleSheet, View } from 'react-native';

import FastImage from 'react-native-fast-image';

import { images } from '@assets/image';

import { LocalImageProps } from './local-image.props';

export const LocalImage = ({
  source,
  containerStyle,
  style: styleOverride,
  resizeMode = 'cover',
}: LocalImageProps) => {
  // render
  return (
    <View style={containerStyle}>
      <FastImage
        style={[styles.img, styleOverride]}
        resizeMode={resizeMode}
        source={images[source]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
});
