import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styles from './styles';

const AnimatedPulse = ({ pulseStyle }: any) => {
  const anim = useRef(new Animated.Value(1));
  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const style = styles({ anim });

  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[style.container, pulseStyle]}
    />
  );
};

export default AnimatedPulse;
