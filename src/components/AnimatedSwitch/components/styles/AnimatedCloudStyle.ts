import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../../theme';
import type { StyleProps } from "../../types";

const { roundToNearestPixel } = Metrics;

const style = ({ size = 100 }: Partial<StyleProps>) =>
  StyleSheet.create({
    upperCloudPosition: {
      position: 'absolute',
      right: roundToNearestPixel(size * 0.6),
      top: roundToNearestPixel(size * 0.15),
    },
    upperCloudBackgroundStyle: {
      height: roundToNearestPixel(size * 0.125),
      width: roundToNearestPixel(size * 0.3125),
      backgroundColor: Colors.matterhornSnow,
      borderRadius: size / 2,
    },
    upperCloudCircleStyle: {
      height: roundToNearestPixel(size * 0.14),
      width: roundToNearestPixel(size * 0.14),
      backgroundColor: Colors.matterhornSnow,
      borderRadius: (size * 0.14) / 2,
      position: 'absolute',
      right: roundToNearestPixel(size * 0.0625),
      bottom: roundToNearestPixel(size * 0.04375),
    },
  });
  export default style;