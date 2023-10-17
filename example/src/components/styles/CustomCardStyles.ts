import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale, verticalScale } = Metrics;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.transparent,
    borderRadius: moderateScale(10),
    height: '100%',
    width: '100%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
});

export default styles;
