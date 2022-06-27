import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface AnimatedScannerProps {
  style: StyleProp<ViewStyle>;
  children: ReactNode;
  strokeDelay: number;
  strokeColor: string | undefined;
  initialZoomScale: number;
  height: number;
  width: number;
  borderColor: string;
  zoomingDelay: number;
  stopZooming: boolean;
  borderRadius: number;
  borderWidth: number;
  strokeWidth: number;
}
