import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../theme';

const { verticalScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.offWhite,
    flex: 1,
  },
  textNoDataFoundStyle: {
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
});

export default styles;
