import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';
import type { WirelessChargerStyleProps } from './types';

const { roundToNearestPixel } = Metrics;

const styles = ({ size, wifiWaveColor }: WirelessChargerStyleProps) =>
  StyleSheet.create({
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
