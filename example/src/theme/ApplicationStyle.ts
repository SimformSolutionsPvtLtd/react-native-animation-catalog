import { StyleSheet } from 'react-native';
import { Metrics } from 'react-native-animation-catalog';
import { Colors } from './index';

const {horizontalScale, verticalScale, moderateScale} = Metrics;

const applicationStyle = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.blue700
  },
});

export default applicationStyle;
