import ParallaxHeaderWithTab from './ParallaxHeaderWithTab';

const ParallaxHeader = Object.assign(ParallaxHeaderWithTab, {
  WithTab: ParallaxHeaderWithTab,
});

export type {
  StickyHeaderProps,
  HeaderProps,
  TabBarProps,
  ParallaxHeaderWithTabProps,
  RenderDefaultProps,
  AnimatedFlatListProps,
  ActiveTabIndex,
} from './types';
export { ParallaxHeader };
