import type { Range } from '../../types';

export interface WirelessChargerProps {
  size: Range<100, 211>;
  wifiWaveColor: string;
  thunderColor: string;
  outerCircleColor: string;
}

export interface OuterCirclesProps {
  outerCircleAnimation: object;
  isOuterCircles?: boolean;
  size: number;
  outerCircleColor: string;
  circleOpacity?: number;
}

export interface GetExploreCircleProps {
  isOuter: boolean;
}

export interface WirelessChargerStyleProps {
  size: number;
  wifiWaveColor: string;
}

export interface ItemObject {
  angle: number;
  width: number;
}

export interface MainCircleStyleProps {
  thunderColor: string;
  wifiWaveColor: string;
  size: number;
}

export interface CustomCircleProps {
  size: number;
  item: ItemObject;
  circleOpacity?: number;
  outerCircleColor: string;
}

export interface OpacityObject {
  opacity: number;
}

export interface MainCircleProps {
  thunderColor: string;
  size: number;
  circleAnimation: object;
  outerSignalOpacity: OpacityObject;
  innerSignalOpacity: OpacityObject;
  wifiWaveColor: string;
}
