import type Animated from 'react-native-reanimated';
import type { PathProps } from 'react-native-svg';
import type { Range } from '../../types';

export interface HeartRatePropsType {
  size: Range<50, 251>;
  speed: number;
  pulseColor: string;
  gridColor: string;
  pulseWidth: number;
  isGridVisible: boolean;
  heartRateType: 'Default' | 'FollowUp';
}

export interface SimpleHeartRatePropsType {
  size: number;
  pulseWidth: number;
  pulseColor: string;
  defaultPath: string;
  defaultAnimationProps: Partial<{
    strokeDashoffset: number;
  }>;
  AnimatedPath: React.ComponentClass<Animated.AnimateProps<PathProps>, any>;
}

export interface FollowUpHeartRatePropsType {
  size: number;
  pulseColor: string;
  pulseWidth: number;
  followUpAnimationProps: Partial<{
    strokeDasharray: Array<number>;
    strokeDashoffset: number;
  }>;
  AnimatedPath: React.ComponentClass<Animated.AnimateProps<PathProps>, any>;
  followUpPath: string;
}

export enum HeartRateEnum {
  DEFAULT = 'Default',
  FOLLOWUP = 'FollowUp',
}

export interface StyleProps {
  size: number;
  gridColor: string;
}
