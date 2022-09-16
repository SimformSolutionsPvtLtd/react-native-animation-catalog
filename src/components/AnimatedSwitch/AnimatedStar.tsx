import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import type { AnimatedStarProps } from './types';

const AnimatedStar = ({ starStyle }: AnimatedStarProps) => {
  const style = styles({});
  return <View style={[style.starContainer, starStyle]} />;
};

export default AnimatedStar;
