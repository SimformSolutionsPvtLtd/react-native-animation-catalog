import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Colors } from '../../theme';
import Image from '../../assets/index';
import { useAnimatedNotification } from './hooks';
import styles from './styles';
import type { AnimatedNotificationProps } from './types';

const AnimatedNotification = ({
  size = 100,
  color = Colors.green,
  numberOfNotification = 1,
}: Partial<AnimatedNotificationProps>) => {
  const {
    messageBoxAnimation,
    primaryCircleAnimation,
    secondaryCircleAnimation,
    textAnimation,
    innerTrailingLineAnimation,
    outerTrailingLineAnimation,
  } = useAnimatedNotification({ size, color });

  const style = styles({ size, color });

  return (
    <View style={style.container}>
      <Animated.Image
        source={Image.messageBox}
        resizeMode={'contain'}
        style={[style.message, messageBoxAnimation]}
      />
      <Animated.View style={[style.primaryCircle, primaryCircleAnimation]} />
      <Animated.View style={[style.secondaryCircle, secondaryCircleAnimation]}>
        <Animated.Text style={[style.text, textAnimation]}>
          {numberOfNotification}
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={[style.innerTrailingLine, innerTrailingLineAnimation]}
      />
      <Animated.View
        style={[style.outerTrailingLine, outerTrailingLineAnimation]}
      />
    </View>
  );
};

export default AnimatedNotification;
