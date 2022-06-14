import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../theme';

export const PHOTO_SIZE = 120;

const { verticalScale, horizontalScale, moderateScale } = Metrics;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  name: {
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
  description: {
    fontSize: moderateScale(15),
    marginTop: verticalScale(4),
  },
  photo: {
    height: moderateScale(PHOTO_SIZE),
    width: moderateScale(PHOTO_SIZE),
    borderRadius: moderateScale(PHOTO_SIZE / 2),
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: moderateScale(24),
  },
  followTouchableStyle: {
    backgroundColor: Colors.redVelvet,
    borderRadius: moderateScale(5),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(5),
    marginTop: verticalScale(10),
  },
  textFollow: {
    color: Colors.white,
  },
});

export default styles;
