import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AnimatedCharging } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import type { NavProps } from '../../navigation/types';
import styles from './styles/styles';

const AnimatedChargingScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.ANIMATED_CHARGING}
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AnimatedCharging />
      </View>
    </View>
  );
};

export default AnimatedChargingScreen;
