import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const useAnimatedCharging = (size: number) => {
  const offset = useSharedValue(0);

  offset.value = withTiming(50, { duration: 2000 });

  const emptyBoxAnimation = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(
        offset.value,
        [0, 15, 20, 50],
        [0, 0, size * 0.5714 * 0.45, size * 0.5714 * 0.45]
      ),
    };
  });

  const stormAnimation = useAnimatedStyle(() => {
    return {
      bottom: interpolate(
        offset.value,
        [0, 15, 24, 28, 50],
        [size * 0.1714, size * 0.1714, size * 0.4, size * 0.3714, size * 0.3714]
      ),
      opacity: interpolate(
        offset.value,
        [0, 14.5, 15, 18, 50],
        [0, 0, 0.2, 1, 1]
      ),
    };
  });

  const cableAnimation = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(
        offset.value,
        [0, 11, 16, 20, 50],
        [size, size * 0.7257, size * 0.7514, size * 0.7314, size * 0.7314]
      ),
    };
  });

  const frontWaveAnimation = useAnimatedStyle(() => {
    return {
      top: interpolate(
        offset.value,
        [0, 24, 39, 50],
        [size, size, size * 0.5714, size * 0.5714]
      ),
      left: interpolate(
        offset.value,
        [0, 24, 50],
        [size * 0.1428, size * 0.1428, -(size * 0.4857)]
      ),
    };
  });

  const backWaveAnimation = useAnimatedStyle(() => {
    return {
      top: interpolate(
        offset.value,
        [0, 24, 39, 50],
        [size, size, size * 0.5714, size * 0.5714]
      ),
      left: interpolate(
        offset.value,
        [0, 24, 50],
        [-(size * 1.6571), -(size * 1.6571), -(size * 0.6857)]
      ),
    };
  });

  const adapterAnimation = useAnimatedStyle(() => {
    return {
      top: interpolate(
        offset.value,
        [0, 10, 14, 17, 18, 50],
        [
          size * 0.2,
          size * 0.2,
          size * 0.2285,
          size * 0.1857,
          size * 0.2,
          size * 0.2,
        ]
      ),
    };
  });

  return {
    emptyBoxAnimation,
    stormAnimation,
    cableAnimation,
    frontWaveAnimation,
    backWaveAnimation,
    adapterAnimation,
  };
};

export default useAnimatedCharging;
