import type { ViewStyle } from 'react-native';

export interface TypingIndicatorProps {
  style?: ViewStyle;
  dotStyles?: ViewStyle;
  dotColor?: string;
  dotSpacing?: number;
  dotAmplitude?: number;
  dotSpeed?: number;
  show?: boolean;
  dotRadius?: number;
  dotY?: number;
  dotX?: number;
}

export interface DotProps {
  x: number;
  y: number;
  radius: number;
}

export interface AnimationParamProps {
  time: number;
  radius1: number;
  radius2: number;
  radius3: number;
}
