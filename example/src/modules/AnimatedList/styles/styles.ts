import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';

const { verticalScale, horizontalScale, moderateScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleTextStyle: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontWeight: '500',
    margin: moderateScale(20),
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
  horizontalViewStyle: {
    height: verticalScale(235),
  },
  contentContainerHorizontalStyle: {
    marginStart: horizontalScale(10),
  },
  cardHorizontalStyle: {
    width: horizontalScale(190),
  },
  backgroundHorizontalImageStyle: {
    width: horizontalScale(190),
    height: verticalScale(200),
  },
  separatorHorizontalStyle: {
    width: verticalScale(10),
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
    marginTop: verticalScale(5),
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

export default styles;
