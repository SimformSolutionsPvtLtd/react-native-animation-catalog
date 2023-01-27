import {
  Easing,
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { SVG } from '../../../assets';

const useHeartRate = (speed: number) => {
  const offset = useSharedValue(0);
  const spacing = useSharedValue(1000);

  const squareCount = 96;
  const defaultPath = SVG.defaultHeartRatePath;
  const followUpPath = SVG.followUpHeartRatePath;

  offset.value = withRepeat(
    withTiming(1, { duration: speed, easing: Easing.linear }, () => {
      spacing.value = 650;
    }),
    -1,
    false
  );

  const defaultAnimationProps = useAnimatedProps(() => ({
    strokeDashoffset: interpolate(offset.value, [0, 1], [0, 710]),
  }));

  const followUpAnimationProps = useAnimatedProps(() => {
    const dashOffset = interpolate(offset.value, [0, 1], [465, -650]);
    const dashArray = interpolate(
      offset.value,
      [0, 0.4, 1],
      [spacing.value, 650, 650]
    );

    return {
      strokeDasharray: [460, dashArray],
      strokeDashoffset: dashOffset,
    };
  });

  return {
    squareCount,
    defaultPath,
    defaultAnimationProps,
    followUpPath,
    followUpAnimationProps,
  };
};

export default useHeartRate;
