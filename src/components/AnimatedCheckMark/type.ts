import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

// this type is written for range between 15-150 for size
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

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

export interface CircularAnimatedStyle {
  size: number;
  duration: number;
}
