import React from 'react';
import { Animated, View } from 'react-native';
import { useAnimatedPulse } from './hooks';
import styles from './styles';
import type { AnimatedPulseProps } from './types';

const AnimatedPulse = ({
  pulseStyle,
  pulseStart = 1,
  pulseEnd = 2,
  pulseSpeed = 1000,
  pulseDisable = false,
  children,
}: AnimatedPulseProps) => {
  const { pulseValue } = useAnimatedPulse({
    pulseStart,
    pulseEnd,
    pulseSpeed,
    pulseDisable,
  });

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          pulseStyle,
          { transform: [{ scale: pulseValue.current }] },
        ]}
      />
      <View style={styles.childrenViewStyle}>{children}</View>
    </>
  );
};

export default AnimatedPulse;
