import AnimatedThemeSwitch from './AnimatedSwitch';
import DayAndNightAnimatedSwitch from './DayAndNightAnimatedSwitch';
import SeaThemeAnimatedSwitch from './SeaThemeAnimatedSwitch';

const AnimatedSwitch = Object.assign(AnimatedThemeSwitch, {
  DayAndNightTheme: DayAndNightAnimatedSwitch,
  SeaTheme: SeaThemeAnimatedSwitch,
});

export type {
  AnimatedSwitchProps,
  StyleProps,
  DayAndNightAnimatedSwitchProps,
  AnimatedCloudProps,
  AnimatedStarProps,
} from './types';
export { AnimatedSwitch };
