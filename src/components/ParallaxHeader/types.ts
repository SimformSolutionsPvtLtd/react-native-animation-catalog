import type { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import type { ReactNode, RefObject } from 'react';
import type { FlatList, StyleProp, ViewProps, ViewStyle } from 'react-native';
import type Animated from 'react-native-reanimated';

export interface StickyHeaderProps {
  style: StyleProp<ViewStyle>;
  name: string;
  children: ReactNode;
}

export interface HeaderProps {
  style: StyleProp<ViewStyle>;
  name: string;
  photo: number;
  description: string;
  children: ReactNode;
}

export interface TabBarProps {
  onIndexChange: (index: number) => void;
}

//for parallel tab scroll types
export interface ScrollPair {
  list: RefObject<FlatList>;
  position: Animated.SharedValue<number>;
}

//for header collapsing types
export interface HeaderConfig {
  heightExpanded: number;
  heightCollapsed: number;
}

//for ActiveTabIndex
export interface ActiveTabIndex {
  tabIndex: number;
}

//for ParallaxHeaderWithTabs
export interface ParallaxHeaderWithTabProps {
  renderHeader: () => React.ReactElement;
  renderStickyHeader: () => React.ReactElement;
  tabs: {
    title: string;
    data: any[];
    renderTabContent: ({ item }: any) => React.ReactElement;
    tabOptions?: MaterialTopTabNavigationOptions;
    renderFlatListProps?: any;
  }[];
  backBehavior: 'firstRoute' | 'initialRoute' | 'order' | 'history' | 'none';
  tabBarPosition: 'top' | 'bottom';
  initialRouteName: string;
  onTabChange: ({ tabIndex }: ActiveTabIndex) => void;
  screenOptions: MaterialTopTabNavigationOptions;
}

//for DefaultRender Item
export interface RenderDefaultProps {
  item: {
    name: string;
    photo: string;
  };
}

//for DefaultItem Props
export type DefaultItemProps = Pick<ViewProps, 'style'> & {
  items: {
    name: string;
    photo: string;
  };
};

//for AnimatedFlatList Props
export interface AnimatedFlatListProps {
  data: any[];
  renderTabContent: ({ item }: any) => React.ReactElement;
}
