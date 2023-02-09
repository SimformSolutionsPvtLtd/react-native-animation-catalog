import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import Images from '../../assets';
import { Colors } from '../../theme';
import { useAnimatedCharging } from './hooks';
import style from './styles';
import type { AnimatedChargingProps } from './types';

const AnimatedCharging = ({
  size = 350,
  adapterColor = Colors.white,
  backgroundColor = Colors.purple,
  stormColor = Colors.lightGreen,
  frontWaveColor = Colors.lightGreen,
  backWaveColor = Colors.darkMintGreen,
}: Partial<AnimatedChargingProps>) => {
  const {
    emptyBoxAnimation,
    stormAnimation,
    cableAnimation,
    frontWaveAnimation,
    backWaveAnimation,
    adapterAnimation,
  } = useAnimatedCharging(size);

  const styles = style({
    size,
    adapterColor,
    stormColor,
    frontWaveColor,
    backWaveColor,
    backgroundColor,
  });

  return (
    <View style={styles.circle}>
      <Animated.Image
        source={Images.wave}
        style={[styles.backWave, backWaveAnimation]}
      />
      <Animated.Image
        source={Images.wave}
        style={[styles.frontWave, frontWaveAnimation]}
      />
      <Animated.View style={[styles.adapter, adapterAnimation]}>
        <Animated.View style={[styles.emptyView, emptyBoxAnimation]} />
        <View style={styles.dashContainer}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <View key={index} style={styles.dash} />
            ))}
        </View>
      </Animated.View>
      <Animated.Image
        source={Images.storm}
        style={[styles.storm, stormAnimation]}
      />
      <Animated.Image
        source={Images.cable}
        style={[styles.cable, cableAnimation]}
      />
    </View>
  );
};

export default AnimatedCharging;
