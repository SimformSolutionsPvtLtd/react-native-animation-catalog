import React from 'react';
import { Text, View } from 'react-native';
import { MediaButton } from 'react-native-animation-catalog';
import { Strings } from '../../../constants';
import styles from '../styles/styles';

const SimpleMediaButton = () => (
  <View style={styles.customMediaButtonContainer}>
    <Text style={styles.textStyle}>
      {Strings.SIMPLE_MEDIA_BUTTON_WITH_PULSE}
    </Text>
    <View style={styles.customMediaButtonInnerContainer}>
      <MediaButton
        speed={500}
        buttonStyle={styles.simpleMediaButtonStyle}
        pulseDisable
      />
      <MediaButton
        speed={500}
        buttonStyle={styles.simpleMediaButtonRectangeStlye}
        pulseDisable
      />
    </View>
  </View>
);

export default SimpleMediaButton;
