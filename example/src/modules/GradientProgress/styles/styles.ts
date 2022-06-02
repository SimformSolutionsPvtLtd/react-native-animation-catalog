import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../theme';

const {verticalScale, horizontalScale, moderateScale} = Metrics;

const styles = StyleSheet.create({
  containerView: {
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
  },
  simpleGradientStyle: {
    height: verticalScale(5),
    marginTop: verticalScale(2),
  },
  gradientStyle: {
    width: horizontalScale(100),
    height: verticalScale(20),
    marginTop: verticalScale(5),
  },
  textStyle: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: moderateScale(16),
    marginTop: verticalScale(5),
    fontWeight: '400',
  },
  gradientChildStyle: {
    height: verticalScale(40),
    marginTop: verticalScale(5),
  },
});

export default styles;