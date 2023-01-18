import React from 'react';
import { View } from 'react-native';
import type { CustomCircleProps } from '../types';
import styles from './styles/CustomCircleStyles';

const CustomCircle = ({
  size,
  item,
  circleOpacity,
  outerCircleColor,
}: CustomCircleProps) => {
  const { circles, groupOfCircle } = styles({
    size,
    item,
    circleOpacity,
    outerCircleColor,
  });

  return (
    <View style={groupOfCircle}>
      <View style={circles} />
    </View>
  );
};

export default CustomCircle;
