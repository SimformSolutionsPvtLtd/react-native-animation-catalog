import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: Colors.deepOrange400,
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(100),
    height: moderateScale(100),
  },
  image: {
    height: '60%',
    width: '60%',
    position: 'absolute',
    tintColor: 'white',
  },
});

export default styles;
