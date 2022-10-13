import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
import type { AnimatedScannerProps } from './types';

const { horizontalScale, verticalScale, moderateScale } = Metrics;

const styles = ({
  strokeColor = Colors.red100,
  height = 207,
  borderColor = Colors.lightBlue900,
  borderRadius = moderateScale(10),
  borderWidth = horizontalScale(2),
  strokeWidth = horizontalScale(240),
  width = 307,
}: Partial<AnimatedScannerProps>) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: verticalScale(20),
    },
    animationView: {
      height: verticalScale(height),
      width: horizontalScale(width),
    },
    borderMainView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    scannerBorderLeftView: {
      borderColor: borderColor,
      borderLeftWidth: horizontalScale(borderWidth),
      borderTopWidth: verticalScale(borderWidth),
      height: verticalScale(50),
      width: horizontalScale(50),
      borderTopLeftRadius: borderRadius,
    },
    scannerBorderRightView: {
      borderColor: borderColor,
      borderRightWidth: horizontalScale(borderWidth),
      borderTopWidth: verticalScale(borderWidth),
      height: verticalScale(50),
      width: horizontalScale(50),
      borderTopRightRadius: borderRadius,
    },
    innerVerticalScrollAnimated: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    verticalLineView: {
      bottom: verticalScale(10),
      height: verticalScale(5),
      width: horizontalScale(strokeWidth),
      backgroundColor: strokeColor,
      opacity: 0.5,
      alignContent: 'center',
      alignItems: 'center',
    },
    scannerBottomLeftView: {
      borderColor: borderColor,
      borderLeftWidth: horizontalScale(borderWidth),
      borderBottomWidth: verticalScale(borderWidth),
      height: verticalScale(50),
      width: horizontalScale(50),
      borderBottomLeftRadius: borderRadius,
    },
    propsView: {
      height: verticalScale(height),
    },
    horizonalWidth: {
      width: horizontalScale(150),
    },
    scannerBottomRightView: {
      borderColor: borderColor,
      borderRightWidth: horizontalScale(borderWidth),
      borderBottomWidth: verticalScale(borderWidth),
      height: verticalScale(50),
      width: horizontalScale(50),
      borderBottomRightRadius: borderRadius,
    },
    childernView: {
      height: height,
      width: horizontalScale(300),
      top: verticalScale(50),
      bottom: verticalScale(50),
      justifyContent: 'center',
      position: 'absolute',
      alignSelf: 'center',
      zIndex: -1,
      alignItems: 'center',
    },
    imageStyle: {
      height: verticalScale(200),
      width: horizontalScale(200),
      marginTop: verticalScale(7),
    },
  });
export default styles;
