import { useEffect } from 'react';
import {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { AnimatedNotificationProps } from '../types';

const useAnimatedNotification = ({
  size = 100,
  color = '#77aa12',
}: AnimatedNotificationProps) => {
  const animation = useSharedValue(0);

  const messageBoxAnimation = useAnimatedStyle(() => {
    const rotateZ = interpolate(
      animation.value,
      [0, 1, 2, 3, 4, 5],
      [0, 35, -10, 0, 10, 0],
      {
        extrapolateRight: Extrapolation.CLAMP,
      }
    );
    const translateX = interpolate(
      animation.value,
      [0, 1, 2, 3, 4, 5],
      [-size / 2, -size / 2, -size / 2, -size / 2, -size / 2, -size / 2],
      {
        extrapolateRight: Extrapolation.CLAMP,
      }
    );
    return {
      transform: [
        { translateX: translateX },
        {
          rotateZ: `${rotateZ}deg`,
        },
        { translateX: -translateX },
      ],
    };
  });

  const primaryCircleAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animation.value,
            [0, 1, 2, 3, 4, 5, 6, 7],
            [
              0,
              0,
              0,
              -(size / 2 - size / 10),
              -(size / 2 + size / 10),
              -(size - size / 5),
              10,
              0,
            ],
            {
              extrapolateRight: Extrapolation.CLAMP,
            }
          ),
        },
      ],
      borderWidth: interpolate(
        animation.value,
        [0, 1, 2, 3, 4, 5, 6, 7],
        [
          0,
          0,
          0,
          size / 22.2,
          size / 22.2,
          size / 22.2,
          size / 22.2,
          size / 22.2,
        ],
        {
          extrapolateRight: Extrapolation.CLAMP,
        }
      ),
    };
  });

  const secondaryCircleAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animation.value,
            [0, 1, 2, 3, 4, 5, 6, 7],
            [0, 0, 0, -(size / 2 - size / 10), -size, size / 10, 0, 0],
            {
              extrapolateRight: Extrapolation.CLAMP,
            }
          ),
        },
      ],
      backgroundColor: interpolateColor(
        animation.value,
        [0, 1, 2, 3, 4, 5],
        ['transparent', 'transparent', color, color, color, color]
      ),
    };
  });

  const textAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animation.value,
        [0, 1, 2, 3, 4, 5],
        [0, 0, 0, size / 25, size / 25, size / 25]
      ),
      transform: [
        {
          translateY: interpolate(
            animation.value,
            [0, 1, 2, 3, 4, 5, 6, 7, 8],
            [
              0,
              0,
              0,
              -(size / 3.33),
              -(size / 2 - size / 10),
              size / 10,
              -(size / 10),
              size / 10,
              0,
            ],
            {
              extrapolateRight: Extrapolation.CLAMP,
            }
          ),
        },
      ],
    };
  });

  const innerTrailingLineAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animation.value,
            [0, 1, 2, 3, 4, 5, 6, 7],
            [
              0,
              0,
              0,
              0,
              0,
              -(size / 2 + size / 10),
              -(size / 2 + size / 10),
              -(size / 2 + size / 10),
            ],
            {
              extrapolateRight: Extrapolation.CLAMP,
            }
          ),
        },
      ],
      height: interpolate(
        animation.value,
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 0, 0, 0, size / 2 - size / 12.5, size / 5, size / 10, 0],
        {
          extrapolateRight: Extrapolation.CLAMP,
        }
      ),
    };
  });

  const outerTrailingLineAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animation.value,
            [0, 1, 2, 3, 4, 5, 6, 7],
            [
              0,
              0,
              0,
              -(size / 2 + size / 10),
              -(size / 2 + size / 10),
              -(size / 2 + size / 10),
              -(size / 2 + size / 10),
              -(size / 2 + size / 10),
            ],
            {
              extrapolateRight: Extrapolation.CLAMP,
            }
          ),
        },
      ],
      height: interpolate(
        animation.value,
        [0, 1, 2, 3, 4, 5, 6, 7],
        [
          0,
          0,
          size / 2 - size / 12.5,
          size / 3.33,
          size / 5,
          size / 10,
          size / 20,
          0,
        ],
        {
          extrapolateRight: Extrapolation.CLAMP,
        }
      ),
    };
  });

  useEffect(() => {
    animation.value = withTiming(8, { duration: 2500 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    messageBoxAnimation,
    primaryCircleAnimation,
    secondaryCircleAnimation,
    textAnimation,
    innerTrailingLineAnimation,
    outerTrailingLineAnimation,
  };
};

export default useAnimatedNotification;
