import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../theme';

const { verticalScale, horizontalScale, moderateScale } = Metrics;

export const PHOTO_SIZE = 35;

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', padding: 16 },
  image: {
    height: verticalScale(PHOTO_SIZE),
    width: horizontalScale(PHOTO_SIZE),
    borderRadius: moderateScale(PHOTO_SIZE / 2),
  },
  name: {
    marginLeft: horizontalScale(8),
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
});

export default styles;
