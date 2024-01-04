import type {
  LayoutChangeEvent,
  LayoutRectangle,
  TextLayoutLine,
} from 'react-native';

export interface AnimatedDotProps {
  text: string;
  dotSize: number;
  speed: number;
  animationTiming: number;
  textLayout: Partial<TextLayoutLine>;
  individualLayout?: { [key: string]: Partial<LayoutRectangle> };
  amplitude?: number;
  isReverse: boolean;
  bounceDelay: number;
  particleDelay: number;
}

export interface AnimatedCharProps {
  fontSize: number;
  char: string;
  index: number;
  textWidth?: number;
  text: string;
  speed: number;
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
  isReverse: boolean;
  dotSize: number;
  bounceDelay: number;
  particleDelay: number;
}

export interface AnimatedTextProps {
  text: string;
  fontSize?: number;
  dotSize?: number;
  speed?: number;
  backGroundColor?: string;
  amplitude?: number;
  type?: TypeOfAnimation;
  bounceDelay?: number;
  particleDelay?: number;
}

type TypeOfAnimation = 'normal' | 'reverse';

export enum AnimatedTextEnum {
  NORMAL = 'normal',
  REVERSE = 'reverse',
}

export interface StyleProps {
  backGroundColor: string;
  fontSize: number;
}

export interface DotStyleProps {
  dotSize: number;
}

export interface AnimatedCharHook {
  isReverse: boolean;
  index: number;
  dotSize: number;
  textWidth: number;
  particleDelay: number;
  text: string;
  speed: number;
  bounceDelay: number;
}

export interface AnimatedDotHook {
  text: string;
  isReverse: boolean;
  amplitude?: number;
  textLayout: Partial<TextLayoutLine>;
  individualLayout?: { [key: string]: Partial<LayoutRectangle> };
  dotSize: number;
  bounceDelay: number;
  animationTiming: number;
  speed: number;
  particleDelay: number;
}
