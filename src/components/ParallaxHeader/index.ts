import RNParallaxHeader from './ParallaxHeader';
import ParallaxHeaderWithTab from './ParallaxHeaderWithTab';

const ParallaxHeader = Object.assign(RNParallaxHeader, {
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
