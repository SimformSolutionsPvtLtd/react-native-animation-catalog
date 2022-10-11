import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AnimatedFlickerLoader } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import styles from './styles/AnimatedFlickerLoaderScreenStyle';

const AnimatedFlickerLoaderScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <CustomHeader
        title="Animated Flicker Loader"
        isBackEnabled={true}
        onBackPress={() => {
          navigation?.goBack();
        }}
      />
      <AnimatedFlickerLoader style={styles.container} />
    </>
  );
};

export default AnimatedFlickerLoaderScreen;
