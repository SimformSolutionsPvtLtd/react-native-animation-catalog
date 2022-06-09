import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import type { StickyHeaderProps } from '../types';
import styles from './styles/StickyHeaderStyles';

const StickyHeader = ({
  style,
  name = 'User Name',
  children,
}: Partial<StickyHeaderProps>) => {
  const containerStyle = useMemo(() => [styles.container, style], [style]);

  return (
    <View style={containerStyle}>
      {!children ? <Text style={styles.title}>{name}</Text> : children}
    </View>
  );
};

export default memo(StickyHeader);
