import { useEffect, useState } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Metrics } from '../../../theme';
import type { AnimatedScannerProps } from '../types';

const { verticalScale } = Metrics;

const useAnimatedScanner = ({
  zoomingDelay,
  strokeDelay = 1400,
  initialZoomScale = 0.9,
  height = verticalScale(200),
}: Partial<AnimatedScannerProps>) => {
  const progress = useSharedValue(0);
  const scale = useSharedValue(initialZoomScale);
  const x = useSharedValue(0);
  const [stopZooming] = useState(false);

  //-------------- Outer Zooming Effect------------------
  const outerZoomingEffect = useAnimatedStyle(() => {
    return {
      opacity: progress?.value,
      transform: [{ scale: scale?.value }],
    };
  });

  //-------------vertical animation------------
  const verticalAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: progress?.value,
      transform: [
        {
          translateY: x.value,
        },
      ],
    };
  });

  useEffect(() => {
    progress.value = withTiming(1);
    scale.value = withRepeat(
      withTiming(1, {
        duration: zoomingDelay,
      }),
      -2,
      true
    );
    x.value = withRepeat(
      withTiming(height + 10, {
        duration: strokeDelay,
      }),
      -25,
      true
    );
  });

  return {
    outerZoomingEffect,
    verticalAnimationStyle,
    strokeDelay,
    initialZoomScale,
    stopZooming,
    zoomingDelay,
  };
};

export default useAnimatedScanner;
