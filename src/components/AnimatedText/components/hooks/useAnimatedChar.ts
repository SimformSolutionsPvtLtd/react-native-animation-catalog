import { useEffect, useRef, useState } from 'react';
import type { LayoutRectangle } from 'react-native';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import type { AnimatedCharHook } from '../../types';

const useAnimatedChar = ({
  isReverse,
  index,
  dotSize,
  textWidth,
  particleDelay,
  text,
  speed,
  bounceDelay,
}: AnimatedCharHook) => {
  const offset = useSharedValue(0);
  const animationEffect = useSharedValue(isReverse ? 'bouncy' : 'particle');

  const [textLayout, setTextLayout] = useState<Partial<LayoutRectangle>>({});
  const textLayoutWidth = textLayout?.width;
  const ref = useRef(null);
  const pi = Math.PI;
  const parts = 9;

  const center =
    textWidth / 2 - (textLayout.x ?? 0) - (textLayout.width ?? 0) / 2;
  const outputTranslateY =
    -Math.random() * ((textLayout?.height ?? 0) + dotSize);

  useEffect(() => {
    if (textWidth && textLayoutWidth) {
      const animationDelay = isReverse
        ? bounceDelay + (speed / text.length) * (text.length - index)
        : bounceDelay + (speed / text.length) * index;
      const remainingTiming =
        speed - (speed / text.length) * (text.length - index);

      if (isReverse) {
        offset.value =
          // For Bouncy Effect
          withDelay(
            animationDelay,
            withSequence(
              withTiming(textLayoutWidth, {
                duration: speed / text.length,
                easing: Easing.linear,
              }),
              withTiming(textLayoutWidth, { duration: remainingTiming }),
              // For Change the offset value to initial
              withTiming(0, { duration: 0 }, () => {
                animationEffect.value = 'particle';
              }),
              // For Particle Effect
              withDelay(
                particleDelay,
                withSequence(
                  withTiming((2 * pi) / 2, {
                    duration: (2 * speed) / parts,
                    easing: Easing.linear,
                  }),
                  withTiming((4 * pi) / 2, {
                    duration: (2 * speed) / parts,
                    easing: Easing.out(Easing.circle),
                  }),
                  withTiming((6 * pi) / 2, {
                    duration: (2 * speed) / parts,
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
              withTiming((2 * pi) / 2, {
                duration: (2 * speed) / parts,
                easing: Easing.linear,
              }),
              withTiming((4 * pi) / 2, {
                duration: (2 * speed) / parts,
                easing: Easing.out(Easing.circle),
              }),
              withTiming((6 * pi) / 2, {
                duration: (2 * speed) / parts,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
              }),
              // For Change the offset value to initial
              withTiming(0, { duration: 0 }, () => {
                animationEffect.value = 'bouncy';
              }),
              // For Bouncy Effect
              // here use the extra delay like (3 * speed) / parts to start the animation on same time
              withDelay(
                (3 * speed) / parts + animationDelay,
                withTiming(textLayoutWidth, {
                  duration: speed / text.length,
                  easing: Easing.linear,
                })
              )
            )
          );
      }
    }
  }, [
    offset,
    textWidth,
    textLayoutWidth,
    speed,
    text.length,
    isReverse,
    pi,
    animationEffect,
    particleDelay,
    bounceDelay,
    index,
  ]);

  const animatedStyles = useAnimatedStyle(() => {
    let start = 0;
    let end = 0;
    let translateX = 0;
    if (textLayout?.width) {
      start = 0;
      end = 10;
      translateX = textLayout?.width / 2;
    }
    const output = isReverse
      ? [-translateX, -translateX, 0, 0]
      : [0, 0, -translateX, -translateX];
    const scale = isReverse ? [0, 0, 1, 1] : [1, 1, 0, 0];

    if (animationEffect.value === 'particle') {
      return {
        transform: [
          {
            translateX: interpolate(
              offset.value,
              [0, pi, 2 * pi, (6 * pi) / 2],
              [center, center, center / 2, 0, 0]
            ),
          },
          {
            translateY: interpolate(
              offset.value,
              [0, pi, 2 * pi, (6 * pi) / 2],
              [0, (textLayout?.height ?? 0) / 2, outputTranslateY, 0, 0]
            ),
          },
          {
            rotate: `${interpolate(
              offset.value,
              [0, pi, (3 * pi) / 2, 2 * pi, (6 * pi) / 2],
              [0, 0, 0, pi, 2 * pi, 2 * pi]
            )}rad`,
          },
          {
            scale: interpolate(
              offset.value,
              [0, pi, (3 * pi) / 2, 2 * pi, (6 * pi) / 2],
              [0, 0, 0.3, 1, 1, 1]
            ),
          },
        ],
      };
    } else {
      return {
        transform: [
          {
            translateX: interpolate(
              offset.value,
              [0, start, end, textWidth!],
              output
            ),
          },
          {
            scale: interpolate(offset.value, [0, start, end, textWidth], scale),
          },
        ],
      };
    }
  }, [textLayout, offset, textWidth]);

  return { animatedStyles, setTextLayout, ref };
};

export default useAnimatedChar;
