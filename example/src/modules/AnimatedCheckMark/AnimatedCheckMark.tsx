import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCheckMark } from 'react-native-animation-catalog';
import Images from '../../assets';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { NavProps } from '../../navigation/types';
import { Colors } from '../../theme';
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
      <Text style={styles.firstVariantInfo}>
        {Strings.DEFAULT_ANIMATED_CHECK_MARK}
      </Text>
      <View style={styles.firstVariantContainer}>
        <AnimatedCheckMark size={80} innerCircle={true} />
        <AnimatedCheckMark
          size={80}
          innerCircle={true}
          imageSource={Images.like}
          disableParticles
          backgroundColor={Colors.redVelvet}
        />
      </View>
      <Text style={styles.restVariantInfo}>
        {Strings.CIRCULAR_ANIMATED_CHECK_MARK}
      </Text>
      <View style={styles.secondVariantContainer}>
        <AnimatedCheckMark.Circular />
        <AnimatedCheckMark.Circular
          imageSource={Images.like}
          topBorderColor={Colors.cyan}
          rightBorderColor={Colors.cyan}
          bottomBorderColor={Colors.cyan}
          leftBorderColor={Colors.cyan}
        />
      </View>
      <Text style={styles.restVariantInfo}>
        {Strings.SIMPLE_ANIMATED_CHECKMARK}
      </Text>
      <View style={styles.secondVariantContainer}>
        <AnimatedCheckMark.Simple
          duration={1500}
          backgroundColor={Colors.purple}
          checkMarkColor={Colors.smokeWhite}
          size={100}
        />
      </View>
    </>
  );
};

export default AnimatedCheckMarkScreen;
