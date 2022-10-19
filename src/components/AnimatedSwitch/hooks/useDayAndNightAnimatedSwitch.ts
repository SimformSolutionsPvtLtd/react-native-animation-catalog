import { useCallback, useState } from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '../../../theme';
import type { DayAndNightAnimatedSwitchProps } from '../types';

const useDayAndNightAnimatedSwitch = ({
  size,
  onToggle,
}: DayAndNightAnimatedSwitchProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const offSet = useSharedValue(0);
  const cloudOffSet = useSharedValue(0);
  const starOffSet = useSharedValue(0);
  const fallingStarOffset = useSharedValue(0);

  const toggle = useCallback(() => {
    if (offSet.value === 0) {
      setDarkTheme(true);
      onToggle?.('dark');
      offSet.value = withTiming(1, { duration: 700 });
      cloudOffSet.value = withTiming(2, { duration: 500 });
      starOffSet.value = withTiming(2, { duration: 1500 });
      fallingStarOffset.value = withTiming(1, { duration: 2400 });
    } else {
      setDarkTheme(false);
      onToggle?.('light');
      offSet.value = withTiming(0, { duration: 700 });
      cloudOffSet.value = withTiming(0, { duration: 1400 });
      starOffSet.value = withTiming(0, { duration: 500 });
      fallingStarOffset.value = withTiming(0, { duration: 10 });
    }
  }, [offSet, cloudOffSet, starOffSet, fallingStarOffset, onToggle]);

  const notchAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            offSet.value,
            [0, 0.5, 0.7, 1],
            [
              offSet.value * size * 0.2,
              offSet.value * size * 0.25,
              offSet.value * size * 1.1,
              offSet.value * size * 1.17,
            ]
          ),
        },
        {
          rotate: `${offSet.value * 110}deg`,
        },
      ],
    };
  }, []);

  const cloudsAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            cloudOffSet.value,
            [0, 1, 2],
            [size * -0.11, size * -0.21, size * -0.51]
          ),
        },
      ],
      opacity: interpolate(
        cloudOffSet.value,
        [
          0, 0.2, 0.4, 0.46, 0.5, 0.6, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6,
          1.7, 1.8, 2,
        ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
      ),
    };
  }, []);

  const starsAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            starOffSet.value,
            [0, 1, 2],
            [size * -0.2, size * -0.6, size * -0.7]
          ),
        },
      ],
      opacity: interpolate(
        starOffSet.value,
        [0, 0.5, 0.7, 1, 2],
        [0, 0, 1, 1, 1]
      ),
    };
  }, []);

  const buttonContainerAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offSet.value,
      [0, 1],
      [Colors.mayaBlue, Colors.midnightExpress]
    );

    return {
      backgroundColor,
    };
  });
  const interpolatedColorsOfNotch = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offSet.value,
      [0, 1],
      [Colors.lightYellow, Colors.matterhornSnow]
    );

    return {
      backgroundColor,
    };
  });

  const interpolatedColorOfMoonSpot = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offSet.value,
      [0, 1],
      [Colors.lightYellow, Colors.lightCyan]
    );

    return {
      backgroundColor,
    };
  });

  const outerContainerAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offSet.value,
      [0, 1],
      [Colors.havelockBlue, Colors.violet]
    );

    return {
      backgroundColor,
    };
  });
  const fallingStarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            fallingStarOffset.value,
            [0, 0.5, 1],
            [0, size * 2, size * 2.4]
          ),
        },
        {
          translateY: interpolate(
            fallingStarOffset.value,
            [0, 0.5, 1],
            [0, size * 1.25, size * 1.5]
          ),
        },
        {
          rotate: '30deg',
        },
      ],
      opacity: interpolate(
        fallingStarOffset.value,
        [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0]
      ),
    };
  });

  return {
    toggle,
    buttonContainerAnimatedStyle,
    cloudsAnimatedStyle,
    notchAnimatedStyle,
    darkTheme,
    interpolatedColorsOfNotch,
    interpolatedColorOfMoonSpot,
    outerContainerAnimatedStyle,
    starsAnimatedStyle,
    fallingStarAnimatedStyle,
  };
};

export default useDayAndNightAnimatedSwitch;
