import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useMix, useSharedTransition } from '@animated';
import { execFunc } from '@common';
import { colors } from '@theme';

import { CheckboxProps } from './check-box.props';

import { Text } from '../text';

const DIMENSIONS = { width: 24, height: 24 };

export const CheckBox = ({
  text,
  tx,
  value,
  style,
  fillStyle,
  outlineStyle: outlineStyleOverwrite,
  onToggle,
  disable = false,
  initialValue = false,
}: CheckboxProps) => {
  // state
  const [localValue, setLocalValue] = useState<boolean>(initialValue);
  const progress = useSharedTransition(value ?? localValue);
  const scale = useMix(progress, 0, 1);
  const opacity = useMix(progress, 0, 1);

  // function
  const onPress = useCallback(() => {
    if (typeof value === 'boolean') {
      execFunc(onToggle, !value);
    } else {
      execFunc(onToggle, !localValue);
      setLocalValue(v => !v);
    }
  }, [localValue, onToggle, value]);

  // reanimated style
  const styleAnimated = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  // render
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disable}
      onPress={onPress}
      style={[styles.root, style]}>
      <>
        <View style={[styles.outline, outlineStyleOverwrite]}>
          <Animated.View style={[styles.fill, fillStyle, styleAnimated]} />
        </View>
        <Text text={text} tx={tx} style={styles.label} preset="bodySemiBold" />
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  outline: {
    ...DIMENSIONS,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.primary[500],
    borderRadius: 8,
  },
  fill: {
    width: DIMENSIONS.width - 10,
    height: DIMENSIONS.height - 10,
    backgroundColor: colors.primary[500],
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    paddingLeft: 8,
    color: colors.grey[900],
  },
});
