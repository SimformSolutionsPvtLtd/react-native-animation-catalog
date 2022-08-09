import {StyleSheet} from 'react-native';
import {Metrics} from '../../../theme';

const {moderateScale} = Metrics;

const styles = StyleSheet.create({
  firstVariantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secondVariantContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: moderateScale(40),
    flexDirection: 'row',
  },
  variantInfo: {
    fontSize: moderateScale(16),
    padding: moderateScale(20),
    alignSelf: 'center',
    fontWeight: '500',
  },
});

export default styles;
