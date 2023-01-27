import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { HeartRate, HeartRateEnum } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import type { NavProps } from '../../navigation/types';
import styles from './styles/styles';

const HeartRateScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.HEART_RATE}
        isBackEnabled
        onBackPress={() => navigation?.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{Strings.DEFAULT_HEARTRATE}</Text>
        <HeartRate />
        <Text style={styles.title}>{Strings.FOLLOWUP_HEARTRATE}</Text>
        <HeartRate heartRateType={HeartRateEnum.FOLLOWUP} />
      </View>
    </View>
  );
};

export default HeartRateScreen;
