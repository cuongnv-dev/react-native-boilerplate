import * as React from 'react';
import { View, ViewStyle } from 'react-native';

export interface SizedBoxProps {
  /**
   * An optional style override useful for padding & margin.
   */
  width?: number | string;
  height?: number;
  backgroundColor?: ViewStyle['backgroundColor'];
}

/**
 * Describe your component here
 */

export const SizedBox = ({
  width,
  height,
  backgroundColor = 'transparent',
}: SizedBoxProps) => {
  return <View style={{ width, height, backgroundColor }} />;
};
