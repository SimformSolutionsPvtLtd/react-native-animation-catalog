import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

const {moderateScale, verticalScale} = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  variantContainer: {
    padding: moderateScale(20),
  },
  switchTitle: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    letterSpacing: 1,
    color: Colors.black,
  },
  switchContainer: {
    marginTop: verticalScale(15),
    alignItems: 'center',
  },
});

export default styles;
