import React, { type FC } from 'react';
import Animated from 'react-native-reanimated';
import useAnimatedDot from './hooks/useAnimatedDot';
import styles from './styles/AnimatedDotStyles';
import type { AnimatedDotProps } from '../types';

/**
 *
 * @returns
 */
const AnimatedDot: FC<AnimatedDotProps> = ({
  textLayout,
  individualLayout,
  text,
  isReverse,
  animationTiming,
  dotSize,
  speed,
  amplitude,
  bounceDelay,
  particleDelay,
}) => {
  const { dot } = styles({ dotSize });
  const { animatedStyles } = useAnimatedDot({
    text,
    isReverse,
    amplitude,
    textLayout,
    individualLayout,
    dotSize,
    bounceDelay,
    animationTiming,
    speed,
    particleDelay,
  });

  return <Animated.View style={[dot, animatedStyles]} />;
};

export default AnimatedDot;
