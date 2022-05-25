import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';


const { verticalScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: verticalScale(100),
  },
  textInput: { 
    borderWidth: 1, 
    borderRadius: verticalScale(10),
    height: verticalScale(40),
    width: '80%', 
    padding: verticalScale(10),
  },
});

export default styles;