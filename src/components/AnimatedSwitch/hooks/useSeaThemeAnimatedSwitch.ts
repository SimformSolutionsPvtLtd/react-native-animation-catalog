import { useCallback, useState } from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '../../../theme';
import type { SeaThemeSwitchProps } from '../types';

const useSeaThemeAnimatedSwitch = ({ size, onToggle }: SeaThemeSwitchProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const offSet = useSharedValue(0);
  const sunOffSet = useSharedValue(0);
  const moonOffset = useSharedValue(0);

  const toggle = useCallback(() => {
    if (offSet?.value === 0) {
      offSet.value = withTiming(0.5, { duration: 810 });
      sunOffSet.value = withTiming(0.5, { duration: 500 });
      moonOffset.value = withTiming(0, { duration: 100 });
      setDarkTheme(true);
      onToggle?.('dark');
    } else {
      onToggle?.('light');
      setDarkTheme(false);
      offSet.value = withTiming(0, { duration: 810 });
      sunOffSet.value = withTiming(0, { duration: 6000 });

      moonOffset.value = withTiming(1, { duration: 1600 });
    }
  }, [offSet, sunOffSet, moonOffset, onToggle]);

  const notchAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offSet.value * size * 3.21,
        },
      ],
    };
  }, []);

  const buttonContainerAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offSet.value,
      [0, 0.5],
      [Colors.frenchPass, Colors.koromiko]
    );

    return {
      backgroundColor,
    };
  });

  const riverAnimatedStyle = useAnimatedStyle(() => {
    const tintColor = interpolateColor(
      offSet.value,
      [0, 0.5],
      [Colors.onahau, Colors.brownRust]
    );

    return {
      tintColor,
    };
  });

  const seaAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offSet.value,
      [0, 0.5],
      [Colors.cornflowerBlue, Colors.jambalaya]
    );

    return {
      backgroundColor,
    };
  });

  const upperCloudsAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(offSet.value, [0, 0.4, 0.5], [0, 0, 1]),
    };
  });

  const cloudsAnimatedStyle = useAnimatedStyle(() => {
    const tintColor = interpolateColor(
      offSet.value,
      [0, 0.5],
      [Colors.anakiwa, Colors.casablanca]
    );

    return {
      tintColor,
    };
  });

  const sunAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            sunOffSet.value,
            [0, 0.2, 0.3, 0.4, 0.5, 1],
            [0, 0, 0, 0, size * -0.6, size * -0.6]
          ),
        },
        {
          translateY: interpolate(
            sunOffSet.value,
            [0, 0.2, 0.3, 0.4, 0.5, 1],
            [0, 0, 0, 0, size * -0.6, size * -0.6]
          ),
        },
      ],
      opacity: interpolate(
        sunOffSet.value,
        [0, 0.1, 0.4, 0.5, 0.6],
        [1, 1, 1, 0, 1]
      ),
    };
  });

  const moonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            moonOffset.value,
            [0, 1, 2],
            [0, size * 0.6, size * 0.7]
          ),
        },
      ],
      opacity: interpolate(
        sunOffSet.value,
        [0, 0.1, 0.4, 0.5, 0.6],
        [0, 0, 0, 1, 1]
      ),
    };
  }, []);

  return {
    toggle,
    buttonContainerAnimatedStyle,
    notchAnimatedStyle,
    darkTheme,
    seaAnimatedStyle,
    riverAnimatedStyle,
    upperCloudsAnimatedStyle,
    cloudsAnimatedStyle,
    sunAnimatedStyle,
    moonAnimatedStyle,
  };
};

export default useSeaThemeAnimatedSwitch;
