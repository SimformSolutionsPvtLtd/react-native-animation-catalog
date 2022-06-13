import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { DefaultItem, Header, StickyHeader, TabBar } from './components';
import AnimatedFlatList from './components/AnimatedFlatList';
import { FOLLOWERS, FOLLOWING } from './constants/DummyData';
import { useParallaxHeaderWithTab } from './hooks';
import styles from './styles';
import type { ParallaxHeaderWithTabProps, RenderDefaultProps } from './types';

const Tab = createMaterialTopTabNavigator();

// default renderItems for tabs
const renderDefault = ({ item }: RenderDefaultProps) => (
  <DefaultItem items={item} />
);

// default array which set as default
const defaultTabs = [
  {
    title: 'Followers',
    data: FOLLOWERS,
    renderTabContent: renderDefault,
  },
  {
    title: 'Following',
    data: FOLLOWING,
    renderTabContent: renderDefault,
  },
];

const ParallaxHeaderWithTab = ({
  renderHeader,
  renderStickyHeader,
  screenOptions,
  onTabChange,
  backBehavior,
  tabBarPosition,
  initialRouteName,
  tabs = defaultTabs,
}: Partial<ParallaxHeaderWithTabProps>) => {
  const {
    tabsHandlers,
    tabIndex,
    handleHeaderLayout,
    sharedProps,
    setTabIndex,
    tabBarStyle,
    headerContainerStyle,
    collapsedOverlayStyle,
  } = useParallaxHeaderWithTab(tabs);

  onTabChange ? onTabChange({ tabIndex }) : null;

  const renderTabs = tabsHandlers.map(
    useCallback(
      (tabHandler, _index) => (
        <AnimatedFlatList
          ref={tabHandler?.tabRef}
          data={tabHandler?.data}
          renderTabContent={({ item }: any) =>
            tabHandler?.renderTabContent({ item })
          }
          onScroll={tabHandler.tabScrollHandler}
          showsVerticalScrollIndicator={false}
          {...tabHandler?.renderFlatListProps}
          {...sharedProps}
        />
      ),
      [sharedProps]
    )
  );

  const renderTabBar = useCallback<
    (props: MaterialTopTabBarProps) => React.ReactElement
  >(
    (props) => (
      <Animated.View style={tabBarStyle}>
        <TabBar onIndexChange={setTabIndex} {...props} />
      </Animated.View>
    ),
    [tabBarStyle, setTabIndex]
  );

  return (
    <View style={styles.container}>
      <Animated.View onLayout={handleHeaderLayout} style={headerContainerStyle}>
        {!renderHeader ? <Header /> : <Header>{renderHeader()}</Header>}
      </Animated.View>
      <Animated.View style={collapsedOverlayStyle}>
        {!renderStickyHeader ? (
          <StickyHeader />
        ) : (
          <StickyHeader>{renderStickyHeader()}</StickyHeader>
        )}
      </Animated.View>
      <Tab.Navigator
        tabBar={renderTabBar}
        screenOptions={screenOptions}
        backBehavior={backBehavior}
        tabBarPosition={tabBarPosition}
        initialRouteName={initialRouteName}
      >
        {tabs.map((tab, index) => (
          <Tab.Screen name={tab?.title} options={tab?.tabOptions}>
            {() => renderTabs[index]}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default memo(ParallaxHeaderWithTab);
