import React from 'react';
import { Pressable, View } from 'react-native';
import Animated from 'react-native-reanimated';
import Images from '../../assets';
import { Colors } from '../../theme';
import { useStrikeImage } from './hooks';
import styles from './styles';
import type { StrikeImagePropsType, UseStrikeImageReturnType } from './types';

const StrikeImage = ({
  size = 350,
  color = Colors.havelockBlue,
  imageSource = Images.camera,
  strikeWidth,
  onChangeStrike = () => {},
}: Partial<StrikeImagePropsType>) => {
  const style = styles({ size, strikeWidth });

  const {
    onPressImage,
    imageStyleAnimation,
    parentStrikeLineAnimation,
  }: UseStrikeImageReturnType = useStrikeImage(size, color, onChangeStrike);

  return (
    <Pressable onPress={onPressImage} style={style.container}>
      <Animated.Image
        source={imageSource}
        style={[style.imageStyle, imageStyleAnimation]}
        resizeMode={'contain'}
      />
      <View style={style.strikeLine}>
        <Animated.View
          style={[style.parentStrikeLine, parentStrikeLineAnimation]}
        >
          <Animated.View style={style.innerStrikeLine} />
        </Animated.View>
      </View>
    </Pressable>
  );
};

export default StrikeImage;
