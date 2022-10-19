import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import type { AnimatedCheckMarkProps } from '../types';

const useAnimatedCheckMark = ({
  size = 80,
  duration,
}: Partial<AnimatedCheckMarkProps>) => {
  const animation = useRef(new Animated.Value(0)).current;

  const particleSize = size / 2 - (size % 10);

  const particleScale = animation.interpolate({
    inputRange: [0, 1.5],
    outputRange: [particleSize, 0],
    extrapolate: 'clamp',
  });

  const particleRadius = animation.interpolate({
    inputRange: [0, 1.5],
    outputRange: [particleSize / 2, 0],
    extrapolate: 'clamp',
  });

  const particleOpacity = animation.interpolate({
    inputRange: [0, 0.5, 0.65],
    outputRange: [0, 0.1, 1],
    extrapolateRight: 'clamp',
  });

  const secondaryCircleStyle = {
    opacity: animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 0.5, 0],
      extrapolateRight: 'clamp',
    }),
    transform: [
      {
        scaleX: animation.interpolate({
          inputRange: [0, 0.4],
          outputRange: [0, 1],
          extrapolateRight: 'clamp',
        }),
      },
      {
        scaleY: animation.interpolate({
          inputRange: [0, 0.4],
          outputRange: [0, 1],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  const primaryCircleStyle = {
    opacity: animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 2],
      extrapolateRight: 'clamp',
    }),
    transform: [
      {
        scaleX: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0.5, 1.1],
          extrapolateRight: 'clamp',
        }),
      },
      {
        scaleY: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0.5, 1.1],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  const imageStyle = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1, 1.2, 1.5, 2],
      outputRange: [0, 0, 0.1, 0.2, 0.5, 1],
    }),
  };

  const innerCircleStyle = {
    transform: [
      {
        scaleX: animation.interpolate({
          inputRange: [0, 0.4, 1],
          outputRange: [0, 0.25, 1],
          extrapolateRight: 'clamp',
        }),
      },
      {
        scaleY: animation.interpolate({
          inputRange: [0, 0.4, 1],
          outputRange: [0, 0.25, 1],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 2,
      duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [animation, duration]);

  const particleAnimationStyle = {
    width: particleScale,
    height: particleScale,
    opacity: particleOpacity,
    borderRadius: particleRadius,
  };

  return {
    animation,
    particleSize,
    particleAnimationStyle,
    secondaryCircleStyle,
    innerCircleStyle,
    primaryCircleStyle,
    imageStyle,
  };
};

export default useAnimatedCheckMark;
