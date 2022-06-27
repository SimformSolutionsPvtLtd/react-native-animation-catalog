import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
import type { AnimatedFlickerLoaderProp } from './type';

const { moderateScale } = Metrics;

const styles = ({
  leftCircleColor = Colors.red,
  rightCircleColor = Colors.blue,
  size = 70,
}: Partial<AnimatedFlickerLoaderProp>) =>
  StyleSheet.create({
    containerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftCircleStyle: {
      height: moderateScale(size),
      width: moderateScale(size),
      backgroundColor: leftCircleColor,
      borderRadius: moderateScale(60),
      position: 'absolute',
    },
    rightCircleStyle: {
      height: moderateScale(size),
      width: moderateScale(size),
      backgroundColor: rightCircleColor,
      borderRadius: moderateScale(60),
    },
    circleView: {
      height: size,
      width: size * 2 + 10,
    },
  });

export default styles;
