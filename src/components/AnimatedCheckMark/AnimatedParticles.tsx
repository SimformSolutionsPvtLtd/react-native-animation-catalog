import React from 'react';
import { Animated } from 'react-native';
import { useAnimatedParticles } from './hooks';
import type { AnimatedCheckMarkProps } from './type';
import Images from '../../assets';

const AnimatedParticles = ({
  size,
  duration,
  particleColor,
  primaryParticleColor,
}: Partial<AnimatedCheckMarkProps>) => {
  const {
    particleAnimationStyle,
    secondaryParticleAnimationStyle,
    bottomLeftParticleStyle,
    topLeftParticleStyle,
    topRightParticleStyle,
    bottomRightParticleStyle,
    bottomParticleStyle,
    topParticleStyle,
    rightParticleStyle,
    leftParticleStyle,
  } = useAnimatedParticles({
    size,
    duration,
    particleColor,
    primaryParticleColor,
  });

  return (
    <>
      {/* Left particle */}
      <Animated.View style={[leftParticleStyle, particleAnimationStyle]} />
      {/* Right particle */}
      <Animated.View style={[rightParticleStyle, particleAnimationStyle]} />
      {/* Top particle */}
      <Animated.View style={[topParticleStyle, particleAnimationStyle]} />
      {/* Bottom particle */}
      <Animated.View style={[bottomParticleStyle, particleAnimationStyle]} />

      {/* Bottom Right particle */}
      <Animated.Image
        source={Images.star}
        style={[bottomRightParticleStyle, secondaryParticleAnimationStyle]}
      />
      {/* Top Right particle */}
      <Animated.Image
        source={Images.star}
        style={[topRightParticleStyle, secondaryParticleAnimationStyle]}
      />
      {/* Top Left particle */}
      <Animated.Image
        source={Images.star}
        style={[topLeftParticleStyle, secondaryParticleAnimationStyle]}
      />
      {/* Bottom Right particle */}
      <Animated.Image
        source={Images.star}
        style={[bottomLeftParticleStyle, secondaryParticleAnimationStyle]}
      />
    </>
  );
};

export default AnimatedParticles;
