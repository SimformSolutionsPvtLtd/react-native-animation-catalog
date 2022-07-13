import React from 'react';
import { Animated } from 'react-native';
import Images from '../../assets';
import { Colors } from '../../theme';
import useSimpleAnimatedCheckMark from './hooks/useSimpleAnimatedCheckMark';
import styles from './styles';

const SimpleAnimatedCheckMark = ({
  size = 150,
  backgroundColor = Colors.lightBlue200,
  checkMarkColor = Colors.lightBlue900,
  duration = 2000,
}) => {
  const { parentCircleAnimation, movingCircle, imageAnimation } =
    useSimpleAnimatedCheckMark({ size, duration });

  const style = styles({
    size,
    checkMarkColor,
    backgroundColor,
  });

  return (
    <>
      <Animated.View style={[parentCircleAnimation, style.circle]}>
        <Animated.Image
          source={Images.checkMark}
          style={[imageAnimation, style.checkMarkImage]}
        />
        <Animated.View style={[movingCircle, style.primaryCircle]} />
      </Animated.View>
    </>
  );
};

export default SimpleAnimatedCheckMark;
