import { useCallback, useState } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { AnimatedSwitchProps } from '../types';

const useAnimatedSwitch = ({
  size,
  lightThemeColor,
  darkThemeColor,
  onToggle,
}: AnimatedSwitchProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const offSet = useSharedValue(0);
  const overSet = useSharedValue(0);

  const toggle = useCallback(() => {
    if (offSet?.value === 0) {
      offSet.value = withTiming(0.5, { duration: 810 });
      overSet.value = withTiming(0.5, { duration: 810 });
      setDarkTheme(true);
      onToggle?.('dark');
    } else {
      setDarkTheme(false);
      onToggle?.('light');
      offSet.value = withTiming(0, { duration: 810 });
      overSet.value = withTiming(0, { duration: 810 });
    }
  }, [offSet, overSet, onToggle]);

  const notchAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offSet.value * size * 2.33,
        },
      ],
    };
  }, []);

  const overrideNotchAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: overSet.value * size * 4 },
        { translateY: overSet.value * size * -0.18 },
      ],
    };
  }, []);

  const interpolatedButtonColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offSet.value,
      [0, 0.5],
      [lightThemeColor, darkThemeColor]
    );

    return {
      backgroundColor,
    };
  });

  return {
    toggle,
    interpolatedButtonColor,
    overrideNotchAnimatedStyle,
    notchAnimatedStyle,
    darkTheme,
  };
};

export default useAnimatedSwitch;
