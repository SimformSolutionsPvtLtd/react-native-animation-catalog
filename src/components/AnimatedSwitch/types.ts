import type { ViewStyle } from 'react-native';

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

export interface AnimatedSwitchProps {
  size: Range<40, 151>;
  lightThemeColor: string;
  darkThemeColor: string;
  onToggle?: (status: string) => void;
}

export interface StyleProps {
  size: Range<40, 151>;
}

export interface DayAndNightAnimatedSwitchProps {
  size: Range<40, 151>;
  onToggle?: (status: string) => void;
}

export interface AnimatedCloudProps {
  cloudPosition?: ViewStyle;
  cloudBackground?: ViewStyle;
  cloudCircle?: ViewStyle;
  size: Range<40, 151>;
}

export interface AnimatedStarProps {
  starContainerStyle: ViewStyle;
}

export interface SeaThemeSwitchProps {
  size: Range<40, 151>;
  onToggle?: (status: string) => void;
}
