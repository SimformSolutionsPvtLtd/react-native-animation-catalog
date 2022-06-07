import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const {verticalScale, moderateScale, horizontalScale} = Metrics;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: verticalScale(60),
    backgroundColor: Colors.blue700,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  textStyle: {
    color: Colors.white,
    fontSize: moderateScale(18),
    fontWeight: '600',
    textAlign: 'center',
  },
  backImageStyle: {
    width: moderateScale(34),
    height: moderateScale(34),
    tintColor: Colors.white,
  },
  emptyViewStyle: {
    width: horizontalScale(20),
  },
});

export default styles;