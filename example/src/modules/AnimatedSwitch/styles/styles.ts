import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const {moderateScale, verticalScale} = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstVariantContainer: {
    padding: moderateScale(20),
  },
  firstVariantTitle: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    letterSpacing: 1,
    color: Colors.black,
  },
  firstSwitchContainer: {
    marginTop: verticalScale(15),
    alignItems: 'center',
  },
});

export default styles;
