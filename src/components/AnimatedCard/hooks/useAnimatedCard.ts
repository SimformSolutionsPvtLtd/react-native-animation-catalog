import { Gesture } from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { SwipeCallEndProps } from '..';
import { Metrics } from '../../../theme';

const useAnimatedCard = ({
  onLeftSwipeEnd,
  onRightSwipeEnd,
}: Partial<SwipeCallEndProps>) => {
  const translateX = useSharedValue(0);
  const offset = useSharedValue({ x: 0, y: 0 });
  const scale = useSharedValue(1);

  // ---------------- (SimpleCard Animation) ----------------

  const animationSimpleCardStyle = useAnimatedStyle(() => {
    const animatedRotation = interpolate(
      translateX.value,
      [-Metrics.width - 150, 0, Metrics.width + 150],
      [-30, 0, 30],
      Extrapolate.CLAMP
    );

    return {
      originX: translateX.value,
      transform: [
        { translateX: translateX.value },
        { rotate: animatedRotation + 'deg' },
      ],
    };
  });

  const onLeftSwipe = () => {
    translateX.value = withTiming(
      -Metrics.width - 150,
      {
        duration: 1000,
      },
      () => {
        onLeftSwipeEnd ? runOnJS(onLeftSwipeEnd)() : false;
      }
    );
  };

  const onRightSwipe = () => {
    translateX.value = withTiming(
      Metrics.width + 150,
      {
        duration: 1000,
      },
      () => {
        onRightSwipeEnd ? runOnJS(onRightSwipeEnd)() : false;
      }
    );
  };

  // ---------------- (SwipeableCard Animation) ----------------

  const gesture = Gesture.Pan()
    .onBegin(() => {
      offset.value.x = translateX.value;
      scale.value = withTiming(1);
    })
    .onUpdate(({ translationX }) => {
      translateX.value = offset.value.x + translationX;
    })
    .onEnd(({ velocityX }) => {
      const animationWidth =
        translateX.value > 0 && velocityX > 0
          ? Metrics.width + Metrics.width
          : -Metrics.width - Metrics.width;
      translateX.value = withSpring(animationWidth, { velocity: velocityX });
    });

  const animationSwipeableCardStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1500 },
      { translateX: translateX.value },
      { scale: scale.value },
    ],
  }));

  return {
    animationSimpleCardStyle,
    animationSwipeableCardStyle,
    onLeftSwipe,
    onRightSwipe,
    gesture,
  };
};

export default useAnimatedCard;
