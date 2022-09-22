import { useCallback, useState } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { Colors } from '../../../theme';
import type { AnimatedSwitchProps } from '../types';

const useSeaThemeAnimatedSwitch = ({
  size,
  lightThemeColor,
  darkThemeColor,
}: AnimatedSwitchProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const offSet = useSharedValue(0);
  const overSet = useSharedValue(0);

  const toggle = useCallback(() => {
    if (offSet?.value === 0) {
      offSet.value = withTiming(0.5, { duration: 810 });
      overSet.value = withTiming(0.5, { duration: 810 });
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
      offSet.value = withTiming(0, { duration: 810 });
      overSet.value = withTiming(0, { duration: 810 });
    }
  }, [offSet, overSet]);

  const notchAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offSet.value * size * 3.22,
        },
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
  const interpolatedriverColor = useAnimatedStyle(() => {
    const tintColor = interpolateColor(
      offSet.value,
      [0, 0.5],
      [Colors.onahau, Colors.brownRust]
    );

    return {
      tintColor,
    };
  });

  const interpolatedSeaColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offSet.value,
      [0, 0.5],
      [Colors.cornflowerBlue, Colors.jambalaya]
    );

    return {
      backgroundColor,
    };
  });
  const interpolatedUpperCloudColor = useAnimatedStyle(() => {
    // const tintColor = interpolateColor(
    //   offSet.value,
    //   [0, 0.5],
    //   [Colors.anakiwa, Colors.texasRose]
    // );

    return {
      // tintColor,
      opacity: interpolate(offSet.value, [0, 0.4, 0.5], [0, 0, 1]),
    };
  });
  const interpolatedCloudColor = useAnimatedStyle(() => {
    const tintColor = interpolateColor(
      offSet.value,
      [0, 0.3, 0.4, 0.5],
      [Colors.anakiwa, Colors.casablanca, Colors.casablanca, Colors.casablanca]
    );

    return {
      tintColor,
    };
  });

  return {
    toggle,
    interpolatedButtonColor,
    notchAnimatedStyle,
    darkTheme,
    interpolatedSeaColor,
    interpolatedriverColor,
    interpolatedUpperCloudColor,
    interpolatedCloudColor,
  };
};

export default useSeaThemeAnimatedSwitch;
