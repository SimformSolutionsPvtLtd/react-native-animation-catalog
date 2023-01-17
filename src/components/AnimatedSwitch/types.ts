import type { ViewStyle } from 'react-native';
import type { Range } from '../../types';

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
