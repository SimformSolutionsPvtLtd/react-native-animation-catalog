import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { WirelessCharger } from 'react-native-animation-catalog';
import { NavProps } from 'src/navigation/types';
import { CustomHeader } from '../../components';
import styles from './styles/styles';

const WirelessChargerScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <>
      <CustomHeader
        title={'Wireless Charger'}
        isBackEnabled={true}
        onBackPress={() => navigation?.goBack()}
      />
      <View style={styles.container}>
        <WirelessCharger />
      </View>
    </>
  );
};

export default WirelessChargerScreen;
