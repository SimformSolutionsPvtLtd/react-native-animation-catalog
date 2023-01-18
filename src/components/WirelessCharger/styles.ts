import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';
import type { WirelessChargerStyleProps } from './types';

const { roundToNearestPixel } = Metrics;

const styles = ({ size, wifiWaveColor }: WirelessChargerStyleProps) =>
  StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: size * 1.555,
      width: size * 1.555,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },
    circleContainer: {
      height: roundToNearestPixel(size),
      width: roundToNearestPixel(size),
      borderRadius: roundToNearestPixel(size),
      backgroundColor: wifiWaveColor,
      opacity: 0.55,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },
  });

export default styles;
