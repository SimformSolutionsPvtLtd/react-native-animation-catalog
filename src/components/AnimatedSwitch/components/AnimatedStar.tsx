import React from 'react';
import { View } from 'react-native';
import style from '../components/styles/AnimatedStarStyle';
import type { AnimatedStarProps } from '../types';

const AnimatedStar = ({ starContainerStyle }: AnimatedStarProps) => {
  return <View style={[style.starContainer, starContainerStyle]} />;
};

export default AnimatedStar;
