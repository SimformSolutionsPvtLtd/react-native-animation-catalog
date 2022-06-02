import { StyleSheet } from 'react-native';
import { Metrics } from 'react-native-animation-catalog';
import { Colors } from './index';

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
  separatorStyle: {
    height: verticalScale(30),
  },
  backgroundImageView: {
    overflow: 'hidden',
    borderRadius: moderateScale(10),
  },
  backgroundImageStyle: {
    height: verticalScale(200),
  },
  likeCommentSectionStyle: {
    padding: moderateScale(5),
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    backgroundColor: Colors.smokeWhite,
    position: 'absolute',
    bottom: verticalScale(-20),
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  animatedListStyle: {
    marginTop: verticalScale(220),
  },
  imageViewStyle: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  imageIconStyle: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    color: Colors.smokeWhite,
    fontSize: moderateScale(24),
    position: 'absolute',
    marginTop: verticalScale(160),
    marginStart: horizontalScale(10),
  },
});

export default applicationStyle;
