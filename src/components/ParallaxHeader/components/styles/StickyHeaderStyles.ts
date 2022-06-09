import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../theme';

const { moderateScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
});

export default styles;
