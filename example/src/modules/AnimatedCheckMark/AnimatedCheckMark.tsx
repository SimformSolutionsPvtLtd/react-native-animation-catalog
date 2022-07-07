import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {AnimatedCheckMark} from 'react-native-animation-catalog';
import Images from '../../assets';
import {CustomHeader} from '../../components';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const AnimatedCheckMarkScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <>
      <CustomHeader
        title={'Animated Check Mark'}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <AnimatedCheckMark size={80} innerCircle={true} />
        <AnimatedCheckMark
          size={80}
          innerCircle={true}
          imageSource={Images.like}
          disableParticles
          backgroundColor={'green'}
        />
      </View>
    </>
  );
};

export default AnimatedCheckMarkScreen;
