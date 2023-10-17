import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';

const { verticalScale, moderateScale } = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  animatedListStyle: {
    marginTop: verticalScale(10),
  },
  itemSeparatorStyle: {
    height: verticalScale(10),
  },
  contentContainerStyle: {
    paddingBottom: verticalScale(50),
    alignItems: 'center',
  },
  cardStyle: {
    height: verticalScale(80),
  },
  gradientProgressStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentNameTextStyle: {
    fontSize: moderateScale(16),
    color: Colors.white,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default styles;
