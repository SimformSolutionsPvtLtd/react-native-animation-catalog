import React from 'react';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import AnimatedClouds from './components/AnimatedClouds';
import AnimatedStar from './components/AnimatedStar';
import { useDayAndNightAnimatedSwitch } from './hooks';
import style from './styles';
import type { DayAndNightAnimatedSwitchProps } from './types';

const DayAndNightAnimatedSwitch = ({
  size = 100,
}: Partial<DayAndNightAnimatedSwitchProps>) => {
  const {
    toggle,
    outerContainerAnimatedStyle,
    buttonContainerAnimatedStyle,
    notchAnimatedStyle,
    interpolatedColorsOfNotch,
    interpolatedColorOfMoonSpot,
    cloudsAnimatedStyle,
    fallingStarAnimatedStyle,
    starsAnimatedStyle,
  } = useDayAndNightAnimatedSwitch({ size });

  const {
    backgroundContainer,
    dayAndNightButtonContainer,
    buttonContainer,
    sunAnimationStyle,
    moonSpot,
    mediumMoonSpot,
    smallMoonSpot,
    lowerCloudPosition,
    lowerCloudBackgroundStyle,
    lowerCloudCircleSize,
    fallingStar,
    star,
    smallStar,
    bigStar,
  } = style({
    size,
  });

  return (
    <Animated.View style={[backgroundContainer, outerContainerAnimatedStyle]}>
      <Animated.View
        style={[dayAndNightButtonContainer, buttonContainerAnimatedStyle]}
      >
        <Pressable onPress={toggle} style={buttonContainer}>
          <Animated.View
            style={[
              sunAnimationStyle,
              notchAnimatedStyle,
              interpolatedColorsOfNotch,
            ]}
          >
            <Animated.View style={[moonSpot, interpolatedColorOfMoonSpot]} />
            <Animated.View
              style={[mediumMoonSpot, interpolatedColorOfMoonSpot]}
            />
            <Animated.View
              style={[smallMoonSpot, interpolatedColorOfMoonSpot]}
            />
          </Animated.View>
          <Animated.View style={[cloudsAnimatedStyle]}>
            <AnimatedClouds size={size} />
            <AnimatedClouds
              cloudPosition={lowerCloudPosition}
              cloudBackground={lowerCloudBackgroundStyle}
              cloudCircle={lowerCloudCircleSize}
              size={size}
            />
          </Animated.View>
          <Animated.View style={[fallingStar, fallingStarAnimatedStyle]} />
          <Animated.View style={starsAnimatedStyle}>
            <AnimatedStar starContainerStyle={star} />
            <AnimatedStar starContainerStyle={smallStar} />
            <AnimatedStar starContainerStyle={bigStar} />
          </Animated.View>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

export default DayAndNightAnimatedSwitch;
