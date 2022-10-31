import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
import type { StyleProps } from './types';

const { roundToNearestPixel } = Metrics;

const style = ({ size = 100 }: Partial<StyleProps>) =>
  StyleSheet.create({
    backgroundContainer: {
      height: roundToNearestPixel(size),
      width: roundToNearestPixel(size * 2.2),
      borderRadius: size / 2,
      overflow: 'hidden',
      justifyContent: 'flex-end',
    },
    buttonContainer: {
      height: roundToNearestPixel(size),
      width: roundToNearestPixel(size * 2.2),
      borderRadius: size / 2,
      overflow: 'hidden',
    },
    dayAndNightButtonContainer: {
      height: roundToNearestPixel(size * 0.925),
      width: roundToNearestPixel(size * 2.2),
      borderRadius: size / 2,
      overflow: 'hidden',
    },
    sunAnimationStyle: {
      height: roundToNearestPixel(size * 0.85),
      width: roundToNearestPixel(size * 0.85),
      backgroundColor: Colors.lightYellow,
      borderRadius: (size * 0.85) / 2,
      position: 'absolute',
      left: roundToNearestPixel(size * 0.087),
      marginTop: roundToNearestPixel(3),
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
    lowerCloudPosition: {
      position: 'absolute',
      right: roundToNearestPixel(size * 0.2),
      top: roundToNearestPixel(size * 0.5),
    },
    lowerCloudCircleSize: {
      height: roundToNearestPixel(size * 0.2),
      width: roundToNearestPixel(size * 0.2),
      backgroundColor: Colors.matterhornSnow,
      borderRadius: (size * 0.2) / 2,
      position: 'absolute',
      right: roundToNearestPixel(size * 0.09),
      bottom: roundToNearestPixel(size * 0.063),
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
    lowerCloudBackgroundStyle: {
      height: roundToNearestPixel(size * 0.18),
      width: roundToNearestPixel(size * 0.45),
      backgroundColor: Colors.matterhornSnow,
      borderRadius: size / 2,
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
export default style;
