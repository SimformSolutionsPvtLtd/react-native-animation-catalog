import { StyleSheet } from "react-native";

import {Colors, Metrics} from '../../../theme';

const {verticalScale, moderateScale} = Metrics;

const styles = StyleSheet.create({
  swipeableCardView: {
    marginTop: verticalScale(40),
  },
  cardTextStyle: {
    width: '100%',
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: Colors.black,
    fontWeight: '400',
  },
  cardStyle: {
    height: verticalScale(200),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  simpleCardView: {
    marginTop: verticalScale(260),
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

export default styles;