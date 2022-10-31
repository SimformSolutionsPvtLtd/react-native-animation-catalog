import React from 'react';
import { View } from 'react-native';
import type { AnimatedCloudProps } from '../types';
import style from './styles/AnimatedCloudStyle';

const AnimatedClouds = ({
  cloudPosition,
  cloudBackground,
  cloudCircle,
  size,
}: AnimatedCloudProps) => {
  const {
    upperCloudBackgroundStyle,
    upperCloudCircleStyle,
    upperCloudPosition,
  } = style({ size });

  return (
    <View style={[upperCloudPosition, cloudPosition]}>
      <View style={[upperCloudBackgroundStyle, cloudBackground]}>
        <View style={[upperCloudCircleStyle, cloudCircle]} />
      </View>
    </View>
  );
};

export default AnimatedClouds;
