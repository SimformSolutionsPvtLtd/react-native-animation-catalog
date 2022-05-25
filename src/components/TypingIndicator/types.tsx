import type { ViewProps } from 'react-native';

export interface TypingIndicatorProps {
  containerStyle?: ViewProps;
  dotStyle?: ViewProps;
  dotDuration?: number;
  dotDelay?: number;
  bounceHeight?: number;
  type?: 'bounce' | 'sine' | 'resize';
}
