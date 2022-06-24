import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const PHOTO_SIZE = 40;

const { moderateScale, verticalScale, horizontalScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tabBarContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
  },
  overlayName: {
    fontSize: moderateScale(24),
  },
  collapsedOvarlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    zIndex: 2,
  },
  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(5),
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    borderColor: Colors.redVelvet,
    borderWidth: 2,
    width: '100%',
    shadowColor: Colors.redVelvet,
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: moderateScale(16),
  },
  image: {
    height: verticalScale(PHOTO_SIZE),
    width: horizontalScale(PHOTO_SIZE),
    borderRadius: PHOTO_SIZE / 2,
  },
  name: {
    marginLeft: horizontalScale(8),
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  descriptionStyle: {
    marginHorizontal: horizontalScale(15),
  },
  textDescriptionStyle: {
    textAlign: 'justify',
  },
  hashtagTextViewStyle: {
    marginVertical: verticalScale(10),
    flexDirection: 'row',
  },
  hashtagTextStyle: {
    color: Colors.redVelvet,
    paddingEnd: horizontalScale(3),
  },
  imageBackgroundStyle: {
    height: verticalScale(150),
    marginBottom: verticalScale(5),
  },
  viewHeightStyle: {
    height: verticalScale(200),
  },
});

export default styles;
