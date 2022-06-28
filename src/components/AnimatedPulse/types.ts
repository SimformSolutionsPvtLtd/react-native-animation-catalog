import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface AnimatedPulseProps {
  pulseStyle: StyleProp<ViewStyle>;
  pulseStart: number;
  pulseEnd: number;
  pulseSpeed: number;
  children: ReactNode;
  pulseDisable: boolean;
}
