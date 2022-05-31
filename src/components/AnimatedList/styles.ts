import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale, horizontalScale, verticalScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(200),
    width: horizontalScale(350),
  },
  card: {
    backgroundColor: Colors.white,
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
  },
  flatListStyle: {
    flex: 1,
  },
  flatListContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
