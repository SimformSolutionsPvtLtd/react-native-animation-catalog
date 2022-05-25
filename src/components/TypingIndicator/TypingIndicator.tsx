import React, { useEffect, useState } from 'react';
import { Animated, TextInput, View } from 'react-native';
import styles from './styles';
import type { TypingIndicatorProps } from './types';

export const TypingIndicator = ({
  containerStyle,
  dotStyle,
  dotDuration = 10,
  dotDelay = 10,
  bounceHeight = 5,
  type = 'bounce',
}: TypingIndicatorProps) => {
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const valueTwo = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const valueThree = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const valueFour = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const bounceAnimation = () => {
    Animated.sequence([
      Animated.timing(value, {
        toValue: { x: 0, y: bounceHeight },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay - dotDelay,
      }),
      Animated.timing(valueTwo, {
        toValue: { x: 0, y: bounceHeight },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 2,
      }),
      Animated.timing(valueThree, {
        toValue: { x: 0, y: bounceHeight },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 3,
      }),
      Animated.timing(valueFour, {
        toValue: { x: 0, y: bounceHeight },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 4,
      }),
      Animated.timing(value, {
        toValue: { x: 0, y: 0 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 5,
      }),
      Animated.timing(valueTwo, {
        toValue: { x: 0, y: 0 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 6,
      }),
      Animated.timing(valueThree, {
        toValue: { x: 0, y: 0 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 6.5,
      }),
      Animated.timing(valueFour, {
        toValue: { x: 0, y: 0 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 7,
      }),
    ]).start();
  };

  const sineAnimation = () => {
    Animated.sequence([
      Animated.timing(value, {
        toValue: { x: 0, y: -5 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: 0,
      }),
      Animated.timing(valueTwo, {
        toValue: { x: 0, y: -5 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 0.5,
      }),
      Animated.timing(valueThree, {
        toValue: { x: 0, y: -5 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 1,
      }),
      Animated.timing(valueFour, {
        toValue: { x: 0, y: -5 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 1.5,
      }),
      Animated.timing(value, {
        toValue: { x: 0, y: bounceHeight },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 2,
      }),
      Animated.timing(valueTwo, {
        toValue: { x: 0, y: bounceHeight },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 2.5,
      }),
      Animated.timing(valueThree, {
        toValue: { x: 0, y: bounceHeight },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 3,
      }),
      Animated.timing(valueFour, {
        toValue: { x: 0, y: bounceHeight },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 3.5,
      }),
      Animated.timing(value, {
        toValue: { x: 0, y: 0 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 4,
      }),
      Animated.timing(valueTwo, {
        toValue: { x: 0, y: 0 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 4.5,
      }),
      Animated.timing(valueThree, {
        toValue: { x: 0, y: 0 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 5,
      }),
      Animated.timing(valueFour, {
        toValue: { x: 0, y: 0 },
        duration: dotDuration,
        useNativeDriver: false,
        delay: dotDelay * 5.5,
      }),
    ]).start();
  };

  useEffect(() => {
    return () => {
      inputValue && setIsTyping(true);
    };
  }, [inputValue]);

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(item) => {
          setInputValue(item);
          isTyping && type === 'bounce' && bounceAnimation();
          isTyping && type === 'sine' && sineAnimation();
        }}
      />
      <View style={[styles.container, containerStyle]}>
        <>
          <Animated.View style={value.getLayout()}>
            <View style={[styles.dot, dotStyle]} />
          </Animated.View>
          <Animated.View style={valueTwo.getLayout()}>
            <View style={[styles.dot, dotStyle]} />
          </Animated.View>
          <Animated.View style={valueThree.getLayout()}>
            <View style={[styles.dot, dotStyle]} />
          </Animated.View>
          <Animated.View style={valueFour.getLayout()}>
            <View style={[styles.dot, dotStyle]} />
          </Animated.View>
        </>
      </View>
    </>
  );
};

export default TypingIndicator;
