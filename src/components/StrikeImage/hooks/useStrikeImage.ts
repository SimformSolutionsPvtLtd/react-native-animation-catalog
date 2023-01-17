import { useState } from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '../../../theme';
import type { UseStrikeImageReturnType } from '../types';

const useStrikeImage = (
  size: number,
  color: string,
  onChangeStrike: (strikeVisibility: boolean) => void
): UseStrikeImageReturnType => {
  const [isStrikeVisible, setIsStrikeVisible] = useState<boolean>(false);

  const offSet = useSharedValue(0);
  const lineOffSet = useSharedValue(0);

  const animationDuration = 500;

  const onPressImage = () => {
    if (offSet.value === 0) {
      offSet.value = withTiming(0.3, { duration: animationDuration });
      lineOffSet.value = withTiming(1, { duration: animationDuration });
    } else {
      offSet.value = withTiming(0, { duration: animationDuration });
      lineOffSet.value = withTiming(0, { duration: animationDuration });
    }
    setIsStrikeVisible(!isStrikeVisible);
    onChangeStrike?.(!isStrikeVisible);
  };

  const imageStyleAnimation = useAnimatedStyle(() => {
    return {
      tintColor: interpolateColor(offSet.value, [0, 1], [color, Colors.white]),
    };
  });

  const parentStrikeLineAnimation = useAnimatedStyle(() => {
    return {
      width: interpolate(lineOffSet.value, [0, 1], [0, size * 1.04]),
      backgroundColor: interpolateColor(
        offSet.value,
        [0, 1],
        [color, Colors.white]
      ),
    };
  });

  return {
    parentStrikeLineAnimation,
    imageStyleAnimation,
    onPressImage,
  };
};

export default useStrikeImage;
