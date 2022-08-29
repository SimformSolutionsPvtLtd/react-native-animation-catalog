import chroma from 'chroma-js';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';
import type { AnimatedWalletStyle } from '../types';

const useAnimatedWallet = ({
  size,
  primaryColor = '',
  secondaryColor = '',
}: AnimatedWalletStyle) => {
  const AnimatedGradientView = Animated.createAnimatedComponent(LinearGradient);
  const animation = useRef(new Animated.Value(0))?.current;

  const lighterPrimaryColor = chroma(primaryColor)?.brighten()?.hex();
  const lighterSecondaryColor = chroma(secondaryColor)?.brighten()?.hex();

  const gradientPosition = {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  };

  const style = styles({
    size,
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 2,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  });

  const innerCardAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 1, 2],
          outputRange: ['0deg', '-15deg', '0deg'],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, -size / 5, 0],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };
  const middleCardAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 1, 2],
          outputRange: ['0deg', '-30deg', '0deg'],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, -(size - 10) / 3, 0],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, (size - 10) / 8, 0],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };
  const outerCardAnimation = {
    transform: [
      {
        rotateZ: animation.interpolate({
          inputRange: [0, 1, 2],
          outputRange: ['0deg', '-47deg', '0deg'],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, -(size - 10) / 2.5, 0],
          extrapolateRight: 'clamp',
        }),
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, (size - 10) / 5.2, 0],
          extrapolateRight: 'clamp',
        }),
      },
    ],
  };
  const walletPinAnimation = {
    width: animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [(size - 10) / 3, (size - 10) / 2, (size - 10) / 3],
      extrapolateRight: 'clamp',
    }),
  };

  const walletCards = [
    {
      id: 1,
      lighterColor: lighterPrimaryColor,
      color: primaryColor,
      cardStyle: style.innerCard,
      cardAnimation: innerCardAnimation,
    },
    {
      id: 2,
      lighterColor: lighterSecondaryColor,
      color: secondaryColor,
      cardStyle: style.middleCard,
      cardAnimation: middleCardAnimation,
    },
    {
      id: 3,
      lighterColor: lighterPrimaryColor,
      color: primaryColor,
      cardStyle: style.outerCard,
      cardAnimation: outerCardAnimation,
    },
  ];

  return {
    AnimatedGradientView,
    innerCardAnimation,
    middleCardAnimation,
    outerCardAnimation,
    walletPinAnimation,
    lighterPrimaryColor,
    lighterSecondaryColor,
    gradientPosition,
    walletCards,
  };
};

export default useAnimatedWallet;
