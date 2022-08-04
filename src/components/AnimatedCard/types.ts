import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface SwipeCallEndProps {
  onLeftSwipeEnd: () => void;
  onRightSwipeEnd: () => void;
}

export interface SwipeCallBackProps {
  onLeftSwipe: () => void;
  onRightSwipe: () => void;
}

export interface SimpleCardProps {
  style: StyleProp<ViewStyle>;
  renderCard: ({
    onLeftSwipe,
    onRightSwipe,
  }: SwipeCallBackProps) => React.ReactElement;
  onLeftSwipeEnd: () => void;
  onRightSwipeEnd: () => void;
  cardStyle: StyleProp<ViewStyle>;
}

export interface SwipeableCardProps {
  children: ReactNode;
  style: StyleProp<ViewStyle>;
  cardStyle: StyleProp<ViewStyle>;
}
