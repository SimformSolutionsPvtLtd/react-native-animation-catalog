import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AnimatedWallet } from 'react-native-animation-catalog';
import { NavProps } from 'src/navigation/types';
import { CustomHeader } from '../../components';
import styles from './styles/styles';

const AnimatedWalletScreen = () => {
  const navigation = useNavigation<NavProps>();
  return (
    <>
      <CustomHeader
        title={'Animated Wallet'}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AnimatedWallet />
      </View>
    </>
  );
};

export default AnimatedWalletScreen;
