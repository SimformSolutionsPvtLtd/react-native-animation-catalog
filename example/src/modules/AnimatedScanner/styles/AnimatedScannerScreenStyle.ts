import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../../src/theme';

const { verticalScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(100),
  },
});
export default styles;
