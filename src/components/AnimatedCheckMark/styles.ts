import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';
import type { StyleProps } from './types';

const { moderateScale, horizontalScale, verticalScale } = Metrics;

const styles = ({
  size,
  backgroundColor,
  particleColor,
  checkMarkColor,
  primaryParticleColor,
  topBorderColor,
  rightBorderColor,
  bottomBorderColor,
  leftBorderColor,
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
      width: moderateScale(size / 2 + (size % 10)),
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
    parentCircle: {
      width: size,
      height: size,
      borderWidth: 5,
      borderRadius: size / 2,
      borderColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    progressCircle: {
      width: size,
      height: size,
      position: 'absolute',
      borderWidth: 5,
      borderRadius: size / 2,
      zIndex: 2,
    },
    topRightViewStyle: {
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: topBorderColor,
    },
    bottomRightViewStyle: {
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: rightBorderColor,
      borderTopColor: 'transparent',
    },
    bottomLeftViewStyle: {
      borderLeftColor: 'transparent',
      borderBottomColor: bottomBorderColor,
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
    },
    topLeftViewStyle: {
      borderLeftColor: leftBorderColor,
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
    },
    checkMark: {
      position: 'absolute',
      resizeMode: 'contain',
      tintColor: checkMarkColor,
    },
    checkMarkBackground: {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
    checkMarkImage: {
      position: 'absolute',
      resizeMode: 'contain',
      tintColor: checkMarkColor,
    },
    circle: {
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: backgroundColor,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
