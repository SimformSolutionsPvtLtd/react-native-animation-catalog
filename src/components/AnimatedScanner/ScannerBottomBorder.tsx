import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import type { AnimatedScannerProps } from './types';

const ScannerBottomBorder = ({
  strokeColor,
  height,
  borderColor,
  borderRadius,
  borderWidth,
}: Partial<AnimatedScannerProps>) => {
  const {
    borderMainView,
    scannerBottomLeftView,
    horizonalWidth,
    propsView,
    scannerBottomRightView,
  } = styles({
    strokeColor,
    borderWidth,
    height,
    borderColor,
    borderRadius,
  });

  return (
    <View style={borderMainView}>
      <View style={scannerBottomLeftView} />
      <View style={horizonalWidth} />
      <View style={propsView} />
      <View style={scannerBottomRightView} />
    </View>
  );
};

export default ScannerBottomBorder;
