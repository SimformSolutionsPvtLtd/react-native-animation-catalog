import type { Range } from '../../types';

export interface AnimatedSignalProps {
  wifiArea: number;
  numberOfArcs: Range<1, 5>;
  color: string;
}

export interface useAnimatedSignalProps {
  size: number;
  numberOfArcs: Range<1, 5>;
}
