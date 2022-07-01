import React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import Images from '../../assets';
import { AnimatedPulse } from '../AnimatedPulse';
import { useMediaButton } from './hooks';
import styles from './styles';
import type { MediaButtonProps } from './types';

const MediaButton = ({
  speed = 500,
  style,
  buttonStyle,
  playImageSource = Images.play,
  pauseImageSource = Images.pause,
  imageStyle,
  onPlayPress = () => {},
  onPausePress = () => {},
  pulseStyle,
  pulseStart = 1,
  pulseEnd = 2,
  pulseSpeed = 1000,
  pulseDisable = false,
}: Partial<MediaButtonProps>) => {
  const { animationEffect, animatedPauseStyle, animatedPlayStyle } =
    useMediaButton({ speed, onPlayPress, onPausePress });

  return (
    <View style={[styles.container, style]}>
      <AnimatedPulse
        pulseDisable={pulseDisable}
        pulseEnd={pulseEnd}
        pulseSpeed={pulseSpeed}
        pulseStart={pulseStart}
        pulseStyle={pulseStyle}
      >
        <TouchableOpacity
          onPress={animationEffect}
          activeOpacity={1}
          style={[styles.buttonContainer, buttonStyle]}
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
      </AnimatedPulse>
    </View>
  );
};

export default MediaButton;
