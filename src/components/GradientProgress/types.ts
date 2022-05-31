import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

//Gradient Color shade coordinates
interface StartEndCoordinateProps {
  x: number;
  y: number;
}

export interface GradientProgressProps {
  //colors type which add in array
  colors?: Array<string>;
  //speed(delay for animation moving)
  speed?: number;
  //Gradient Color shade coordinates (give as object i.e. {x: 0, y: 0.4})
  start?: StartEndCoordinateProps;
  end?: StartEndCoordinateProps;
  //for component
  children?: ReactNode;
  //for styling
  style?: StyleProp<ViewStyle>;
  //nativeDriver activation
  useNativeDriver?: boolean;
}

export interface NativeLinearGradientProps {
  colorFirst?: string;
  colorSecond?: string;
  children?: ReactNode;
  start?: StartEndCoordinateProps;
  end?: StartEndCoordinateProps;
  style?: StyleProp<ViewStyle>;
}
