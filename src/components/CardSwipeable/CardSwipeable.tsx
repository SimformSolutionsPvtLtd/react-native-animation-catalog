import React from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  Layout,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated';
import { Metrics } from '../../theme';
import styles from './styles';
import type { SimpleCardProps, SwipeableCardProps } from './types';

const { width } = Metrics;

const SwipeableCard = ({ children, style }: SwipeableCardProps) => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

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
        translateX.value > 0 && velocityX > 0 ? width + 200 : -width - 200;
      translateX.value = withSpring(animationWidth, { velocity: velocityX });
    });

  const animationStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1500 },
      { translateX: translateX.value },
      { scale: scale.value },
    ],
  }));

  return (
    <View style={[styles.containerStyle, style]} pointerEvents="box-none">
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[styles.card, animationStyle]}
          layout={Layout.duration(600).delay(200)}
          entering={ZoomIn.duration(600).delay(200)}
        >
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const SimpleCard = ({
  style,
  renderCard,
  onLeftSwipeEnd,
  onRightSwipeEnd,
}: Partial<SimpleCardProps>) => {
  const translateX = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => {
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
      () => runOnJS(onLeftSwipeEnd!)()
    );
  };

  const onRightSwipe = () => {
    translateX.value = withTiming(
      Metrics.width + 150,
      {
        duration: 1000,
      },
      () => runOnJS(onRightSwipeEnd!)()
    );
  };

  return (
    <View style={[styles.containerStyle, style]}>
      <Animated.View
        style={[styles.card, animationStyle]}
        layout={Layout.duration(600).delay(200)}
        entering={ZoomIn.duration(600).delay(200)}
      >
        {renderCard && renderCard({ onLeftSwipe, onRightSwipe })}
      </Animated.View>
    </View>
  );
};

const CardSwipeable = Object.assign({
  SimpleCard: SimpleCard,
  SwipeableCard: SwipeableCard,
});

export default CardSwipeable;
