import React from 'react';
import { View } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';
import { useAnimatedList } from './hooks';
import styles from './styles';
import type { AnimatedCardProps } from './types';

const AnimatedCard = ({
  index,
  animationType,
  children,
  animationDelay,
  animationDuration,
  cardStyle,
}: AnimatedCardProps) => {
  const { enterType, exitType } = useAnimatedList(animationType);

  return (
    <View style={[styles.container, cardStyle]}>
      <Animated.View
        layout={Layout.springify()}
        style={styles.card}
        entering={enterType
          .duration(animationDuration)
          .delay(index * animationDelay)}
        exiting={exitType
          .duration(animationDuration)
          .delay(index * animationDelay)}
      >
        {children}
      </Animated.View>
    </View>
  );
};

export default AnimatedCard;
