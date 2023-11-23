import React from 'react';
import { Colors } from '../../theme';
import type { SimpleHeartRatePropsType } from './types';

const SimpleHeartRate = ({
  size,
  defaultAnimationProps,
  AnimatedPath,
  defaultPath,
  pulseColor,
  pulseWidth,
}: SimpleHeartRatePropsType) => {
  return (
    <AnimatedPath
      d={defaultPath}
      stroke={pulseColor}
      fill={Colors.transparent}
      strokeWidth={pulseWidth}
      strokeLinejoin={'round'}
      strokeDasharray={710}
      animatedProps={defaultAnimationProps}
      scale={size * 0.004}
    />
  );
};

export default SimpleHeartRate;
