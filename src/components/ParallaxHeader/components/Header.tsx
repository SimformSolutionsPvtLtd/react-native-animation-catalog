import React, { memo, useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../../assets';
import type { HeaderProps } from '../types';
import styles from './styles/HeaderStyles';

const Header = ({
  style,
  name = 'User Name',
  photo = Images.avatar,
  description = "Let's Start",
  children,
}: Partial<HeaderProps>) => {
  const containerStyle = useMemo(() => [styles.container, style], [style]);

  return (
    <View style={containerStyle}>
      {!children ? (
        <>
          <Image style={styles.photo} source={photo} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.followTouchableStyle}>
              <Text style={styles.textFollow}>Follow</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        children
      )}
    </View>
  );
};

export default memo(Header);
