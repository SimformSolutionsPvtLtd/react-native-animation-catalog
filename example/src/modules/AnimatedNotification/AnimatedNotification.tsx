import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AnimatedNotification } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import { NavProps } from '../../navigation/types';
import styles from './styles/styles';

const AnimatedNotificationScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <>
      <CustomHeader
        title={'Animated Notification'}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AnimatedNotification size={100} />
      </View>
    </>
  );
};

export default AnimatedNotificationScreen;
