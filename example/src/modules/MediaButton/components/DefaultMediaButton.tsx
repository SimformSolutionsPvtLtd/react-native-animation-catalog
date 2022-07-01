import React from 'react';
import { Text, View } from 'react-native';
import { MediaButton } from 'react-native-animation-catalog';
import { Strings } from '../../../constants';
import styles from '../styles/styles';

const DefaultMediaButton = () => (
  <View style={styles.simpleMediaButtonPulseStyle}>
    <Text style={styles.textStyle}>
      {Strings.DEFAULT_MEDIA_BUTTON_WITH_PULSE}
    </Text>
    <MediaButton style={styles.defaultMediaButtonStyle} />
  </View>
);

export default DefaultMediaButton;
