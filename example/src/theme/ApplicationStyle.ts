import {StyleSheet} from 'react-native';
import {Colors} from './index';
import {Metrics} from 'react-native-animation-catalog';

const {horizontalScale, verticalScale, moderateScale} = Metrics;

const applicationStyle = StyleSheet.create({
  screen: {
    flex: 1,
  },
  containerView: {
    width: '100%',
    alignItems: 'center',
  },
  simpleGradientStyle: {
    marginTop: verticalScale(40),
  },
  gradientStyle: {
    width: horizontalScale(100),
    height: verticalScale(20),
    marginTop: verticalScale(5),
  },
  swipeableCardView: {
    marginTop: verticalScale(10),
  },
  cardTextStyle: {
    width: '100%',
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
  cardStyle: {
    height: verticalScale(200),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  simpleCardView: {
    marginTop: verticalScale(210),
  },
  leftRightButtonStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.transparentBlack,
  },
  likeDislikeButtonImageStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
    margin: moderateScale(10),
  },
});

export default applicationStyle;
