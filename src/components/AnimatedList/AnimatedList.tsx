import React from 'react';
import { FlatList } from 'react-native';
import AnimatedCard from './AnimatedCard';
import styles from './styles';
import type { AnimatedListProps, RenderItemProps } from './types';

const AnimatedList = ({
  data,
  ItemSeparatorComponent,
  renderItem,
  animationType = 'fade-up',
  animationDelay = 600,
  animationDuration = 1500,
  style,
  cardStyle,
  horizontal,
  ...rest
}: AnimatedListProps) => {
  return (
    <FlatList
      style={[styles.flatListStyle, style]}
      data={data}
      contentContainerStyle={styles.flatListContainerStyle}
      horizontal={horizontal}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={({ item, index }: RenderItemProps) => (
        <AnimatedCard
          index={index}
          animationType={animationType}
          animationDelay={animationDelay}
          animationDuration={animationDuration}
          cardStyle={cardStyle}
        >
          {renderItem({ item })}
        </AnimatedCard>
      )}
      {...rest}
    />
  );
};

export default AnimatedList;
