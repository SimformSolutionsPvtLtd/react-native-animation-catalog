import { useEffect } from 'react';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const useWirelessCharger = () => {
  const offSet = useSharedValue(0);
  const signalOffSet = useSharedValue(0);
  const circleOffset = useSharedValue(0);
  const outerOffset = useSharedValue(0);

  useEffect(() => {
    if (offSet.value === 0) {
      offSet.value = withRepeat(
        withTiming(1, { duration: 12000, easing: Easing.linear }),
        -1,
        false
      );
      outerOffset.value = withRepeat(
        withTiming(1, { duration: 8000, easing: Easing.linear }),
        -1,
        false
      );
      signalOffSet.value = withRepeat(
        withTiming(1, { duration: 1000 }),
        -1,
        false
      );
      circleOffset.value = withRepeat(
        withTiming(1, { duration: 2300 }),
        -1,
        false
      );
    }
  }, [circleOffset, offSet, signalOffSet, outerOffset]);

  const innerSmallCircleAnimation = useAnimatedStyle(() => {
    const rotate = interpolate(offSet.value, [0, 1], [0, 6.28319]);

    return {
      transform: [{ rotateZ: `${rotate}rad` }],
    };
  }, [offSet]);

  const outerSmallCircleAnimation = useAnimatedStyle(() => {
    const rotate = interpolate(outerOffset.value, [0, 1], [0, 6.28319]);

    return {
      transform: [{ rotateZ: `${rotate}rad` }],
    };
  }, [outerOffset]);

  const innerSignalOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(signalOffSet.value, [0, 0.2, 0.5, 1], [0, 1, 0, 1]),
    };
  }, [signalOffSet]);

  const outerSignalOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(signalOffSet.value, [0, 0.2, 0.5, 1], [0, 0, 1, 0]),
    };
  }, [signalOffSet]);

  const circleAnimation = useAnimatedStyle(() => {
    const rotate = interpolate(
      circleOffset.value,
      [0, 0.3, 0.8, 1],
      [0, 3.14 / 25, 0, 0]
    );

    return {
      transform: [{ rotateZ: `${rotate}rad` }],
    };
  }, [circleOffset]);

  return {
    innerSmallCircleAnimation,
    outerSmallCircleAnimation,
    innerSignalOpacity,
    outerSignalOpacity,
    circleAnimation,
  };
};

export default useWirelessCharger;
