import React from 'react';
import { Image, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Colors } from '../../theme';
import Images from './../../assets';
import { useAnimatedScanner } from './hooks';
import ScannerBottomBorder from './ScannerBottomBorder';
import ScannerTopBorder from './ScannerTopBorder';
import styles from './styles';
import type { AnimatedScannerProps } from './types';

const AnimatedScanner = ({
  style,
  children,
  zoomingDelay = 1400,
  strokeDelay = 1400,
  initialZoomScale = 0.9,
  strokeColor = Colors.redVelvet,
  height,
  width,
  strokeWidth,
  borderWidth,
  borderColor,
  borderRadius,
  stopZooming,
}: Partial<AnimatedScannerProps>) => {
  const { verticalAnimationStyle, outerZoomingEffect } = useAnimatedScanner({
    initialZoomScale,
    strokeDelay,
    zoomingDelay,
    height,
    width,
  });

  const {
    container,
    childernView,
    animationView,
    verticalScrollAnimated,
    verticalLineView,
    propsView,
    imageStyle,
  } = styles({
    strokeColor,
    height,
    borderColor,
    strokeWidth,
    borderRadius,
    width,
    style,
  });

  return (
    <View style={[container, style]}>
      <Animated.View
        style={[animationView, stopZooming ? null : outerZoomingEffect]}
      >
        <ScannerTopBorder
          strokeColor={strokeColor}
          height={height}
          borderColor={borderColor}
          borderRadius={borderRadius}
          borderWidth={borderWidth}
        />
        <Animated.View style={[verticalScrollAnimated, verticalAnimationStyle]}>
          <View style={verticalLineView} />
        </Animated.View>
        <View style={propsView} />
        <ScannerBottomBorder
          strokeColor={strokeColor}
          height={height}
          borderColor={borderColor}
          borderRadius={borderRadius}
          borderWidth={borderWidth}
        />
      </Animated.View>
      <View style={childernView}>
        {!children ? (
          <Image source={Images.pdf} style={imageStyle} />
        ) : (
          children
        )}
      </View>
    </View>
  );
};

export default AnimatedScanner;
