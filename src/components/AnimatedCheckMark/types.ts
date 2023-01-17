import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import type { Range } from '../../types';

export interface AnimatedCheckMarkProps {
  containerStyle: StyleProp<ViewStyle>;
  size: Range<15, 150>;
  duration: number;
  backgroundColor: string;
  checkMarkColor: string;
  innerCircle: boolean;
  particleColor: string;
  disableParticles: boolean;
  imageSource: ImageSourcePropType;
  primaryParticleColor?: string;
}

export interface AnimatedParticlesProps {
  size: Range<15, 150>;
  duration: number;
  particleColor: string;
  primaryParticleColor?: string;
}

export interface StyleProps {
  size: number;
  backgroundColor?: string;
  particleColor?: string;
  checkMarkColor?: string;
  primaryParticleColor?: string;
  color?: string;
  topBorderColor?: string;
  rightBorderColor?: string;
  bottomBorderColor?: string;
  leftBorderColor?: string;
}

export interface CircularAnimatedProps {
  size: number;
  duration: number;
}
export interface AnimationCheckMarkProps {
  size: number;
  duration: number;
}
