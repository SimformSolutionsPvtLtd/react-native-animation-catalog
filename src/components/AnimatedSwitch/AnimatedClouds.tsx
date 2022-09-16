import React from 'react';
import { View } from 'react-native';
import type { AnimatedCloudProps } from './types';

const AnimatedClouds = ({
  cloudPosition,
  firstPartOfCloudStyle,
  secondPartOfCloudStyle,
}: AnimatedCloudProps) => {
  return (
    <View style={cloudPosition}>
      <View style={firstPartOfCloudStyle}>
        <View style={secondPartOfCloudStyle} />
      </View>
    </View>
  );
};

export default AnimatedClouds;
