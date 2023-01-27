import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';

const { horizontalScale, verticalScale, moderateScale } = Metrics;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.black,
    alignSelf: 'flex-start',
    marginHorizontal: horizontalScale(15),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(8),
    fontWeight: '600',
    fontSize: moderateScale(16),
  },
});

export default styles;
