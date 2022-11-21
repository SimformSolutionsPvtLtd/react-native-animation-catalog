import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedSwitch } from 'react-native-animation-catalog';
import { NavProps } from 'src/navigation/types';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors } from '../../theme';
import styles from './styles/styles';

const AnimatedSwitchScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <>
      <CustomHeader
        title={'Animated Switch'}
        isBackEnabled={true}
        onBackPress={() => navigation?.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.variantContainer}>
          <Text style={styles.switchTitle}>{Strings.ANIMATED_SWITCH}</Text>
          <View style={styles.switchContainer}>
            <AnimatedSwitch
              size={100}
              lightThemeColor={Colors.kournikova}
              darkThemeColor={Colors.darkModerateViolet}
            />
          </View>
        </View>
        <View style={styles.variantContainer}>
          <Text style={styles.switchTitle}>
            {Strings.DAY_AND_NIGHT_ANIMATED_SWITCH}
          </Text>
          <View style={styles.switchContainer}>
            <AnimatedSwitch.DayAndNightTheme size={100} />
          </View>
        </View>
        <View style={styles.variantContainer}>
          <Text style={styles.switchTitle}>
            {Strings.SEA_THEME_ANIMATED_SWITCH}
          </Text>
          <View style={styles.switchContainer}>
            <AnimatedSwitch.SeaTheme size={100} />
          </View>
        </View>
      </View>
    </>
  );
};

export default AnimatedSwitchScreen;
