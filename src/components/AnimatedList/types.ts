import type React from 'react';
import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface AnimatedListProps {
  data: Array<any>;
  renderItem: ({ item }: any) => React.ReactElement;
  ItemSeparatorComponent?: () => React.ReactElement;

  //animation variant
  animationType?: 'bottom' | 'left' | 'right' | 'fade-up' | 'fade-down';
  animationDelay?: number;
  animationDuration?: number;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  cardStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
}

export interface AnimatedCardProps {
  index: number;
  animationType: 'bottom' | 'left' | 'right' | 'fade-up' | 'fade-down';
  children: ReactNode;
  animationDelay: number;
  animationDuration: number;
  cardStyle?: StyleProp<ViewStyle>;
}

export interface RenderItemProps {
  item: object;
  index: number;
}
