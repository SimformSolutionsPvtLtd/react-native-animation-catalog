import { useCallback, useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';

const useGradientProgress = (
  colors: Array<string>,
  speed: number,
  useNativeDriver: boolean | undefined
) => {
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

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return {
    interpolatedColors,
  };
};

export default useGradientProgress;
