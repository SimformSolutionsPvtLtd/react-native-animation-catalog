import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import type { CircularAnimatedProps } from '../types';

const useCircularAnimatedCheckMark = ({
  size,
  duration,
}: CircularAnimatedProps) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 2,
      duration: duration,
      useNativeDriver: false,
    }).start();
  });

  const topViewAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 2],
          outputRange: ['0deg', '360deg'],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };
  const rightViewAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 2],
          outputRange: ['-90deg', '360deg'],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  const bottomViewAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 2],
          outputRange: ['-180deg', '360deg'],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  const leftViewAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 2],
          outputRange: ['-360deg', '360deg'],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  const imageAnimation = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 1.7, 2],
      outputRange: [0, 0.1, 0.5, 1, 1.5, 2],
    }),
    height: animation.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2],
      outputRange: [0, size / 2 - 30, size / 2 - 20, size / 2 - 10, size / 2],
    }),
  };

  const checkMarkAnimation = {
    transform: [
      {
        scaleX: animation.interpolate({
          inputRange: [0, 2],
          outputRange: [1, 0],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  return {
    topViewAnimation,
    rightViewAnimation,
    bottomViewAnimation,
    leftViewAnimation,
    imageAnimation,
    checkMarkAnimation,
  };
};
export default useCircularAnimatedCheckMark;
