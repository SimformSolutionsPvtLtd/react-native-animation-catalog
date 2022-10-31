import React from 'react';
import { Animated, View } from 'react-native';
import Images from '../../assets';
import { Colors } from '../../theme';
import AnimatedParticles from './AnimatedParticles';
import { useAnimatedCheckMark } from './hooks';
import styles from './styles';
import type { AnimatedCheckMarkProps } from './types';

const AnimatedCheckMark = ({
  containerStyle,
  size = 80,
  duration = 2000,
  backgroundColor = Colors.lightBlue900,
  innerCircle = true,
  checkMarkColor = Colors.white,
  particleColor = Colors.lightBlue900,
  primaryParticleColor = Colors.lightBlue900,
  disableParticles = false,
  imageSource = Images.checkMark,
}: Partial<AnimatedCheckMarkProps>) => {
  const {
    secondaryCircleStyle,
    innerCircleStyle,
    primaryCircleStyle,
    imageStyle,
  } = useAnimatedCheckMark({ size, duration });

  const style = styles({
    size,
    backgroundColor,
    particleColor,
    checkMarkColor,
  });

  return (
    <View style={[style.container, containerStyle]}>
      <Animated.View style={[style.primaryCircle, primaryCircleStyle]} />
      <Animated.View style={[style.secondaryCircle, secondaryCircleStyle]} />
      <Animated.Image source={imageSource} style={[style.image, imageStyle]} />
      {innerCircle && (
        <Animated.View style={[innerCircleStyle, style.innerCircle]} />
      )}
      {!disableParticles && (
        <AnimatedParticles
          particleColor={particleColor}
          size={size}
          duration={duration}
          primaryParticleColor={primaryParticleColor}
        />
      )}
    </View>
  );
};

export default AnimatedCheckMark;
