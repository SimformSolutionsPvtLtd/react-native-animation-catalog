import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
import type { StrikeImageStylePropsType } from './types';

const { verticalScale } = Metrics;

const styles = ({ size, strikeWidth }: StrikeImageStylePropsType) =>
  StyleSheet.create({
    container: {
      overflow: 'hidden',
    },
    imageStyle: {
      width: size / 1.2,
      height: size / 1.2,
    },
    strikeLine: {
      left: size * -0.1,
      width: size * 1.04,
      top: size * 0.3571,
      position: 'absolute',
      height: size * 0.1142,
      justifyContent: 'center',
      transform: [{ rotate: '45deg' }],
    },
    parentStrikeLine: {
      width: size * 1.04,
      height: strikeWidth ?? size * 0.1142,
    },
    innerStrikeLine: {
      flex: 0.5,
      backgroundColor: Colors.white,
      top: verticalScale(-1),
    },
  });

export default styles;
