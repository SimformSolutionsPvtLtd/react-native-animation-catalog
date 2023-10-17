import { StyleSheet } from 'react-native';
import { Metrics } from '../../../theme';

const { moderateScale } = Metrics;

const styles = StyleSheet.create({
  firstVariantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: moderateScale(20),
  },
  secondVariantContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: moderateScale(20),
    flexDirection: 'row',
  },
  firstVariantInfo: {
    fontSize: moderateScale(16),
    padding: moderateScale(22),
    alignSelf: 'center',
    fontWeight: '500',
  },
  restVariantInfo: {
    fontSize: moderateScale(16),
    padding: moderateScale(15),
    alignSelf: 'center',
    fontWeight: '500',
  },
});

export default styles;
