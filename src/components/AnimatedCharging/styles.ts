import { StyleSheet } from 'react-native';
import type { AnimatedChargingStyleProps } from './types';

const style = ({
  size,
  adapterColor,
  backgroundColor,
  stormColor,
  frontWaveColor,
  backWaveColor,
}: AnimatedChargingStyleProps) =>
  StyleSheet.create({
    circle: {
      width: size,
      height: size,
      overflow: 'hidden',
      borderRadius: size * 0.8,
      backgroundColor: backgroundColor,
    },
    adapter: {
      zIndex: 1,
      overflow: 'hidden',
      left: size * 0.2114,
      width: size * 0.5714,
      position: 'absolute',
      height: size * 0.5714,
      backgroundColor: adapterColor,
      borderRadius: size * 0.5714 * 0.2,
    },
    emptyView: {
      zIndex: 1,
      height: size * 0.2571,
      backgroundColor: adapterColor,
    },
    dash: {
      backgroundColor: backgroundColor,
      borderRadius: size * 0.028,
      width: size * 0.5714 * 0.14,
      height: size * 0.5714 * 0.05,
      marginVertical: size * 0.5714 * 0.075,
      marginHorizontal: size * 0.5714 * 0.06,
    },
    cable: {
      tintColor: adapterColor,
      width: size * 0.2342,
      height: size * 0.4285,
      marginLeft: size * 0.4571,
    },
    storm: {
      zIndex: 1,
      width: size * 0.2,
      left: size * 0.4057,
      tintColor: stormColor,
      position: 'absolute',
      height: size * 0.2857,
      bottom: size * 0.3714,
    },
    dashContainer: {
      flexWrap: 'wrap',
      alignItems: 'center',
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'center',
      top: size * 0.5714 * 0.5,
      height: size * 0.5714 * 0.4,
    },
    frontWave: {
      position: 'absolute',
      tintColor: frontWaveColor,
      height: size * 0.68,
      width: size * 0.68 * 3.75,
    },
    backWave: {
      height: size * 0.68,
      width: size * 0.68 * 3.75,
      position: 'absolute',
      tintColor: backWaveColor,
    },
  });

export default style;
