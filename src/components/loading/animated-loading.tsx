import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import RNModal from 'react-native-modal';
import { useIsFetching } from 'react-query';

import { LoadingDot } from '@assets/lottie';
import LottieView from 'lottie-react-native';

const ICON = {
  width: 80,
  height: 80,
};

type AnimatedLoadingProps = {
  value?: boolean;
};

function AnimatedLoading({ value }: AnimatedLoadingProps) {
  console.log('value :>> ', value);
  const [isLoading, setIsLoading] = useState(value || false);
  console.log('isLoading :>> ', isLoading);
  const isFetching = useIsFetching();

  useEffect(() => {
    if (value === undefined) {
      const timer = setTimeout(() => {
        setIsLoading(Boolean(isFetching));
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isFetching]);

  useEffect(() => {
    if (value !== undefined) {
      setIsLoading(value);
    }
  }, [value]);

  // Enable this for development
  // if (__DEV__) return null;

  if (!isLoading) {
    return null;
  }

  return (
    <RNModal
      animationIn="fadeInUpBig"
      animationOut={'fadeOut'}
      backdropTransitionOutTiming={0}
      useNativeDriverForBackdrop={true}
      isVisible={isLoading}>
      <View style={styles.container}>
        <LottieView source={LoadingDot} autoPlay={true} style={ICON} />
      </View>
    </RNModal>
  );
}

export default memo(AnimatedLoading);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
