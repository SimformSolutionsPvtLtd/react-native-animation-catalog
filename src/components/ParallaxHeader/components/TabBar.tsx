import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import React, { useEffect } from 'react';
import type { TabBarProps } from '../types';

const TabBar = ({
  onIndexChange,
  ...props
}: TabBarProps & MaterialTopTabBarProps) => {
  const { index } = props.state;

  useEffect(() => {
    onIndexChange?.(index);
  }, [onIndexChange, index]);

  return <MaterialTopTabBar {...props} />;
};

export default TabBar;
