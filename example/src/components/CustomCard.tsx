import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CustomCardProps } from '../services/Types';
import styles from './styles/CustomCardStyles';

const CustomCard = ({children, style, onPress}: CustomCardProps) => {
  return (
    <View style={[styles.card, style]}>
      <TouchableOpacity activeOpacity={0.88} onPress={onPress}>{children}</TouchableOpacity>
    </View>
  );
};

export default CustomCard;