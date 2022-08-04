import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale, horizontalScale, verticalScale } = Metrics;

const styles = StyleSheet.create({
  screen: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  containerStyle: {
    ...StyleSheet.absoluteFillObject,
    height: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(20),
    ...Platform.select({
      android: {
        flex: 1,
      },
    }),
  },
  card: {
    backgroundColor: Colors.red100,
    borderRadius: moderateScale(10),
    height: '100%',
    width: '100%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  imageViewStyle: {
    width: '100%',
    height: '100%',
  },
  likeDislikeContainer: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.transparentBlackColor,
    flexDirection: 'row',
  },
  imageStyle: {
    width: horizontalScale(40),
    height: verticalScale(40),
  },
  renderCardContainerStyle: {
    flexDirection: 'column-reverse',
    flex: 1,
  },
  renderCardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: moderateScale(10),
  },
  renderCardButtonViewStyle: {
    backgroundColor: Colors.redVelvet,
    borderRadius: moderateScale(20),
  },
});

export default styles;
