import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { MediaButton } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import type { NavProps } from '../../navigation/types';
import styles from './styles/styles';

const MediaButtonScreen = () => {
  const navigation = useNavigation<NavProps>();
  return (
    <View>
      <CustomHeader
        title="Media Button"
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <MediaButton
          speed={500}
          style={styles.mediaButtonStyle}
          pulseStyle={{height: 100, width: 100}}
          onPlayPress={() => {
            console.log('playCall');
          }}
          onPausePress={() => {
            console.log('pauseCall');
          }}
        />
      </View>
    </View>
  );
};

export default MediaButtonScreen;
