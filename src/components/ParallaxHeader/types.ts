import type { ReactNode, RefObject } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { FlatList } from 'react-native';
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
