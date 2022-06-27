import type { StyleProp, ViewStyle } from 'react-native';

export interface AnimatedFlickerLoaderProp {
  leftCircleColor: string;
  rightCircleColor: string;
  duration: number;
  size: number;
  START_POINT: number;
  END_POINT: number;
  DURATION: number;
  style: StyleProp<ViewStyle>;
}
