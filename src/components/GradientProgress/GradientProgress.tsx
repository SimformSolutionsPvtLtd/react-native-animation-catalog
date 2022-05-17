import React, { Component, useCallback, useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import NativeLinearGradient from 'react-native-linear-gradient';
import { ColorSet } from '../../utils';
import styles from './styles';
import type { GradientProgressProps, NativeLinearGradientProps } from './types';

class LinearGradient extends Component {
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
  const [color0] = useState(new Animated.Value(0));
  const [color1] = useState(new Animated.Value(0));

  const preferColors: any[] = [];

  const startAnimation = useCallback(() => {
    [color0, color1].forEach((color) => color.setValue(0));
    Animated.parallel(
      [color0, color1].map((animatedColor) => {
        return Animated.timing(animatedColor, {
          toValue: colors.length,
          duration: colors.length * speed,
          easing: Easing.linear,
          useNativeDriver: useNativeDriver || false,
        });
      })
    ).start(startAnimation);
  }, [color0, color1, colors.length, speed, useNativeDriver]);

  while (preferColors.length < 2) {
    preferColors.push(
      colors
        .slice(preferColors.length)
        .concat(colors.slice(0, preferColors.length + 1))
    );
  }

  const interpolatedColors = [color0, color1].map((animatedColor, index) => {
    return animatedColor.interpolate({
      inputRange: Array.from({ length: colors.length + 1 }, (_v, k) => k),
      outputRange: preferColors[index],
    });
  });

  const AnimatedProps = {
    style: [styles.linearGradient, style],
    start: start,
    end: end,
    colorFirst: interpolatedColors[0],
    colorSecond: interpolatedColors[1],
  };

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return <AnimatedGradient {...AnimatedProps}>{children}</AnimatedGradient>;
};

export default GradientProgress;
