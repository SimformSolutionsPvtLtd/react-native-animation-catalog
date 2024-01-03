import React, { type FC } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import type { AnimatedCharProps } from '../types';
import useAnimatedChar from './hooks/useAnimatedChar';
import styles from './styles/AnimatedCharStyles';

/**
 *
 * @param param0
 * @returns
 */
const AnimatedChar: FC<AnimatedCharProps> = ({
  fontSize,
  char,
  index,
  textWidth = 0,
  text,
  speed,
  onLayout = () => {},
  isReverse,
  dotSize,
  bounceDelay,
  particleDelay,
}) => {
  const { setTextLayout, animatedStyles, ref } = useAnimatedChar({
    isReverse,
    index,
    dotSize,
    textWidth,
    particleDelay,
    text,
    speed,
    bounceDelay,
  });
  const { charStyle, container } = styles({ fontSize });

  return (
    <View
      style={container}
      onLayout={(e) => {
        setTextLayout(e.nativeEvent.layout);
        onLayout(e);
      }}
    >
      <Animated.Text ref={ref} style={[charStyle, animatedStyles]}>
        {char}
      </Animated.Text>
    </View>
  );
};

export default AnimatedChar;
