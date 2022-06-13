import ParallaxHeaderWithOutTab from './ParallaxHeaderWithOutTab';
import ParallaxHeaderWithTab from './ParallaxHeaderWithTab';

const ParallaxHeader = Object.assign(ParallaxHeaderWithOutTab, {
  WithTab: ParallaxHeaderWithTab,
});

export type {
  AnimatedFlatListProps,
  HeaderProps,
  ParallaxHeaderProps,
  ParallaxHeaderWithTabProps,
  RenderDefaultProps,
  ActiveTabIndex,
  StickyHeaderProps,
  TabBarProps,
} from './types';
export { ParallaxHeader };
