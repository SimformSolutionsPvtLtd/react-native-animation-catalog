import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import type { AnimatedPulseProps } from '../types';

const useAnimatedPulse = ({
  pulseStart = 1,
  pulseEnd = 2,
  pulseSpeed = 1000,
  pulseDisable = false,
}: Partial<AnimatedPulseProps>) => {
  const pulseValue = useRef(new Animated.Value(pulseStart));

  const pulseEffect = Animated.loop(
    // runs given animations in a sequence
    Animated.sequence([
      // increase size
      Animated.timing(pulseValue.current, {
        toValue: pulseEnd,
        duration: pulseSpeed,
        useNativeDriver: true,
      }),
      // decrease size
      Animated.timing(pulseValue.current, {
        toValue: pulseStart,
        duration: pulseSpeed,
        useNativeDriver: true,
      }),
    ])
  );

  useEffect(() => {
    pulseEffect.reset();
    if (pulseDisable) {
      pulseEffect.stop();
    } else {
      pulseEffect.start();
    }
  }, [pulseEnd, pulseStart, pulseSpeed, pulseEffect, pulseDisable]);

  return {
    pulseEffect,
    pulseValue,
  };
};

export default useAnimatedPulse;
