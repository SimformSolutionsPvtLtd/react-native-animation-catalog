import React from 'react';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import AnimatedClouds from './AnimatedClouds';
import AnimatedStar from './AnimatedStar';
import { useDayAndNightAnimatedSwitch } from './hooks';
import styles from './styles';
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

  const style = styles({
    size,
  });

  return (
    <Animated.View
      style={[style.backgroundContainer, outerContainerAnimatedStyle]}
    >
      <Animated.View
        style={[style.dayAndNightButtonContainer, buttonContainerAnimatedStyle]}
      >
        <Pressable onPress={toggle} style={style.buttonContainer}>
          <Animated.View
            style={[
              style.sunLikeNotch,
              notchAnimatedStyle,
              interpolatedColorsOfNotch,
            ]}
          >
            <Animated.View
              style={[style.moonSpot, interpolatedColorOfMoonSpot]}
            />
            <Animated.View
              style={[style.mediumMoonSpot, interpolatedColorOfMoonSpot]}
            />
            <Animated.View
              style={[style.smallMoonSpot, interpolatedColorOfMoonSpot]}
            />
          </Animated.View>
          <Animated.View style={[cloudsAnimatedStyle]}>
            <AnimatedClouds
              cloudPosition={style.bigCloudPosition}
              firstPartOfCloudStyle={style.firstPartOfBigClouds}
              secondPartOfCloudStyle={style.secondPartOfBigClouds}
            />
            <AnimatedClouds
              cloudPosition={style.smallCloudPosition}
              firstPartOfCloudStyle={style.firstPartOfSmallClouds}
              secondPartOfCloudStyle={style.secondPartOfSmallClouds}
            />
          </Animated.View>
          <Animated.View
            style={[style.fallingStar, fallingStarAnimatedStyle]}
          />
          <Animated.View style={starsAnimatedStyle}>
            <AnimatedStar starStyle={style.star} />
            <AnimatedStar starStyle={style.smallStar} />
            <AnimatedStar starStyle={style.bigStar} />
          </Animated.View>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

export default DayAndNightAnimatedSwitch;
