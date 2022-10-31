import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Colors } from '../../../theme';
import styles from '../styles';
import type { AnimatedParticlesProps } from '../types';

const useAnimatedParticles = ({
  size = 80,
  duration = 2000,
  particleColor = Colors.lightBlue900,
  primaryParticleColor = Colors.lightBlue900,
}: Partial<AnimatedParticlesProps>) => {
  const animation = useRef(new Animated.Value(0)).current;

  const { particle, leftParticle, rightParticle, primaryParticle } = styles({
    size,
    particleColor,
    primaryParticleColor,
  });
  const particleSize = size / 2 - (size % 10);
  const secondaryParticleSize = size / 2 + 5 - (size % 10);

  const particleScale = animation.interpolate({
    inputRange: [0, 1.5],
    outputRange: [particleSize, 0],
    extrapolate: 'clamp',
  });

  const secondaryParticleScale = animation.interpolate({
    inputRange: [0, 1.5],
    outputRange: [secondaryParticleSize, 0],
    extrapolate: 'clamp',
  });

  const secondaryParticleRadius = animation.interpolate({
    inputRange: [0, 1.5],
    outputRange: [secondaryParticleSize / 2, 0],
    extrapolate: 'clamp',
  });

  const particleOpacity = animation.interpolate({
    inputRange: [0, 0.5, 0.65],
    outputRange: [0, 0.1, 1],
    extrapolateRight: 'clamp',
  });

  const leftParticleStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -size * 0.417, -size * 1.3],
          extrapolateRight: 'clamp',
        }),
      },
    ],
    ...leftParticle,
  };

  const rightParticleStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [size * 0.0417, size * 0.417, size * 1.3],
          extrapolateRight: 'clamp',
        }),
      },
    ],
    ...rightParticle,
  };

  const topParticleStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -size * 0.417, -size * 1.3],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  const bottomParticleStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, size * 0.417, size * 1.3],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };

  const bottomRightParticleStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [size * 0.0417, size * 0.417, size * 1],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, size * 0.417, size * 1],
          extrapolateRight: 'clamp',
        }),
      },
    ],
    ...rightParticle,
  };

  const topRightParticleStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [size * 0.0417, size * 0.417, size * 0.95],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -size * 0.417, -size * 0.95],
          extrapolateRight: 'clamp',
        }),
      },
    ],
    ...rightParticle,
  };

  const topLeftParticleStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [-size * 0.0417, -size * 0.417, -size * 0.95],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -size * 0.417, -size * 0.95],
          extrapolateRight: 'clamp',
        }),
      },
    ],
    ...leftParticle,
  };

  const bottomLeftParticleStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [-size * 0.0417, -size * 0.417, -size * 0.95],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, size * 0.417, size * 0.95],
          extrapolateRight: 'clamp',
        }),
      },
    ],
    ...leftParticle,
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 2,
      duration,
      useNativeDriver: false,
    }).start();
  }, [animation, duration]);

  const particleAnimationStyle = {
    width: particleScale,
    height: particleScale,
    opacity: particleOpacity,
    borderRadius: secondaryParticleRadius,
    ...particle,
  };

  const secondaryParticleAnimationStyle = {
    width: secondaryParticleScale,
    height: secondaryParticleScale,
    opacity: particleOpacity,
    ...primaryParticle,
  };

  return {
    particleAnimationStyle,
    secondaryParticleAnimationStyle,
    bottomLeftParticleStyle,
    topLeftParticleStyle,
    topRightParticleStyle,
    bottomRightParticleStyle,
    bottomParticleStyle,
    topParticleStyle,
    rightParticleStyle,
    leftParticleStyle,
  };
};

export default useAnimatedParticles;
