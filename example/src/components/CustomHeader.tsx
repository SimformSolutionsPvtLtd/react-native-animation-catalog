import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Images from '../assets';
import { CustomHeaderProps } from '../services/Types';
import styles from './styles/CustomHeaderStyles';

const CustomHeader = ({
  title = '',
  isBack = false,
  onBackPress,
}: CustomHeaderProps) => {
  return (
    <View style={styles.container}>
      {isBack ? (
        <TouchableOpacity onPress={onBackPress}>
          <Image style={styles.backImageStyle} source={Images.arrow_back} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyViewStyle} />
      )}
      <Text style={styles.textStyle}>{title}</Text>
      <View style={styles.emptyViewStyle} />
    </View>
  );
};

export default CustomHeader;
