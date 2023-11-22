import React from 'react';
import Animated from 'react-native-reanimated';
import type { GetExploreCircleProps, OuterCirclesProps } from '../types';
import CustomCircle from './CustomCircle';
import styles from './styles/OuterCirclesStyles';

const OuterCircles = ({
  outerCircleAnimation,
  isOuterCircles,
  size,
  outerCircleColor,
  circleOpacity,
}: OuterCirclesProps) => {
  const { outerCircleStyle } = styles();

  const angle: number = 360 / 36;

  const getExploreCircles = ({ isOuter }: Partial<GetExploreCircleProps>) => {
    const exploreRadiusOfCircle = isOuter ? size * 1.555 : size * 1.315;

    return Array.apply(null, Array(36)).map((_, i) => {
      return {
        angle: angle * i,
        width: exploreRadiusOfCircle,
      };
    });
  };

  return (
    <Animated.View style={[outerCircleStyle, outerCircleAnimation]}>
      {getExploreCircles({ isOuter: isOuterCircles }).map((item) => (
        <CustomCircle
          {...{
            size,
            item,
            outerCircleColor,
            circleOpacity: circleOpacity,
          }}
        />
      ))}
    </Animated.View>
  );
};

export default OuterCircles;
