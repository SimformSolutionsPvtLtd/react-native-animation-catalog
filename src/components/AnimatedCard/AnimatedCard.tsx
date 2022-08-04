import React from 'react';
import { Button, View } from 'react-native';
import Animated, { Layout, ZoomIn } from 'react-native-reanimated';
import { Colors } from '../../theme';
import { useAnimatedCard } from './hooks';
import styles from './styles';
import type { SimpleCardProps, SwipeCallBackProps } from './types';

const RenderCard = ({ onLeftSwipe, onRightSwipe }: SwipeCallBackProps) => {
  return (
    <View style={styles.renderCardContainerStyle}>
      <View style={styles.renderCardStyle}>
        <View style={styles.renderCardButtonViewStyle}>
          <Button
            onPress={onLeftSwipe}
            title={'Swipe Left'}
            color={Colors.white}
          />
        </View>
        <View style={styles.renderCardButtonViewStyle}>
          <Button
            onPress={onRightSwipe}
            title={'Swipe Right'}
            color={Colors.white}
          />
        </View>
      </View>
    </View>
  );
};

const AnimatedCard = ({
  style,
  renderCard,
  onLeftSwipeEnd,
  onRightSwipeEnd,
  cardStyle,
}: Partial<SimpleCardProps>) => {
  const { onLeftSwipe, onRightSwipe, animationSimpleCardStyle } =
    useAnimatedCard({
      onLeftSwipeEnd,
      onRightSwipeEnd,
    });

  return (
    <View style={[styles.containerStyle, style]}>
      <Animated.View
        style={[styles.card, animationSimpleCardStyle, cardStyle]}
        layout={Layout.duration(600).delay(200)}
        entering={ZoomIn.duration(600).delay(200)}
      >
        {renderCard && renderCard({ onLeftSwipe, onRightSwipe })}
        {!renderCard && (
          <RenderCard onLeftSwipe={onLeftSwipe} onRightSwipe={onRightSwipe} />
        )}
      </Animated.View>
    </View>
  );
};

export default AnimatedCard;
