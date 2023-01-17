import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { Range } from '../../types';

export interface AnimatedScannerProps {
  style: StyleProp<ViewStyle>;
  children: ReactNode;
  strokeDelay: number;
  strokeColor: string | undefined;
  initialZoomScale: number;
  height: Range<199, 401>;
  width: Range<299, 351>;
  borderColor: string;
  zoomingDelay: number;
  stopZooming: boolean;
  borderRadius: number;
  borderWidth: number;
  strokeWidth: number;
}
