import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import type { AnimationCheckMarkProps } from '../types';

const useSimpleAnimatedCheckMark = ({
  size,
  duration,
}: AnimationCheckMarkProps) => {
  const animation = useRef(new Animated.Value(0)).current;

  const parentCircleAnimation = {
    transform: [
      {
        scaleX: animation.interpolate({
          inputRange: [0, 1.5],
          outputRange: [0, 1],
          extrapolateRight: 'clamp',
        }),
      },
      {
        scaleY: animation.interpolate({
          inputRange: [0, 1.5],
          outputRange: [0, 1],
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
      outputRange: [0, size / 2 - 40, size / 2 - 30, size / 2 - 20, size / 2],
    }),
  };

  const movingCircle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1, 1.1, 1.5, 2],
          outputRange: [0, 20, 30, 50, size],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 2,
      duration: duration,
      useNativeDriver: false,
    }).start();
  });

  return { parentCircleAnimation, movingCircle, imageAnimation };
};
export default useSimpleAnimatedCheckMark;
