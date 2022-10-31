import React from 'react';
import { Animated, View } from 'react-native';
import Images from '../../assets';
import { Colors } from '../../theme';
import { useCircularAnimatedCheckMark } from './hooks';
import styles from './styles';

const CircularAnimatedCheckMark = ({
  size = 100,
  duration = 1300,
  checkMarkColor = Colors.lightBlue900,
  topBorderColor = Colors.pink500,
  rightBorderColor = Colors.lightBlue900,
  bottomBorderColor = Colors.orange400,
  leftBorderColor = Colors.secondPrimary2,
  imageSource = Images.checkMark,
}) => {
  const {
    topViewAnimation,
    rightViewAnimation,
    bottomViewAnimation,
    leftViewAnimation,
    imageAnimation,
  } = useCircularAnimatedCheckMark({ size, duration });

  const style = styles({
    size,
    checkMarkColor,
    topBorderColor,
    rightBorderColor,
    bottomBorderColor,
    leftBorderColor,
  });
  return (
    <View style={[style.parentCircle]}>
      <Animated.View
        style={[
          style.progressCircle,
          style.topRightViewStyle,
          topViewAnimation,
        ]}
      />
      <Animated.View
        style={[
          style.progressCircle,
          style.bottomRightViewStyle,
          rightViewAnimation,
        ]}
      />
      <Animated.View
        style={[
          style.progressCircle,
          style.bottomLeftViewStyle,
          bottomViewAnimation,
        ]}
      />
      <Animated.View
        style={[
          style.progressCircle,
          style.topLeftViewStyle,
          leftViewAnimation,
        ]}
      />
      <Animated.Image
        source={imageSource}
        style={[style.checkMark, imageAnimation]}
      />
    </View>
  );
};

export default CircularAnimatedCheckMark;
