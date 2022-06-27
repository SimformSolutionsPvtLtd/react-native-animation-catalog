import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import useAnimatedFlicker from './hooks/useanimatedFlickerLoader';
import styles from './style';
import type { AnimatedFlickerLoaderProp } from './type';

const AnimatedFlickerLoader = ({
  style,
  leftCircleColor,
  rightCircleColor,
  duration,
  size = 70,
}: Partial<AnimatedFlickerLoaderProp>) => {
  const { animatedStylesForLeftCircle, animatedStylesForRightCircle } =
    useAnimatedFlicker({
      duration,
      size,
    });
  const { containerStyle, leftCircleStyle, rightCircleStyle, circleView } =
    styles({
      leftCircleColor,
      rightCircleColor,
      duration,
      size,
      style,
    });

  return (
    <View style={[containerStyle, style]}>
      <View style={circleView}>
        <Animated.View style={[animatedStylesForLeftCircle]}>
          <View style={[leftCircleStyle]} />
        </Animated.View>
        <Animated.View style={[animatedStylesForRightCircle]}>
          <View style={rightCircleStyle} />
        </Animated.View>
      </View>
    </View>
  );
};

export default AnimatedFlickerLoader;
