import React from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, { Layout, ZoomIn } from 'react-native-reanimated';
import { useAnimatedCard } from './hooks';
import styles from './styles';
import type { SwipeableCardProps } from './types';

const SwipeableCard = ({ children, style }: Partial<SwipeableCardProps>) => {
  const { gesture, animationSwipeableCardStyle } = useAnimatedCard({});

  return (
    <View style={[styles.containerStyle, style]} pointerEvents="box-none">
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[styles.card, animationSwipeableCardStyle]}
          layout={Layout.duration(600).delay(200)}
          entering={ZoomIn.duration(600).delay(200)}
        >
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default SwipeableCard;
