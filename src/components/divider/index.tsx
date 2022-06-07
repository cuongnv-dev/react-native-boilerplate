import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';

import { colors } from '@theme';

import { DividerProps } from './divider.props';

export const Divider = ({
  height = 1,
  color = colors.grey[200],
}: DividerProps) => {
  // style
  const divider = useMemo<ViewStyle>(
    () => ({
      backgroundColor: color,
      height,
      width: '100%',
    }),
    [height],
  );

  // render
  return <View style={[divider]} />;
};
