import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
import type { StyleProps } from './types';

const { roundToNearestPixel } = Metrics;

const styles = ({ size = 100 }: Partial<StyleProps>) =>
  StyleSheet.create({
    backgroundContainer: {
      height: roundToNearestPixel(size),
      width: roundToNearestPixel(size * 2.2),
      borderRadius: size / 2,
      overflow: 'hidden',
      justifyContent: 'flex-end',
    },
    dayAndNightButtonContainer: {
      height: roundToNearestPixel(size * 0.925),
      width: roundToNearestPixel(size * 2.2),
      borderRadius: size / 2,
      overflow: 'hidden',
    },
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
    sunLikeNotch: {
      height: roundToNearestPixel(size * 0.85),
      width: roundToNearestPixel(size * 0.85),
      backgroundColor: Colors.lightYellow,
      borderRadius: (size * 0.85) / 2,
      position: 'absolute',
      left: roundToNearestPixel(size * 0.087),
    },
    bigCloudPosition: {
      position: 'absolute',
      right: roundToNearestPixel(size * 0.2),
      top: roundToNearestPixel(size * 0.5),
    },
    moonSpot: {
      height: roundToNearestPixel(size * 0.3),
      width: roundToNearestPixel(size * 0.3),
      borderRadius: (size * 0.3) / 2,
      position: 'absolute',
      top: roundToNearestPixel(size * 0.17),
      left: roundToNearestPixel(size * 0.15),
    },
    mediumMoonSpot: {
      height: roundToNearestPixel(size * 0.2),
      width: roundToNearestPixel(size * 0.2),
      borderRadius: (size * 0.2) / 2,
      position: 'absolute',
      top: roundToNearestPixel(size * 0.13),
      left: roundToNearestPixel(size * 0.4),
    },
    smallMoonSpot: {
      height: roundToNearestPixel(size * 0.16),
      width: roundToNearestPixel(size * 0.16),
      borderRadius: (size * 0.16) / 2,
      position: 'absolute',
      top: roundToNearestPixel(size * 0.5),
      left: roundToNearestPixel(size * 0.55),
    },
    smallCloudPosition: {
      position: 'absolute',
      right: roundToNearestPixel(size * 0.6),
      top: roundToNearestPixel(size * 0.15),
    },
    firstPartOfSmallClouds: {
      height: roundToNearestPixel(size * 0.125),
      width: roundToNearestPixel(size * 0.3125),
      backgroundColor: Colors.white,
      borderRadius: size / 2,
    },
    firstPartOfBigClouds: {
      height: roundToNearestPixel(size * 0.18),
      width: roundToNearestPixel(size * 0.45),
      backgroundColor: Colors.white,
      borderRadius: size / 2,
    },
    secondPartOfBigClouds: {
      height: roundToNearestPixel(size * 0.2),
      width: roundToNearestPixel(size * 0.2),
      backgroundColor: Colors.white,
      borderRadius: (size * 0.2) / 2,
      position: 'absolute',
      right: roundToNearestPixel(size * 0.09),
      bottom: roundToNearestPixel(size * 0.063),
    },
    secondPartOfSmallClouds: {
      height: roundToNearestPixel(size * 0.14),
      width: roundToNearestPixel(size * 0.14),
      backgroundColor: Colors.white,
      borderRadius: (size * 0.14) / 2,
      position: 'absolute',
      right: roundToNearestPixel(size * 0.0625),
      bottom: roundToNearestPixel(size * 0.04375),
    },
    starContainer: {
      backgroundColor: Colors.matterhornSnow,
    },
    fallingStar: {
      width: roundToNearestPixel(size * 0.3),
      height: roundToNearestPixel(size * 0.01),
      backgroundColor: Colors.matterhornSnow,
      position: 'absolute',
      left: roundToNearestPixel(size * -1),
      top: roundToNearestPixel(size * -0.5),
    },
    star: {
      position: 'absolute',
      top: roundToNearestPixel(size * 0.15),
      right: roundToNearestPixel(size * 0.75),
      height: roundToNearestPixel(size * 0.08),
      width: roundToNearestPixel(size * 0.08),
      borderRadius: (size * 0.08) / 2,
    },
    smallStar: {
      position: 'absolute',
      top: roundToNearestPixel(size * 0.45),
      right: roundToNearestPixel(size * 0.45),
      height: roundToNearestPixel(size * 0.055),
      width: roundToNearestPixel(size * 0.055),
      borderRadius: (size * 0.055) / 2,
    },
    bigStar: {
      position: 'absolute',
      top: roundToNearestPixel(size * 0.55),
      right: roundToNearestPixel(size),
      height: roundToNearestPixel(size * 0.1),
      width: roundToNearestPixel(size * 0.1),
      borderRadius: (size * 0.1) / 2,
    },
    seaThemeButtonContainer: {
      height: roundToNearestPixel(size),
      width: roundToNearestPixel(size * 2.6),
      borderRadius: size / 2,
      overflow: 'hidden',
      borderWidth: roundToNearestPixel(size * 0.005),
      borderColor: Colors.black,
    },
    firstLayerOfSun: {
      height: roundToNearestPixel(size * 0.4666666667),
      width: roundToNearestPixel(size * 0.4666666667),
      borderRadius: size / 2,
      backgroundColor: Colors.transparentLemon100,
      position: 'absolute',
      left: roundToNearestPixel(size * 1.04666666667),
      bottom: roundToNearestPixel(size * 0.4533333333),
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondLayerOfSun: {
      height: roundToNearestPixel(size * 0.29333333333),
      width: roundToNearestPixel(size * 0.29333333333),
      borderRadius: size / 2,
      backgroundColor: Colors.transparentLemon200,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    thirdLayerOfSun: {
      height: roundToNearestPixel(size * 0.1666666667),
      width: roundToNearestPixel(size * 0.1666666667),
      borderRadius: size / 2,
      backgroundColor: Colors.lightYellow2,
      position: 'absolute',
      zIndex: 1,
    },
    moonStyle: {
      height: roundToNearestPixel(size * 0.1666666667),
      width: roundToNearestPixel(size * 0.1666666667),
      borderRadius: size / 2,
      backgroundColor: Colors.white,
      position: 'absolute',
      left: roundToNearestPixel(size * 1.19333333333),
      bottom: roundToNearestPixel(size * 0.606666666667),
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    seaThemeNotch: {
      height: roundToNearestPixel(size * 0.98),
      width: roundToNearestPixel(size * 0.98),
      backgroundColor: Colors.white,
      borderRadius: size / 2,
      borderColor: Colors.black,
      borderWidth: roundToNearestPixel(size * 0.0089),
      zIndex: 2,
    },
    upperCloudStyle: {
      height: roundToNearestPixel(size * 0.4666666667),
      width: roundToNearestPixel(size * 1.666666667),
      tintColor: Colors.texasRose,
      position: 'absolute',
      left: roundToNearestPixel(size * 0.033333333),
      top: roundToNearestPixel(size * 0.01),
    },
    cloudStyle: {
      height: roundToNearestPixel(size * 0.56666666667),
      width: roundToNearestPixel(size * 2.6666666667),
      position: 'absolute',
      left: roundToNearestPixel(size * 0.06666666667),
      top: roundToNearestPixel(size * 0.5),
    },
    coconutTree: {
      height: roundToNearestPixel(size * 0.946666667),
      width: roundToNearestPixel(size * 0.946666667),
      position: 'absolute',
      left: roundToNearestPixel(size * 0.62),
      bottom: 0,
      tintColor: Colors.black,
      zIndex: 1,
    },
    sideCloudStyle: {
      height: roundToNearestPixel(size * 0.2),
      width: roundToNearestPixel(size * 0.666666667),
      tintColor: Colors.texasRose,
      position: 'absolute',
      right: roundToNearestPixel(size * 0.533333333),
      top: roundToNearestPixel(size * 0.2733333333),
    },
    reverseCoconutTree: {
      height: roundToNearestPixel(size * 1.33333333),
      width: roundToNearestPixel(size * 1.33333333),
      position: 'absolute',
      right: roundToNearestPixel(size * 0.013333333),
      top: roundToNearestPixel(size * 0.2266666667),
      tintColor: Colors.black,
      zIndex: 1,
    },
    seaViewStyle: {
      height: roundToNearestPixel(size * 0.15),
      width: roundToNearestPixel(size * 2.6),
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      overflow: 'hidden',
    },
    riverStyle: {
      height: roundToNearestPixel(size * 0.1666666667),
      width: roundToNearestPixel(size * 0.2666666667),
    },
  });

export default styles;
