import React from 'react';
import Animated from 'react-native-reanimated';
import Images from '../../../assets';
import type { MainCircleProps } from '../types';
import styles from './styles/MainCircleStyles';

const MainCircle = ({
  thunderColor,
  size,
  circleAnimation,
  outerSignalOpacity,
  innerSignalOpacity,
  wifiWaveColor,
}: MainCircleProps) => {
  const {
    thunderStyle,
    leftBigWifiSignal,
    leftSmallWifiSignal,
    rightSmallWifiSignal,
    rightBigWifiSignal,
    circleContainer,
  } = styles({
    thunderColor,
    wifiWaveColor,
    size,
  });

  return (
    <Animated.View style={[circleContainer, circleAnimation]}>
      <Animated.Image source={Images.thunder} style={thunderStyle} />
      <Animated.Image
        source={Images.commonWifiSignal}
        style={[leftBigWifiSignal, outerSignalOpacity]}
      />
      <Animated.Image
        source={Images.leftSmallWifiSignal}
        style={[leftSmallWifiSignal, innerSignalOpacity]}
      />
      <Animated.Image
        source={Images.commonWifiSignal}
        style={[rightSmallWifiSignal, innerSignalOpacity]}
      />
      <Animated.Image
        source={Images.rightBigWifiSignal}
        style={[rightBigWifiSignal, outerSignalOpacity]}
      />
    </Animated.View>
  );
};

export default MainCircle;
