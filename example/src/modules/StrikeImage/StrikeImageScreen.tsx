import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { StrikeImage } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import type { NavProps } from '../../navigation/types';
import styles from './style/styles';

const StrikeImageScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.STRIKE_IMAGE}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <StrikeImage />
      </View>
    </View>
  );
};

export default StrikeImageScreen;
