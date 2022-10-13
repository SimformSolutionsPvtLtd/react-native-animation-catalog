import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

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
