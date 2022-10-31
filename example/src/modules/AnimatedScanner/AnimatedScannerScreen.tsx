import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AnimatedScanner } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import styles from './styles/AnimatedScannerScreenStyle';

const AnimatedScannerScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <CustomHeader
        title={Strings.ANIMATED_SCANNER}
        isBackEnabled={true}
        onBackPress={() => {
          navigation?.goBack();
        }}
      />
      <AnimatedScanner style={styles.container} />
    </>
  );
};

export default AnimatedScannerScreen;
