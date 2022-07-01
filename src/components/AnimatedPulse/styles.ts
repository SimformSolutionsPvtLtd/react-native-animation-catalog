import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: Colors.deepOrange200,
    opacity: 0.6,
    position: 'absolute',
  },
  childrenViewStyle: {
    position: 'absolute',
  },
});

export default styles;
