import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import type { StyleProps } from './types';

const style = ({ size, gridColor }: StyleProps) =>
  StyleSheet.create({
    canvas: {
      height: size,
      width: size * 1.5,
      backgroundColor: gridColor,
      flexWrap: 'wrap',
    },
    gradientStyle: {
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
    simpleHeartRateParent: {
      position: 'absolute',
      top: size / 5,
    },
    followUpHeartRateParent: {
      position: 'absolute',
      top: size / 8,
    },
    box: {
      backgroundColor: Colors.white,
      height: size / 8 - 2,
      width: size / 8 - 2,
      margin: 1,
    },
  });

export default style;
