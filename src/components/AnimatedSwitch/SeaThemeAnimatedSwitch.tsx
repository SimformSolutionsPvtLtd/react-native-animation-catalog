import React from 'react';
import { Image, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import Images from '../../assets';
import { useSeaThemeAnimatedSwitch } from './hooks';
import styles from './styles';
import type { SeaThemeSwitchProps } from './types';

const SeaThemeAnimatedSwitch = ({
  size = 100,
  onToggle,
}: Partial<SeaThemeSwitchProps>) => {
  const {
    toggle,
    buttonContainerAnimatedStyle,
    notchAnimatedStyle,
    seaAnimatedStyle,
    riverAnimatedStyle,
    upperCloudsAnimatedStyle,
    cloudsAnimatedStyle,
    sunAnimatedStyle,
    moonAnimatedStyle,
  } = useSeaThemeAnimatedSwitch({ size, onToggle });

  const {
    seaThemeButtonContainer,
    seaThemeNotch,
    seaViewStyle,
    riverStyle,
    cloudStyle,
    upperCloudStyle,
    sideCloudStyle,
    leftCoconutTree,
    rightCoconutTree,
    firstLayerOfSun,
    secondLayerOfSun,
    thirdLayerOfSun,
    moonStyle,
  } = styles({
    size,
  });

  return (
    <Animated.View
      style={[seaThemeButtonContainer, buttonContainerAnimatedStyle]}
    >
      <Pressable onPress={toggle}>
        <Animated.View style={[firstLayerOfSun, sunAnimatedStyle]}>
          <Animated.View style={secondLayerOfSun}>
            <Animated.View style={thirdLayerOfSun} />
          </Animated.View>
        </Animated.View>
        <Animated.View style={[moonStyle, moonAnimatedStyle]} />
        <Animated.View style={[seaThemeNotch, notchAnimatedStyle]} />
        <Animated.Image
          source={Images.upperCloud}
          style={[upperCloudStyle, upperCloudsAnimatedStyle]}
        />
        <Animated.Image
          source={Images.middleCloud}
          style={[cloudStyle, cloudsAnimatedStyle]}
        />
        <Image source={Images.leftCoconutTree} style={leftCoconutTree} />
        <Animated.Image
          source={Images.sideCloud}
          style={[sideCloudStyle, upperCloudsAnimatedStyle]}
        />
        <Image source={Images.rightCoconutTree} style={rightCoconutTree} />
        <Animated.View style={[seaAnimatedStyle, seaViewStyle]}>
          <Animated.Image
            source={Images.river}
            style={[riverStyle, riverAnimatedStyle]}
          />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};

export default SeaThemeAnimatedSwitch;
