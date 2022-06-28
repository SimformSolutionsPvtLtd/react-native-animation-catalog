import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale } = Metrics;

const styles = ({ anim }: any) =>
  StyleSheet.create({
    container: {
      height: moderateScale(100),
      width: moderateScale(100),
      zIndex: -1,
      borderRadius: moderateScale(50),
      backgroundColor: Colors.deepOrange200,
      opacity: 0.6,
      transform: [{ scale: anim.current }],
      position: 'absolute',
    },
  });

export default styles;
