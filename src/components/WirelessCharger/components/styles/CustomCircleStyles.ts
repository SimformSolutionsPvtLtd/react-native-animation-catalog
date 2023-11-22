import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../theme';
import type { CustomCircleProps } from '../../types';

const { roundToNearestPixel } = Metrics;

const styles = ({
  size,
  item,
  circleOpacity,
  outerCircleColor,
}: CustomCircleProps) =>
  StyleSheet.create({
    groupOfCircle: {
      opacity: circleOpacity,
      width: roundToNearestPixel(item?.width),
      position: 'absolute',
      transform: [{ rotate: `${item?.angle}deg` }],
    },
    circles: {
      height: roundToNearestPixel(size * 0.05),
      width: roundToNearestPixel(size * 0.05),
      borderRadius: roundToNearestPixel(size * 0.025),
      backgroundColor: outerCircleColor,
    },
  });

export default styles;
