import { useCallback, useMemo, useRef, useState } from 'react';
import { useWindowDimensions, ViewProps } from 'react-native';
import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../styles';
import type { HeaderConfig } from '../types';

const HEADER_HEIGHT = 48;

const OVERLAY_VISIBILITY_OFFSET = 32;

const useParallaxHeader = () => {
  const { top, bottom } = useSafeAreaInsets();

  const { height: screenHeight } = useWindowDimensions();

  const scrollRef = useRef(null);

  const [headerHeight, setHeaderHeight] = useState(0);

  const defaultHeaderHeight = top + HEADER_HEIGHT;

  const headerConfig = useMemo<HeaderConfig>(
    () => ({
      heightCollapsed: defaultHeaderHeight,
      heightExpanded: headerHeight,
    }),
    [defaultHeaderHeight, headerHeight]
  );

  const { heightCollapsed, heightExpanded } = headerConfig;

  const headerDiff = heightExpanded - heightCollapsed;

  const rendered = headerHeight > 0;

  const handleHeaderLayout = useCallback<NonNullable<ViewProps['onLayout']>>(
    (event) => setHeaderHeight(event.nativeEvent.layout.height),
    []
  );

  const scrollValue = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(
    (event) => (scrollValue.value = event.contentOffset.y)
  );

  const translateY = useDerivedValue(
    () => -Math.min(scrollValue.value, headerDiff)
  );

  //header fade animation style
  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: interpolate(translateY.value, [-headerDiff, 0], [0, 1]),
  }));

  const contentContainerStyle = useMemo(
    () => ({
      paddingTop: rendered ? headerHeight : 0,
      paddingBottom: bottom,
      minHeight: screenHeight + headerDiff,
    }),
    [rendered, headerHeight, bottom, screenHeight, headerDiff]
  );

  const sharedProps = useMemo(
    () => ({
      contentContainerStyle,
      scrollEventThrottle: 16,
      scrollIndicatorInsets: { top: heightExpanded },
    }),
    [contentContainerStyle, heightExpanded]
  );

  const headerContainerStyle = useMemo(
    () => [
      rendered ? styles.headerContainer : undefined,
      { paddingTop: top },
      headerAnimatedStyle,
    ],
    [rendered, top, headerAnimatedStyle]
  );

  const collapsedOverlayAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [-headerDiff, OVERLAY_VISIBILITY_OFFSET - headerDiff, 0],
      [1, 0, 0]
    ),
  }));

  const collapsedOverlayStyle = useMemo(
    () => [
      styles.collapsedOvarlay,
      collapsedOverlayAnimatedStyle,
      { height: heightCollapsed, paddingTop: top },
    ],
    [collapsedOverlayAnimatedStyle, heightCollapsed, top]
  );

  return {
    scrollRef,
    handleHeaderLayout,
    scrollValue,
    scrollHandler,
    sharedProps,
    headerContainerStyle,
    collapsedOverlayStyle,
  };
};

export default useParallaxHeader;
