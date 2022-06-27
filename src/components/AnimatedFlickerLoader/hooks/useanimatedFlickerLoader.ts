import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import type { AnimatedFlickerLoaderProp } from '../type';

const useAnimatedFlicker = ({
  duration = 800,
  size = 50,
}: Partial<AnimatedFlickerLoaderProp>) => {
  const START_POINT = 0;
  const END_POINT = size + 10;
  const DURATION = duration;

  const x = useSharedValue(START_POINT);
  const y = useSharedValue(END_POINT);
  const flip = useSharedValue(false);

  //animation for left side loader
  const animatedStylesForLeftCircle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
      zIndex: !flip.value ? 1 : 2,
    };
  });

  //animation for right side loader
  const animatedStylesForRightCircle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: y.value,
        },
      ],
      zIndex: flip.value ? 1 : 2,
    };
  });

  useEffect(() => {
    //use for left to right animation
    x.value = withRepeat(
      withTiming(
        END_POINT,
        {
          duration: DURATION,
        },
        () => {
          flip.value = !flip.value;
        }
      ),
      -1,
      true
    );
    // use for right to left animation
    y.value = withRepeat(
      withTiming(START_POINT, {
        duration: DURATION,
      }),
      -1,
      true
    );
  });

  return {
    animatedStylesForLeftCircle,
    animatedStylesForRightCircle,
  };
};
export default useAnimatedFlicker;
