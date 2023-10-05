import React from 'react';
import { Text, View } from 'react-native';
import { MediaButton } from 'react-native-animation-catalog';
import { Strings } from '../../../constants';
import styles from '../styles/styles';
import { CustomMediaButtonProps } from '../types';

const CustomMediaButton = ({ isPulse, setIsPulse }: CustomMediaButtonProps) => (
  <View style={styles.customMediaButtonContainer}>
    <Text style={styles.textStyle}>
      {Strings.CUSTOM_MEDIA_BUTTON_WITH_PULSE}
    </Text>
    <View style={styles.customMediaButtonInnerContainer}>
      <MediaButton
        speed={500}
        buttonStyle={styles.customMediaButtonPulseStyle}
        pulseStyle={[
          styles.customMediaButtonPulseStyle,
          styles.customPulseStyle,
        ]}
        pulseStart={0.8}
        pulseEnd={1.5}
        pulseSpeed={1000}
      />
      <MediaButton
        speed={500}
        buttonStyle={styles.buttonStyle}
        pulseStyle={styles.pulseStyle}
        onPlayPress={() => {
          setIsPulse(true);
        }}
        onPausePress={() => {
          setIsPulse(false);
        }}
        pulseStart={0.8}
        pulseEnd={1.8}
        pulseSpeed={1000}
        pulseDisable={isPulse}
      />
    </View>
  </View>
);

export default CustomMediaButton;
