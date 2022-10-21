import React from 'react';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { Colors } from '../../theme';
import { useAnimatedSwitch } from './hooks';
import styles from './styles';
import type { AnimatedSwitchProps } from './types';

const AnimatedThemeSwitch = ({
  size = 100,
  lightThemeColor = Colors.kournikova,
  darkThemeColor = Colors.darkModerateViolet,
  onToggle,
}: Partial<AnimatedSwitchProps>) => {
  const {
    toggle,
    interpolatedButtonColor,
    overrideNotchAnimatedStyle,
    notchAnimatedStyle,
  } = useAnimatedSwitch({ size, lightThemeColor, darkThemeColor, onToggle });

  const { buttonContainer, overrideNotch, notch } = styles({
    size,
  });
  return (
    <Animated.View style={[buttonContainer, interpolatedButtonColor]}>
      <Pressable onPress={toggle} style={buttonContainer}>
        <Animated.View
          style={[
            overrideNotch,
            overrideNotchAnimatedStyle,
            interpolatedButtonColor,
          ]}
        />
        <Animated.View style={[notch, notchAnimatedStyle]} />
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedThemeSwitch;
