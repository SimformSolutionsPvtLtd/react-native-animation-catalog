import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';

const { verticalScale, horizontalScale, moderateScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mediaButtonStyle: {
    backgroundColor: Colors.redVelvet,
    height: verticalScale(100),
    width: horizontalScale(100),
  },
  simpleMediaButtonPulseStyle: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20),
  },
  textStyle: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    letterSpacing: 1,
  },
  defaultMediaButtonStyle: {
    marginTop: verticalScale(80),
  },
  customMediaButtonContainer: {
    marginTop: verticalScale(100),
    marginHorizontal: horizontalScale(20),
  },
  customMediaButtonInnerContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(100),
    justifyContent: 'space-between',
  },
  customMediaButtonPulseStyle: {
    height: verticalScale(80),
    width: horizontalScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: Colors.secondPrimary,
  },
  customPulseStyle: {
    backgroundColor: Colors.secondPrimary2,
  },
  buttonStyle: {
    height: verticalScale(80),
    width: horizontalScale(80),
    borderRadius: 0,
    backgroundColor: Colors.redVelvet,
  },
  pulseStyle: {
    height: verticalScale(80),
    width: horizontalScale(80),
    borderRadius: 0,
  },
  simpleMediaButtonStyle: {
    height: verticalScale(90),
    width: horizontalScale(90),
    backgroundColor: Colors.secondPrimary4,
  },
  simpleMediaButtonRectangeStlye: {
    height: verticalScale(80),
    width: horizontalScale(130),
    borderRadius: 4,
    backgroundColor: Colors.cyan,
  },
});

export default styles;
