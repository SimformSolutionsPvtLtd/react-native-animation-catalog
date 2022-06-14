import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';

export const PHOTO_SIZE = 120;
const { verticalScale, moderateScale, horizontalScale } = Metrics;

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
  textStickyHeader: {
    fontSize: moderateScale(20),
    fontWeight: '700',
  },
  backButtonStyle: {
    alignSelf: 'flex-start',
    paddingTop: verticalScale(12),
  },
  backButtonImageStyle: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
  stickyHeaderContainerStlye: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  stickyHeaderBackButtonStyle: {
    alignSelf: 'flex-start',
    paddingLeft: horizontalScale(10),
  },
  containerTabsItem: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: moderateScale(16),
  },
  imageTabsItem: {
    height: verticalScale(40),
    width: horizontalScale(40),
    borderRadius: moderateScale(40 / 2),
  },
  nameTabsItem: {
    marginLeft: horizontalScale(8),
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  listComponentStyle: {
    width: '100%',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  listTextComponentStyle: {
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
});

export default styles;
