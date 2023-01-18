import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../theme';
import type { MainCircleStyleProps } from '../../types';

const { roundToNearestPixel } = Metrics;

const heightOfSignal = 0.78333333;
const widthOfSignal = 0.466666667;

const styles = ({ thunderColor, wifiWaveColor, size }: MainCircleStyleProps) =>
  StyleSheet.create({
    circleContainer: {
      height: roundToNearestPixel(size),
      width: roundToNearestPixel(size),
      borderRadius: roundToNearestPixel(size),
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },
    thunderStyle: {
      tintColor: thunderColor,
      height: roundToNearestPixel(size * 0.605),
      width: roundToNearestPixel(size * 0.375),
      position: 'absolute',
      top: roundToNearestPixel(size * 0.2),
      left: roundToNearestPixel(size * 0.33),
    },
    leftBigWifiSignal: {
      height: roundToNearestPixel(size * heightOfSignal),
      width: roundToNearestPixel(size * widthOfSignal),
      position: 'absolute',
      left: roundToNearestPixel(size * -0.09),
      top: 0,
      transform: [{ rotate: '171deg' }, { scale: 0.4 }],
      tintColor: wifiWaveColor,
    },
    leftSmallWifiSignal: {
      height: roundToNearestPixel(size * 0.5),
      width: roundToNearestPixel(size * 0.24),
      position: 'absolute',
      left: roundToNearestPixel(size * 0.095),
      top: roundToNearestPixel(size * 0.16),
      transform: [{ scale: 0.49 }],
      tintColor: wifiWaveColor,
    },
    rightSmallWifiSignal: {
      height: roundToNearestPixel(size * heightOfSignal),
      width: roundToNearestPixel(size * widthOfSignal),
      position: 'absolute',
      right: roundToNearestPixel(size * 0.03),
      bottom: roundToNearestPixel(size * -0.035),
      transform: [{ rotate: '3deg' }, { scale: 0.4 }],
      tintColor: wifiWaveColor,
    },
    rightBigWifiSignal: {
      height: roundToNearestPixel(size * 2.63333333),
      width: roundToNearestPixel(size * 1.5),
      position: 'absolute',
      right: roundToNearestPixel(size * -0.565),
      bottom: roundToNearestPixel(-size),
      transform: [{ rotate: '3deg' }, { scale: 0.145 }],
      tintColor: wifiWaveColor,
    },
  });

export default styles;
