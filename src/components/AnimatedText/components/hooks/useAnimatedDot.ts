import { useEffect } from 'react';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import type { AnimatedDotHook } from '../../types';

const useAnimatedDot = ({
  text,
  isReverse,
  amplitude,
  textLayout,
  individualLayout,
  dotSize,
  bounceDelay,
  animationTiming,
  speed,
  particleDelay,
}: AnimatedDotHook) => {
  const pi = Math.PI;
  const offset = useSharedValue(0);
  const animationEffect = useSharedValue(isReverse ? 'bouncy' : 'particle');
  const radius = amplitude ? amplitude : (textLayout?.height ?? 0) / 2;
  const parts = 9;
  const textLayoutWidth = textLayout?.width;

  const outputX = text
    .split('')
    .map((_: any, i: number) => {
      if (individualLayout?.[i]) {
        const multiplier = isReverse ? -1 : 1;
        return [
          multiplier * (individualLayout?.[i]?.x! - (i === 0 ? 0 : 15 / 2)),
          multiplier *
            (individualLayout?.[i]?.x! +
              individualLayout?.[i]?.width! / 2 -
              dotSize / 2),
        ];
      }
      return [0, 0];
    })
    .flat();

  const inputX = text
    .split('')
    .map((_: any, i: number) => {
      return [i * pi, pi * (i + 1 / 2)];
    })
    .flat();

  const inputY = text
    .split('')
    .map((_: any, i: number) => {
      return [i * pi, pi * (i + 1 / 2)];
    })
    .flat();

  const outputY = inputY
    .map((t: number) => {
      if (t === 0) {
        return -dotSize;
      }
      return radius * Math.sin(t);
    })
    .flat();

  useEffect(() => {
    if (textLayoutWidth) {
      if (isReverse) {
        offset.value = withDelay(
          bounceDelay,
          withSequence(
            // For Bouncy Effect
            withTiming(animationTiming, {
              duration: speed,
              easing: Easing.linear,
            }),
            // For Change the offset value to initial
            withTiming(0, { duration: 0 }, () => {
              animationEffect.value = 'particle';
            }),
            // For Particle Effect
            // Use extra time (speed / text.length) for sync the animations
            withDelay(
              particleDelay + speed / text.length,
              withSequence(
                withTiming((1 * pi) / 2, {
                  duration: (1 * speed) / parts,
                  easing: Easing.out(Easing.cubic),
                }),
                withTiming((2 * pi) / 2, {
                  duration: (1 * speed) / parts,
                  easing: Easing.in(Easing.cubic),
                }),
                withTiming((4 * pi) / 2, {
                  duration: (2 * speed) / parts,
                  easing: Easing.out(Easing.circle),
                }),
                withTiming((9 * pi) / 2, {
                  duration: (5 * speed) / parts,
                  easing: Easing.linear,
                })
              )
            )
          )
        );
      } else {
        offset.value =
          // For Particle Effect
          withDelay(
            particleDelay,
            withSequence(
              withTiming((1 * pi) / 2, {
                duration: (1 * speed) / parts,
                easing: Easing.out(Easing.cubic),
              }),
              withTiming((2 * pi) / 2, {
                duration: (1 * speed) / parts,
                easing: Easing.in(Easing.cubic),
              }),
              withTiming((4 * pi) / 2, {
                duration: (2 * speed) / parts,
                easing: Easing.out(Easing.circle),
              }),
              withTiming((9 * pi) / 2, {
                duration: (5 * speed) / parts,
                easing: Easing.linear,
              }),
              // For Change the offset value to initial
              withTiming(0, { duration: 0 }, () => {
                animationEffect.value = 'bouncy';
              }),
              // For Bouncy Effect
              withDelay(
                bounceDelay,
                withTiming(animationTiming, {
                  duration: speed,
                  easing: Easing.linear,
                })
              )
            )
          );
      }
    }
  }, [
    animationEffect,
    animationTiming,
    bounceDelay,
    isReverse,
    offset,
    particleDelay,
    pi,
    speed,
    text.length,
    textLayoutWidth,
  ]);

  const animatedStyles = useAnimatedStyle(() => {
    let width = 0;
    if (textLayout?.width) {
      width = textLayout?.width - dotSize;
    }

    const output = isReverse ? [...outputX, -width] : [...outputX, width];
    const outputInterpolateX = isReverse
      ? [
          -((textLayout?.width ?? 0) / 2 - dotSize / 2),
          -((textLayout?.width ?? 0) / 2 - dotSize / 2),
          -((textLayout?.width ?? 0) - dotSize),
        ]
      : [
          (textLayout?.width ?? 0) / 2 - dotSize / 2,
          (textLayout?.width ?? 0) / 2 - dotSize / 2,
          0,
        ];

    if (animationEffect.value === 'particle') {
      return {
        transform: [
          {
            translateY: interpolate(
              offset.value,
              [
                0,
                pi / 2,
                pi,
                2 * pi,
                (5 * pi) / 2,
                3 * pi,
                (7 * pi) / 2,
                4 * pi,
                (9 * pi) / 2,
              ],
              [
                0,
                -(textLayout?.height ?? 0),
                (textLayout?.height ?? 0) / 2,
                -(textLayout?.height ?? 0),
                -dotSize,
                -(textLayout?.height ?? 0),
                -dotSize,
                -(textLayout?.height ?? 0),
                -dotSize,
              ]
            ),
          },
          {
            translateX: interpolate(
              offset.value,
              [0, (5 * pi) / 2, (9 * pi) / 2],
              outputInterpolateX
            ),
          },
          {
            scale: interpolate(offset.value, [0, pi / 2, 3 * pi], [0, 1, 1]),
          },
        ],
      };
    } else {
      return {
        alignSelf: isReverse ? 'flex-end' : 'flex-start',
        transform: [
          {
            translateY: interpolate(
              offset.value,
              [...inputY, text.length * pi],
              [...outputY, Math.sin(text.length * pi)]
            ),
          },
          {
            translateX: interpolate(
              offset.value,
              [...inputX, text.length * pi],
              output
            ),
          },
          {
            scale: interpolate(
              offset.value,
              [0, text.length * pi - pi / 4, text.length * pi],
              [1, 1, 0]
            ),
          },
        ],
      };
    }
  }, [offset, animationEffect, textLayout, inputX, inputY, outputX, outputY]);

  return { animatedStyles };
};

export default useAnimatedDot;
