import React from 'react';
import { Button, View } from 'react-native';
import Animated, { Layout, ZoomIn } from 'react-native-reanimated';
import { useAnimatedCard } from './hooks';
import styles from './styles';
import type { SimpleCardProps } from './types';

const SimpleCard = ({
  style,
  renderCard,
  onLeftSwipeEnd,
  onRightSwipeEnd,
}: Partial<SimpleCardProps>) => {
  const { onLeftSwipe, onRightSwipe, animationSimpleCardStyle } =
    useAnimatedCard({
      onLeftSwipeEnd,
      onRightSwipeEnd,
    });

  return (
    <View style={[styles.containerStyle, style]}>
      <Animated.View
        style={[styles.card, animationSimpleCardStyle]}
        layout={Layout.duration(600).delay(200)}
        entering={ZoomIn.duration(600).delay(200)}
      >
        {renderCard && renderCard({ onLeftSwipe, onRightSwipe })}
        {!renderCard && (
          <>
            <Button onPress={onLeftSwipe} title={'Click here to Swipe Left'} />
            <Button
              onPress={onRightSwipe}
              title={'Click here to Swipe Right'}
            />
          </>
        )}
      </Animated.View>
    </View>
  );
};

export default SimpleCard;
