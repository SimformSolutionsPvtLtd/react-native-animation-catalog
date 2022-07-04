import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';


const { verticalScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  mediaButtonStyle: {
      backgroundColor: Colors.redVelvet,
      height: 100, width: 100
  },
});

export default styles;
