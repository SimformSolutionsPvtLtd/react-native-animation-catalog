import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';

const { verticalScale, horizontalScale, moderateScale } = Metrics;

const styles = StyleSheet.create({
  customGradientsStyle: {
    width: '100%',
    paddingHorizontal: horizontalScale(10),
  },
  simpleGradientContainerStyle: {
    marginTop: verticalScale(20),
  },
  simpleGradientsStyle: {
    paddingHorizontal: horizontalScale(10),
  },
  simpleGradientProgressBarStyle: {
    height: verticalScale(10),
    marginVertical: verticalScale(3),
  },
  customGradientContainerStyle: {
    marginTop: verticalScale(20),
  },
  customGradientProgressBarStyle: {
    width: '100%',
    height: verticalScale(60),
    marginTop: verticalScale(5),
    borderColor: Colors.cyan,
    borderRadius: moderateScale(10),
    borderWidth: 2,
  },
  customGradientStyle: {
    width: horizontalScale(100),
    height: verticalScale(100),
    marginTop: verticalScale(5),
    borderColor: Colors.black,
    borderRadius: moderateScale(10),
    borderWidth: 2,
  },
  customGradientProgressBarViewStyle: {
    flexDirection: 'row',
    width: '100%',
    marginTop: verticalScale(10),
    justifyContent: 'space-between',
  },
  customGradientProgressStyle: {
    width: horizontalScale(100),
    height: verticalScale(100),
    marginTop: verticalScale(5),
    borderRadius: moderateScale(10),
  },
  textStyle: {
    color: Colors.black,
    marginStart: horizontalScale(10),
    fontSize: moderateScale(16),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10),
    fontWeight: '400',
  },
  textChildStyle: {
    color: Colors.white,
    alignItems: 'center',
    fontSize: moderateScale(18),
    paddingBottom: verticalScale(20),
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 2,
    justifyContent: 'center',
  },
  gradientChildStyle: {
    height: verticalScale(200),
    marginTop: verticalScale(5),
    justifyContent: 'center',
  },
  clickTextStyle: {
    fontSize: moderateScale(20),
    fontWeight: '400',
    letterSpacing: 2,
  },
  clickButtonStyle: {
    backgroundColor: Colors.smokeWhite,
    borderRadius: moderateScale(20),
    marginHorizontal: horizontalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(70),
  },
  gradientChildContainerStyle: {
    marginTop: verticalScale(20),
  },
  gradientChildViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
