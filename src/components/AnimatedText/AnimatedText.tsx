import React, { useRef, useState, type FC } from 'react';
import {
  Text,
  View,
  type LayoutRectangle,
  type TextLayoutLine,
} from 'react-native';
import styles from './AnimatedTextStyles';
import { AnimatedTextEnum, type AnimatedTextProps } from './types';
import { AnimatedChar, AnimatedDot } from './components';
import { Colors } from '../../theme';

/**
 *
 * @returns
 */
const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  fontSize = 60,
  dotSize = 20,
  speed = 2000,
  backGroundColor = Colors.electricViolet,
  amplitude,
  type = 'normal',
  bounceDelay = 1000,
  particleDelay = 1000,
}) => {
  const isReverse = type === AnimatedTextEnum.REVERSE;
  const pi = Math.PI;
  const animationTiming = text.length * pi;
  const [textLayout, setTextLayout] = useState<Partial<TextLayoutLine>>({});
  const [individualLayout, setIndividualLayout] = useState<{
    [key: string]: Partial<LayoutRectangle>;
  }>({});
  const textPositions = useRef({});

  const { mainContainer, container, charWrapper, maskTextStyle } = styles({
    backGroundColor,
    fontSize,
  });

  return (
    <View style={mainContainer}>
      <View style={container}>
        <AnimatedDot
          {...{
            text,
            isReverse,
            dotSize,
            animationTiming,
            textLayout,
            speed,
            individualLayout,
            amplitude,
            bounceDelay,
            particleDelay,
          }}
        />
        <Text
          style={maskTextStyle}
          onTextLayout={(onTextLayout) => {
            setTextLayout(onTextLayout.nativeEvent.lines?.[0]);
          }}
        >
          {text}
        </Text>
        <View style={charWrapper}>
          {text.split('').map((char, index) => {
            return (
              <AnimatedChar
                {...{
                  key: index,
                  fontSize,
                  char,
                  index,
                  text,
                  speed,
                  isReverse,
                  dotSize,
                  bounceDelay,
                  particleDelay,
                  textWidth: textLayout?.width,
                  onLayout: (e) => {
                    textPositions.current = {
                      ...textPositions.current,
                      [index]: e.nativeEvent.layout,
                    };
                    setIndividualLayout(textPositions.current);
                  },
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
export default AnimatedText;
