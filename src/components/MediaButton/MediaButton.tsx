import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import Images from '../../assets';
import { useMediaButton } from './hooks';
import { AnimatedPulse } from '../AnimatedPulse';
import styles from './styles';
import type { MediaButtonProps } from './types';

const MediaButton = ({
  speed = 500,
  style,
  playImageSource = Images.play,
  pauseImageSource = Images.pause,
  imageStyle,
  pulseStyle,
  onPlayPress = () => {},
  onPausePress = () => {},
}: MediaButtonProps) => {
  const { animationEffect, animatedPauseStyle, animatedPlayStyle } =
    useMediaButton({ speed, onPlayPress, onPausePress });

  return (
    <>
      <TouchableOpacity
        onPress={animationEffect}
        activeOpacity={0.9}
        style={[styles.buttonContainer, style]}
      >
        <Animated.Image
          source={playImageSource}
          style={[styles.image, imageStyle, animatedPlayStyle]}
        />
        <Animated.Image
          source={pauseImageSource}
          style={[styles.image, imageStyle, animatedPauseStyle]}
        />
      </TouchableOpacity>
      <AnimatedPulse pulseStyle={pulseStyle} />
    </>
  );
};

export default MediaButton;
