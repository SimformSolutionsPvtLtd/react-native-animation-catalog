import React from 'react';
import { Colors } from '../../theme';
import type { FollowUpHeartRatePropsType } from './types';

const FollowUpHeartRate = ({
  size,
  pulseColor,
  pulseWidth,
  followUpAnimationProps,
  AnimatedPath,
  followUpPath,
}: FollowUpHeartRatePropsType) => {
  return (
    <>
      <AnimatedPath
        d={followUpPath}
        stroke={pulseColor}
        fill={Colors.transparent}
        strokeWidth={pulseWidth}
        strokeLinejoin={'round'}
        opacity={0.4}
        scale={size * 0.004}
      />
      <AnimatedPath
        d={followUpPath}
        stroke={pulseColor}
        fill={Colors.transparent}
        strokeWidth={pulseWidth}
        strokeLinejoin={'round'}
        animatedProps={followUpAnimationProps}
        opacity={1}
        strokeLinecap={'round'}
        scale={size * 0.004}
      />
    </>
  );
};

export default FollowUpHeartRate;
