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
import useScrollSync from './useScrollSync';

const TAB_BAR_HEIGHT = 48;
const HEADER_HEIGHT = 48;

const OVERLAY_VISIBILITY_OFFSET = 32;

const useParallaxHeaderWithTab = (tabs: any) => {
  const { top, bottom } = useSafeAreaInsets();

  const { height: screenHeight } = useWindowDimensions();

  //@todo: Tabs should be rendered dynamically
  const firstTabRef = useRef(null);
  const secondTabRef = useRef(null);
  const thirdTabRef = useRef(null);
  const fourthTabRef = useRef(null);

  const [tabIndex, setTabIndex] = useState(0);

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

  const rendered = headerHeight >= 0;

  const handleHeaderLayout = useCallback<NonNullable<ViewProps['onLayout']>>(
    (event) => setHeaderHeight(event.nativeEvent.layout.height),
    []
  );

  const firstTabScrollValue = useSharedValue(0);

  const firstTabScrollHandler = useAnimatedScrollHandler(
    (event) => (firstTabScrollValue.value = event.contentOffset.y)
  );

  const secondTabScrollValue = useSharedValue(0);

  const secondTabScrollHandler = useAnimatedScrollHandler(
    (event) => (secondTabScrollValue.value = event.contentOffset.y)
  );

  const thirdTabScrollValue = useSharedValue(0);

  const thirdTabScrollHandler = useAnimatedScrollHandler(
    (event) => (thirdTabScrollValue.value = event.contentOffset.y)
  );

  const fourthTabScrollValue = useSharedValue(0);

  const fourthTabScrollHandler = useAnimatedScrollHandler(
    (event) => (fourthTabScrollValue.value = event.contentOffset.y)
  );

  const scrollPairs = useMemo(
    () => [
      { list: firstTabRef, position: firstTabScrollValue },
      { list: secondTabRef, position: secondTabScrollValue },
      { list: thirdTabRef, position: thirdTabScrollValue },
      { list: fourthTabRef, position: fourthTabScrollValue },
    ],
    [
      firstTabScrollValue,
      fourthTabScrollValue,
      secondTabScrollValue,
      thirdTabScrollValue,
    ]
  );

  const { sync } = useScrollSync(scrollPairs, headerConfig);

  const сurrentScrollValue = useDerivedValue(
    () =>
      tabIndex === 0
        ? firstTabScrollValue.value
        : tabIndex === 1
        ? secondTabScrollValue.value
        : tabIndex === 2
        ? thirdTabScrollValue.value
        : fourthTabScrollValue.value,
    [
      tabIndex,
      firstTabScrollValue,
      secondTabScrollValue,
      thirdTabScrollValue,
      fourthTabScrollValue,
    ]
  );

  const translateY = useDerivedValue(
    () => -Math.min(сurrentScrollValue.value, headerDiff)
  );

  const tabBarAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: interpolate(translateY.value, [-headerDiff, 0], [0, 1]),
  }));

  const contentContainerStyle = useMemo(
    () => ({
      paddingTop: rendered ? headerHeight + TAB_BAR_HEIGHT : 0,
      paddingBottom: bottom,
      minHeight: screenHeight + headerDiff,
    }),
    [rendered, headerHeight, bottom, screenHeight, headerDiff]
  );

  const sharedProps = useMemo(
    () => ({
      contentContainerStyle,
      onMomentumScrollEnd: sync,
      onScrollEndDrag: sync,
      scrollEventThrottle: 16,
      scrollIndicatorInsets: { top: heightExpanded },
    }),
    [contentContainerStyle, sync, heightExpanded]
  );

  const tabBarStyle = useMemo(
    () => [
      rendered ? styles.tabBarContainer : undefined,
      { top: rendered ? headerHeight : undefined },
      tabBarAnimatedStyle,
    ],
    [rendered, headerHeight, tabBarAnimatedStyle]
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

  // array contains tab references, scrollEvent, flatList data, renderItem as renderTabContent, otherProps as renderFlatListProps
  const tabsHandlers = [
    {
      tabRef: firstTabRef,
      tabScrollHandler: firstTabScrollHandler,
      data: tabs[0]?.data,
      renderTabContent: tabs[0]?.renderTabContent,
      renderFlatListProps: tabs[0]?.renderFlatListProps,
    },
    {
      tabRef: secondTabRef,
      tabScrollHandler: secondTabScrollHandler,
      data: tabs[1]?.data,
      renderTabContent: tabs[1]?.renderTabContent,
      renderFlatListProps: tabs[1]?.renderFlatListProps,
    },
    {
      tabRef: thirdTabRef,
      tabScrollHandler: thirdTabScrollHandler,
      data: tabs[2]?.data,
      renderTabContent: tabs[2]?.renderTabContent,
      renderFlatListProps: tabs[2]?.renderFlatListProps,
    },
    {
      tabRef: fourthTabRef,
      tabScrollHandler: fourthTabScrollHandler,
      data: tabs[3]?.data,
      renderTabContent: tabs[3]?.renderTabContent,
      renderFlatListProps: tabs[3]?.renderFlatListProps,
    },
  ];

  return {
    tabsHandlers,
    tabIndex,
    handleHeaderLayout,
    sharedProps,
    setTabIndex,
    tabBarStyle,
    headerContainerStyle,
    collapsedOverlayStyle,
  };
};

export default useParallaxHeaderWithTab;
