import {
  interpolate,
  SharedValue,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { getArcPath } from '../ArcPathUtils';
import type { useAnimatedSignalProps } from '../types';

const useAnimatedSignal = ({ size, numberOfArcs }: useAnimatedSignalProps) => {
  const squareSize: number = size / 5;
  const sizeVal: SharedValue<number> = useSharedValue(0);
  const arcOneX: SharedValue<number> = useSharedValue(150);
  const arcOneY: SharedValue<number> = useSharedValue(110);
  const arcOneStartAngle: SharedValue<number> = useSharedValue(-0.7);
  const arcOneEndAngle: SharedValue<number> = useSharedValue(-0.7);
  const arcOneRadius: SharedValue<number> = useSharedValue(40);
  const arcOneWidth: SharedValue<number> = useSharedValue(5);
  const arcTwoX: SharedValue<number> = useSharedValue(125);
  const arcTwoY: SharedValue<number> = useSharedValue(130);
  const arcTwoStartAngle: SharedValue<number> = useSharedValue(-0.5);
  const arcTwoEndAngle: SharedValue<number> = useSharedValue(-0.5);
  const arcTwoRadius: SharedValue<number> = useSharedValue(60);
  const arcTwoWidth: SharedValue<number> = useSharedValue(5);
  const arcThreeX: SharedValue<number> = useSharedValue(110);
  const arcThreeY: SharedValue<number> = useSharedValue(155);
  const arcThreeStartAngle: SharedValue<number> = useSharedValue(-0.2);
  const arcThreeEndAngle: SharedValue<number> = useSharedValue(-0.2);
  const arcThreeRadius: SharedValue<number> = useSharedValue(50);
  const arcThreeWidth: SharedValue<number> = useSharedValue(5);
  const arcFourX: SharedValue<number> = useSharedValue(0.9);
  const arcFourY: SharedValue<number> = useSharedValue(0.9);
  const arcFourStartAngle: SharedValue<number> = useSharedValue(5.475);
  const arcFourEndAngle: SharedValue<number> = useSharedValue(7.1);
  const arcFourRadius: SharedValue<number> = useSharedValue(55);
  const arcFourWidth: SharedValue<number> = useSharedValue(5);
  const displayArcTwo: boolean = numberOfArcs > 1;
  const displayArcThree: boolean = numberOfArcs > 2;
  const displayArcFour: boolean = numberOfArcs > 3;

  sizeVal.value = withTiming(29, {
    duration: 1500,
  });

  const keyFrames = {
    arcOneValues: [0, 4, 6.5, 12, 21, 29],
    arcTwoValues: [0, 6.5, 9, 11, 13, 15, 17, 19, 21, 23, 29],
    arcThreeValues: [0, 10, 11, 13, 15, 17, 19, 21, 23, 27, 29],
  };

  //To create First arc in animation
  const arcOneAnimatedProps = useAnimatedProps(() => {
    arcOneX.value = interpolate(
      sizeVal.value,
      keyFrames.arcOneValues,
      [150, 150, 120, 80, 95, 95].map((item) => (item * size) / 300)
    );

    arcOneY.value = interpolate(
      sizeVal.value,
      keyFrames.arcOneValues,
      [110, 115, 125, 110, 70, 70].map((item) => (item * size) / 300)
    );

    arcOneStartAngle.value = interpolate(
      sizeVal.value,
      keyFrames.arcOneValues,
      [-0.7, -0.7, 1.3, 3.3, 5.475, 5.475]
    );

    arcOneEndAngle.value = interpolate(
      sizeVal.value,
      keyFrames.arcOneValues,
      [-0.7, 1.3, 3.3, 5.3, 7.07, 7.07]
    );

    arcOneRadius.value = interpolate(
      sizeVal.value,
      keyFrames.arcOneValues,
      [40, 46, 46, 49, 54, 54].map((item) => (item * size) / 300)
    );

    arcOneWidth.value = interpolate(
      sizeVal.value,
      keyFrames.arcOneValues,
      [5, 5.5, 6, 6.5, 9, 9].map((item) => (item * size) / 300)
    );

    const path = getArcPath(
      arcOneX.value,
      arcOneY.value,
      arcOneStartAngle.value,
      arcOneEndAngle.value,
      arcOneRadius.value
    );

    return {
      d: path,
      strokeWidth: arcOneWidth.value,
    };
  });

  // //To create Second arc in animation
  const arcTwoAnimatedProps = useAnimatedProps(() => {
    if (displayArcTwo) {
      arcTwoX.value = interpolate(
        sizeVal.value,
        keyFrames.arcTwoValues,
        [125, 125, 125, 115, 80, 70, 73, 76, 78, 78, 78].map(
          (item) => (item * size) / 300
        )
      );

      arcTwoY.value = interpolate(
        sizeVal.value,
        keyFrames.arcTwoValues,
        [130, 130, 130, 105, 105, 85, 70, 50, 57, 52, 52].map(
          (item) => (item * size) / 300
        )
      );

      arcTwoStartAngle.value = interpolate(
        sizeVal.value,
        keyFrames.arcTwoValues,
        [-0.5, -0.5, -0.2, 0.8, 1.58, 2.36, 3.14, 3.92, 4.7, 5.475, 5.475]
      );

      arcTwoEndAngle.value = interpolate(
        sizeVal.value,
        keyFrames.arcTwoValues,
        [-0.5, -0.5, 2, 2.73, 3.46, 4.19, 4.92, 5.65, 6.38, 7.1, 7.1]
      );

      arcTwoRadius.value = interpolate(
        sizeVal.value,
        keyFrames.arcTwoValues,
        [60, 60, 60, 60, 64, 66, 68, 70, 70, 70, 70].map(
          (item) => (item * size) / 300
        )
      );

      arcTwoWidth.value = interpolate(
        sizeVal.value,
        keyFrames.arcTwoValues,
        [5, 5, 5, 6, 7.5, 8, 8.3, 8.6, 9, 9, 9].map(
          (item) => (item * size) / 300
        )
      );
    }

    const path = getArcPath(
      arcTwoX.value,
      arcTwoY.value,
      arcTwoStartAngle.value,
      arcTwoEndAngle.value,
      arcTwoRadius.value
    );

    return { d: path, strokeWidth: arcTwoWidth.value };
  });

  //To create third arc in animation
  const arcThreeAnimatedProps = useAnimatedProps(() => {
    if (displayArcThree) {
      arcThreeX.value = interpolate(
        sizeVal.value,
        keyFrames.arcThreeValues,
        [110, 110, 110, 110, 65, 50, 50, 55, 60, 60, 60].map(
          (item) => (item * size) / 300
        )
      );

      arcThreeY.value = interpolate(
        sizeVal.value,
        keyFrames.arcThreeValues,
        [155, 155, 155, 145, 90, 70, 50, 40, 34, 34, 34].map(
          (item) => (item * size) / 300
        )
      );

      arcThreeStartAngle.value = interpolate(
        sizeVal.value,
        keyFrames.arcThreeValues,
        [-0.2, -0.2, -0.2, 0.4, 1.25, 2.1, 2.95, 3.8, 4.65, 5.475, 5.475]
      );

      arcThreeEndAngle.value = interpolate(
        sizeVal.value,
        keyFrames.arcThreeValues,
        [-0.2, -0.2, 1.4, 2.21, 3.02, 3.83, 4.64, 5.45, 6.26, 7.1, 7.1]
      );

      arcThreeRadius.value = interpolate(
        sizeVal.value,
        keyFrames.arcThreeValues,
        [56, 56, 56, 56, 78, 80, 83, 85, 88, 88, 88].map(
          (item) => (item * size) / 300
        )
      );

      arcThreeWidth.value = interpolate(
        sizeVal.value,
        keyFrames.arcThreeValues,
        [5, 5, 5, 5, 5.7, 6.7, 7, 8, 8, 9, 9].map((item) => (item * size) / 300)
      );
    }

    const path = getArcPath(
      arcThreeX.value,
      arcThreeY.value,
      arcThreeStartAngle.value,
      arcThreeEndAngle.value,
      arcThreeRadius.value
    );

    return { d: path, strokeWidth: arcThreeWidth.value };
  });

  // //To create Forth arc in animation
  const arcFourAnimatedProps = useAnimatedProps(() => {
    if (displayArcFour) {
      arcFourX.value = interpolate(
        sizeVal.value,
        [0, 13, 15, 19, 21, 23, 25, 27, 29],
        [68, 25, 33, 42, 42, 36, 37, 38, 42].map((item) => (item * size) / 300)
      );

      arcFourY.value = interpolate(
        sizeVal.value,
        [0, 13, 15, 19, 21, 23, 25, 27, 29],
        [155, 140, 120, 75, 65, 30, 18, 16, 16].map(
          (item) => (item * size) / 300
        )
      );

      arcFourStartAngle.value = interpolate(
        sizeVal.value,
        [0, 12, 13, 17, 19, 21, 23, 25, 27, 29],
        [0.9, 0.9, 1, 1.64, 2.28, 2.92, 3.56, 4.2, 4.85, 5.475]
      );

      arcFourEndAngle.value = interpolate(
        sizeVal.value,
        [0, 12, 13, 17, 19, 21, 23, 25, 27, 29],
        [0.9, 0.9, 2.8, 3.41, 4.02, 4.63, 5.24, 5.85, 6.46, 7.1]
      );

      arcFourRadius.value = interpolate(
        sizeVal.value,
        [0, 13, 15, 19, 21, 23, 25, 27, 29],
        [55, 73, 76, 88, 93, 99, 102, 104, 106].map(
          (item) => (item * size) / 300
        )
      );

      arcFourWidth.value = interpolate(
        sizeVal.value,
        [0, 13, 15, 19, 21, 23, 25, 27, 29],
        [5, 6, 6, 7, 7.5, 8, 8.3, 8.8, 9].map((item) => (item * size) / 300)
      );
    }

    const path = getArcPath(
      arcFourX.value,
      arcFourY.value,
      arcFourStartAngle.value,
      arcFourEndAngle.value,
      arcFourRadius.value
    );

    return { d: path, strokeWidth: arcFourWidth.value };
  });

  return {
    squareSize,
    arcOneAnimatedProps,
    arcTwoAnimatedProps,
    arcThreeAnimatedProps,
    arcFourAnimatedProps,
    displayArcTwo,
    displayArcThree,
    displayArcFour,
  };
};

export default useAnimatedSignal;
