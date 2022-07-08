import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { CustomHeader } from '../../components';
import type { NavProps } from '../../navigation/types';
import { CustomMediaButton, DefaultMediaButton, SimpleMediaButton } from './components';
import styles from './styles/styles';

const MediaButtonScreen = () => {
  const navigation = useNavigation<NavProps>();
  const [isPulse, setIsPulse] = useState(false);
  return (
    <View style={styles.container}>
      <CustomHeader
        title="Media Button"
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <DefaultMediaButton />
      <CustomMediaButton isPulse={isPulse} setIsPulse={setIsPulse} />
      <SimpleMediaButton />
    </View>
  );
};

export default MediaButtonScreen;
