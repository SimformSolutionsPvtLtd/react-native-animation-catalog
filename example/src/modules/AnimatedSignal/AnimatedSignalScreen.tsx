import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AnimatedSignal } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import type { NavProps } from '../../navigation/types';
import styles from './styles/AnimatedSignalScreenStyle';

const AnimatedSignalScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <>
      <CustomHeader
        title={Strings.ANIMATED_SIGNAL}
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AnimatedSignal />
      </View>
    </>
  );
};

export default AnimatedSignalScreen;
