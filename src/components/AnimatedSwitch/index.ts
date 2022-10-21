import AnimatedThemeSwitch from './AnimatedSwitch';
import DayAndNightAnimatedSwitch from './DayAndNightAnimatedSwitch';

const AnimatedSwitch = Object.assign(AnimatedThemeSwitch, {
  DayAndNightTheme: DayAndNightAnimatedSwitch,
});

export type {
  AnimatedSwitchProps,
  StyleProps,
  DayAndNightAnimatedSwitchProps,
  AnimatedCloudProps,
  AnimatedStarProps,
} from './types';
export { AnimatedSwitch };
