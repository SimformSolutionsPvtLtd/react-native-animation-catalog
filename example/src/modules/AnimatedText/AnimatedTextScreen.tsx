import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AnimatedText, AnimatedTextEnum } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import type { NavProps } from '../../navigation/types';
import styles from './styles/styles';

const AnimatedTextScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader
        title={Strings.ANIMATED_TEXT}
        isBackEnabled
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.textContainer}>
        <AnimatedText text="upbound" />
      </View>
      <View style={styles.textContainer}>
        <AnimatedText text="upbound" type={AnimatedTextEnum.REVERSE} />
      </View>
    </View>
  );
};

export default AnimatedTextScreen;
