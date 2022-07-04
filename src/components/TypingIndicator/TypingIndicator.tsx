import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import styles from './styles';
import type {
  TypingIndicatorProps,
  DotProps,
  AnimationParamProps,
} from './types';

export const TypingIndicator = (props: TypingIndicatorProps) => {
  const {
    style = {},
    dotStyles = {},
    dotColor = 'black',
    dotSpacing = 20,
    dotAmplitude = 2,
    dotSpeed = 0.1,
    show = true,
    dotRadius = 6,
    dotY = 12,
    dotX = 0,
  } = props;
  const [animationValue, setAnimationValue] = useState<AnimationParamProps>({
    time: dotSpeed,
    radius1: dotRadius + dotAmplitude * Math.sin(0),
    radius2: dotRadius + dotAmplitude * Math.sin(-1),
    radius3: dotRadius + dotAmplitude * Math.sin(-2),
  });

  const frameAnimationRequest = useRef<number>();

  const getStyles = ({ x, y, radius }: DotProps) => ({
    left: x,
    top: y,
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    backgroundColor: dotColor,
  });

  const renderDot = (dotProps: DotProps) => (
    <View style={[styles.dot, dotStyles, getStyles(dotProps)]} />
  );

  const animation = () => {
    setAnimationValue((previousAnimationValue) => ({
      radius1: dotRadius + dotAmplitude * Math.sin(previousAnimationValue.time),
      radius2:
        dotRadius + dotAmplitude * Math.sin(previousAnimationValue.time - 1),
      radius3:
        dotRadius + dotAmplitude * Math.sin(previousAnimationValue.time - 2),
      time: previousAnimationValue.time + dotSpeed,
    }));
    frameAnimationRequest.current = requestAnimationFrame(animation);
  };

  useEffect(() => {
    frameAnimationRequest.current = requestAnimationFrame(animation);
    return () => cancelAnimationFrame(frameAnimationRequest.current as number);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!show) {
    return null;
  }

  return (
    <View style={style}>
      {renderDot({
        x: dotX - dotRadius - dotSpacing - animationValue.radius1,
        y: dotY - animationValue.radius1,
        radius: animationValue.radius1,
      })}
      {renderDot({
        x: dotX - animationValue.radius2,
        y: dotY - animationValue.radius2,
        radius: animationValue.radius2,
      })}
      {renderDot({
        x: dotX + dotRadius + dotSpacing - animationValue.radius3,
        y: dotY - animationValue.radius3,
        radius: animationValue.radius3,
      })}
    </View>
  );
};

export default TypingIndicator;
