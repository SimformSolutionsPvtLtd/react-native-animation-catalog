import {StyleSheet} from 'react-native';
import {Metrics} from '../../../theme';

const {verticalScale} = Metrics;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: verticalScale(10),
    flexDirection: 'row',
  },
});

export default styles;
