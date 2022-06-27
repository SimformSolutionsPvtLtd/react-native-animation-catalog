import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import type { AnimatedScannerProps } from './types';

const ScannerTopBorder = ({
  strokeColor,
  borderWidth,
  height,
  borderColor,
  borderRadius,
}: Partial<AnimatedScannerProps>) => {
  const {
    borderMainView,
    scannerBorderLeftView,
    horizonalWidth,
    scannerBorderRightView,
  } = styles({
    strokeColor,
    borderWidth,
    height,
    borderColor,
    borderRadius,
  });

  return (
    <View style={borderMainView}>
      <View style={scannerBorderLeftView} />
      <View style={horizonalWidth} />
      <View style={scannerBorderRightView} />
    </View>
  );
};

export default ScannerTopBorder;
