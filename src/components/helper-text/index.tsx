import React, { useEffect, useMemo, useState } from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { sharedTiming, useInterpolate, useSharedTransition } from '@animated';
import { alertAndStatusColors, typography } from '@theme';

import { HelperTextProps } from './helper-text.props';

import { Text } from '../text';

export const HelperText = ({
  msg,
  type,
  colorThemeInfo,
  colorThemeError,
  visible = false,
}: HelperTextProps) => {
  // state
  const [measured, setMeasured] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });
  const [currentMessage, setCurrentMessage] = useState<string>(msg ?? '');
  const progress = useSharedTransition(visible);
  const height = useSharedValue(0);
  const opacity = useInterpolate(progress, [0, 1], [0, 1]);

  // function
  const _onLayoutContent = (e: LayoutChangeEvent) => {
    setMeasured({ ...e.nativeEvent.layout });
  };

  // style
  const textStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      { height: measured.height },
      type === 'error'
        ? {
            color: colorThemeError
              ? alertAndStatusColors[colorThemeError]
              : alertAndStatusColors.error,
          }
        : {
            color: colorThemeInfo
              ? alertAndStatusColors[colorThemeInfo]
              : alertAndStatusColors.info,
          },
    ],
    [colorThemeError, colorThemeInfo, measured.height, type],
  );

  // effect
  useEffect(() => {
    if (msg) {
      setCurrentMessage(msg);
    }
  }, [msg]);

  useEffect(() => {
    if (visible) {
      height.value = sharedTiming(measured.height);
    } else {
      height.value = sharedTiming(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measured.height, visible]);

  // reanimated style
  const style = useAnimatedStyle(() => ({
    height: height.value,
    opacity: opacity.value,
  }));

  // render
  return (
    <View style={[styles.container]}>
      <Animated.View
        pointerEvents={'none'}
        onLayout={_onLayoutContent}
        style={[styles.hiddenView]}>
        <Text style={[styles.text]}>{currentMessage}</Text>
      </Animated.View>
      <Animated.View style={[style]}>
        <Text style={[styles.text, textStyle]}>{currentMessage}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 3,
    paddingBottom: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    overflow: 'hidden',
  },
  text: {
    fontFamily: typography.medium,
    fontSize: 12,
  },
  hiddenView: {
    position: 'absolute',
    zIndex: -999,
    opacity: 0,
    // overflow: 'hidden',
  },
});
