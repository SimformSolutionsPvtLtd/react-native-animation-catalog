import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
import type { StyleProps } from './types';

const { roundToNearestPixel } = Metrics;

const styles = ({ size }: StyleProps) =>
  StyleSheet.create({
    buttonContainer: {
      height: roundToNearestPixel(size),
      width: roundToNearestPixel(size * 2.2),
      borderRadius: size / 2,
      overflow: 'hidden',
    },
    overrideNotch: {
      height: roundToNearestPixel(size * 0.74),
      width: roundToNearestPixel(size * 0.74),
      borderRadius: size / 2,
      top: roundToNearestPixel(size / 9),
      right: roundToNearestPixel(size * 0.85),
      zIndex: 1,
    },
    notch: {
      height: roundToNearestPixel(size * 0.85),
      width: roundToNearestPixel(size * 0.85),
      backgroundColor: Colors.white,
      borderRadius: size / 2,
      position: 'absolute',
      top: roundToNearestPixel(size * 0.073),
      left: roundToNearestPixel(size * 0.087),
    },
  });

export default styles;
