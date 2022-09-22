import React from 'react';
import { Image, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { Colors } from '../../theme';
import { useSeaThemeAnimatedSwitch } from './hooks';
import styles from './styles';
import type { AnimatedSwitchProps } from './types';
import Images from '../../assets';
const SeaThemeAnimatedSwitch = ({
  size = 100,
  lightThemeColor = Colors.kournikova,
  darkThemeColor = Colors.darkModerateViolet,
}: Partial<AnimatedSwitchProps>) => {
  const {
    toggle,
    interpolatedButtonColor,
    notchAnimatedStyle,
    interpolatedSeaColor,
    interpolatedriverColor,
    interpolatedUpperCloudColor,
    interpolatedCloudColor,
  } = useSeaThemeAnimatedSwitch({ size, lightThemeColor, darkThemeColor });

  const {
    seaThemeButtonContainer,
    seaThemeNotch,
    seaViewStyle,

    riverStyle,
    cloudStyle,
    upperCloudStyle,
    sideCloudStyle,
    coconutTree,
    reverseCoconutTree,
  } = styles({
    size,
  });

  return (
    <Animated.View style={[seaThemeButtonContainer, interpolatedButtonColor]}>
      <Pressable onPress={toggle} style={seaThemeButtonContainer}>
        <Animated.View style={[seaThemeNotch, notchAnimatedStyle]} />
        <Animated.Image
          source={Images.upperCloud}
          style={[upperCloudStyle, interpolatedUpperCloudColor]}
        />
        <Animated.Image
          source={Images.cloud1}
          style={[cloudStyle, interpolatedCloudColor]}
        />
        <Image source={Images.coconutTree} style={coconutTree} />
        <Animated.Image
          source={Images.sideCloud}
          style={[sideCloudStyle, interpolatedUpperCloudColor]}
        />
        <Image source={Images.reverseCoconutTree} style={reverseCoconutTree} />

        <Animated.View style={[interpolatedSeaColor, seaViewStyle]}>
          <Animated.Image
            source={Images.river}
            style={[riverStyle, interpolatedriverColor]}
            // resizeMode={'contain'}
          />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};

export default SeaThemeAnimatedSwitch;
