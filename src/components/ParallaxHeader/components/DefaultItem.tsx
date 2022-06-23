import React, { FC, memo, useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { DefaultItemProps } from '../types';
import styles from './styles/DefaultItemStyles';

export const PHOTO_SIZE = 40;

const DefaultItem: FC<DefaultItemProps> = ({ style, items }) => {
  const { photo, name } = items;

  const mergedStyle = useMemo(() => [styles.container, style], [style]);

  return (
    <TouchableOpacity>
      <View style={mergedStyle}>
        <Image style={styles.image} source={{ uri: photo }} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(DefaultItem);
