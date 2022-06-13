import React, { forwardRef, memo } from 'react';
import { FlatList, FlatListProps, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import type { AnimatedFlatListProps } from '../types';
import styles from './styles/AnimatedFlatListStyles';

export const AnimateFlatList = Animated.createAnimatedComponent(FlatList);

type Props = Omit<FlatListProps<any>, 'renderItem'> & AnimatedFlatListProps;

const ListEmptyComponent = () => (
  <Text style={styles.textNoDataFoundStyle}>No Data found</Text>
);

const AnimatedFlatList = forwardRef<FlatList, Props>(
  ({ renderTabContent, data, ...rest }, ref) => {
    return (
      <AnimateFlatList
        data={data}
        ref={ref}
        style={styles.container}
        renderItem={({ item }) => {
          return renderTabContent({ item });
        }}
        ListEmptyComponent={ListEmptyComponent}
        {...rest}
      />
    );
  }
);

export default memo(AnimatedFlatList);
