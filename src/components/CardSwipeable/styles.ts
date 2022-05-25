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
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    height: '100%',
    width: '100%',
    shadowColor: '#000',
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
});

export default styles;
