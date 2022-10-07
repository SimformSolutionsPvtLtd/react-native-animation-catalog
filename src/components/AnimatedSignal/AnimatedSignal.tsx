import React from 'react';
import Animated from 'react-native-reanimated';
import Svg, { Path, Rect } from 'react-native-svg';
import { Colors, Metrics } from '../../theme';
import { useAnimatedSignal } from './hooks';
import type { AnimatedSignalProps } from './types';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedSignal = ({
  wifiArea = 300,
  numberOfArcs = 4,
  color = Colors.mediumAquamarine,
}: Partial<AnimatedSignalProps>) => {
  const size = wifiArea > Metrics.width ? Metrics.width : wifiArea;

  const {
    squareSize,
    arcOneAnimatedProps,
    arcTwoAnimatedProps,
    arcThreeAnimatedProps,
    arcFourAnimatedProps,
    displayArcTwo,
    displayArcThree,
    displayArcFour,
  } = useAnimatedSignal({ size, numberOfArcs });

  return (
    <Svg width={size} height={size}>
      <AnimatedPath
        animatedProps={arcOneAnimatedProps}
        fill="transparent"
        stroke={color}
      />
      {displayArcTwo && (
        <AnimatedPath
          animatedProps={arcTwoAnimatedProps}
          fill="transparent"
          stroke={color}
        />
      )}
      {displayArcThree && (
        <AnimatedPath
          animatedProps={arcThreeAnimatedProps}
          fill="transparent"
          stroke={color}
        />
      )}
      {displayArcFour && (
        <AnimatedPath
          animatedProps={arcFourAnimatedProps}
          fill="transparent"
          stroke={color}
        />
      )}
      <Rect
        x={(size - squareSize) / 2}
        y={(size - squareSize) / 2}
        width={squareSize}
        height={squareSize}
        fill={color}
        rx={squareSize / 4}
      />
    </Svg>
  );
};

export default AnimatedSignal;
