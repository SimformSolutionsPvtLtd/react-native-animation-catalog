import { useRef, useState } from 'react';
import { Animated } from 'react-native';
import { Easing, Extrapolate } from 'react-native-reanimated';
import type { MediaButtonProps } from '../types';

const useMediaButton = ({
  speed,
  onPlayPress = () => {},
  onPausePress = () => {},
}: Partial<MediaButtonProps>) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [flag, setFlag] = useState(true);

  const spinEffect = Animated.timing(spinValue, {
    toValue: 1,
    duration: speed,
    easing: Easing.linear,
    useNativeDriver: true,
  });
  const spinner = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    extrapolate: Extrapolate.CLAMP,
  });

  const increaseOpecity = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const decreaseOpecity = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const animationEffect = () => {
    spinEffect.start(() => {
      spinEffect.reset();
      setFlag(!flag);
    });
    flag ? onPlayPress() : onPausePress();
  };

  const animatedPlayStyle = {
    opacity: flag ? decreaseOpecity : increaseOpecity,
    transform: [
      { rotate: spinner },
      { scale: flag ? decreaseOpecity : increaseOpecity },
    ],
  };
  const animatedPauseStyle = {
    opacity: flag ? increaseOpecity : decreaseOpecity,
    transform: [
      { rotate: spinner },
      { scale: flag ? increaseOpecity : decreaseOpecity },
    ],
  };

  return {
    animationEffect,
    animatedPauseStyle,
    animatedPlayStyle,
  };
};

export default useMediaButton;
