import React from 'react';
import Animated from 'react-native-reanimated';
import { Colors } from '../../theme';
import { MainCircle, OuterCircles } from './components';
import { useWirelessCharger } from './hooks';
import styles from './styles';
import type { WirelessChargerProps } from './types';

const WirelessCharger = ({
  size = 200,
  wifiWaveColor = Colors.silver,
  thunderColor = Colors.tangerineYellow,
  outerCircleColor = Colors.dodgerBlue,
}: Partial<WirelessChargerProps>) => {
  const {
    outerSmallCircleAnimation,
    innerSmallCircleAnimation,
    circleAnimation,
    innerSignalOpacity,
    outerSignalOpacity,
  } = useWirelessCharger();
  const { circleContainer, container } = styles({
    size,
    wifiWaveColor,
  });

  return (
    <Animated.View style={container}>
      <OuterCircles
        outerCircleAnimation={outerSmallCircleAnimation}
        isOuterCircles={true}
        circleOpacity={0.55}
        {...{ size, outerCircleColor }}
      />
      <OuterCircles
        outerCircleAnimation={innerSmallCircleAnimation}
        {...{ size, outerCircleColor }}
      />
      <Animated.View style={circleContainer} />
      <MainCircle
        {...{
          thunderColor,
          circleAnimation,
          outerSignalOpacity,
          innerSignalOpacity,
          wifiWaveColor,
          size,
        }}
      />
    </Animated.View>
  );
};

export default WirelessCharger;
