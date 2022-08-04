import React, { Component } from 'react';
import { Animated } from 'react-native';
import NativeLinearGradient from 'react-native-linear-gradient';
import { ColorSet } from '../../utils';
import { useGradientProgress } from './hooks';
import styles from './styles';
import type { GradientProgressProps, NativeLinearGradientProps } from './types';

class LinearGradient extends Component<GradientProgressProps> {
  render() {
    const {
      colorFirst,
      colorSecond,
      children,
      start,
      end,
      style,
    }: NativeLinearGradientProps = this.props;
    return (
      <NativeLinearGradient
        start={start}
        end={end}
        style={[styles.linearGradient, style]}
        colors={[colorFirst, colorSecond].map((c) => c) as (string | number)[]}
      >
        {children}
      </NativeLinearGradient>
    );
  }
}

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

const GradientProgress = ({
  colors = ColorSet.Primary,
  speed = 200,
  start = { x: 0, y: 0.2 },
  end = { x: 1, y: 0.2 },
  children,
  style,
  useNativeDriver,
}: GradientProgressProps) => {
  const { interpolatedColors } = useGradientProgress(
    colors,
    speed,
    useNativeDriver
  );

  const AnimatedProps = {
    style: [styles.linearGradient, style],
    start: start,
    end: end,
    colorFirst: interpolatedColors[0],
    colorSecond: interpolatedColors[1],
  };

  return <AnimatedGradient {...AnimatedProps}>{children}</AnimatedGradient>;
};

export default GradientProgress;
