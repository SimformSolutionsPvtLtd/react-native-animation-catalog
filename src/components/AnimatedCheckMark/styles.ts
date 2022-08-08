import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';
import type { StyleProps } from './type';

const { moderateScale, horizontalScale, verticalScale } = Metrics;

const styles = ({
  size,
  backgroundColor,
  particleColor,
  checkMarkColor,
  primaryParticleColor,
}: StyleProps) =>
  StyleSheet.create({
    primaryCircle: {
      position: 'absolute',
      width: moderateScale(size),
      height: moderateScale(size),
      borderRadius: moderateScale(size / 2),
      backgroundColor,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondaryCircle: {
      width: moderateScale(size * 2),
      height: moderateScale(size * 2),
      borderRadius: moderateScale(size),
      backgroundColor,
    },
    image: {
      height: verticalScale(size / 2 + (size % 10)),
      position: 'absolute',
      resizeMode: 'contain',
      zIndex: 1,
      tintColor: checkMarkColor,
    },
    innerCircle: {
      position: 'absolute',
      width: moderateScale(size),
      height: moderateScale(size),
      borderRadius: moderateScale(size / 2),
      backgroundColor,
      justifyContent: 'center',
      alignItem: 'center',
    },
    particle: {
      position: 'absolute',
      backgroundColor: particleColor,
    },
    primaryParticle: { position: 'absolute', tintColor: primaryParticleColor },
    leftParticle: { marginLeft: horizontalScale(-size * 0.25) },
    rightParticle: { marginLeft: horizontalScale(size * 0.25) },
  });

export default styles;
