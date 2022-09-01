import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale, horizontalScale, verticalScale } = Metrics;

const styles = ({ size, color }: any) =>
  StyleSheet.create({
    parentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    message: {
      height: verticalScale(size),
      width: horizontalScale(size),
    },
    container: {
      height: verticalScale(size),
      width: horizontalScale(size * 2 - size / 3.33),
    },
    primaryCircle: {
      zIndex: 1,
      height: moderateScale(size / 2),
      width: moderateScale(size / 2),
      borderWidth: verticalScale(size / 25),
      borderRadius: moderateScale(size / 4),
      right: horizontalScale(size / 2),
      position: 'absolute',
      alignSelf: 'flex-end',
      backgroundColor: 'transparent',
    },
    secondaryCircle: {
      height: moderateScale(size / 2 - size / 13.5),
      width: moderateScale(size / 2 - size / 13.5),
      borderRadius: moderateScale(size / 4 - size / 25),
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: horizontalScale(size / 2 + size / 25),
      top: verticalScale(size / 25),
    },
    text: {
      fontSize: moderateScale(size / 3.33),
      fontWeight: '800',
      color: Colors.black,
    },
    innerTrailingLine: {
      height: verticalScale(size / 2 - size / 10),
      width: horizontalScale(size / 10 - size / 33.3),
      backgroundColor: color,
      position: 'absolute',
      right: horizontalScale(size / 2 - size / 10),
      bottom: verticalScale(size / 50),
      borderRadius: moderateScale(size / 50),
    },
    outerTrailingLine: {
      height: verticalScale(size / 2 - size / 10),
      width: horizontalScale(size / 10 - size / 33.3),
      backgroundColor: color,
      position: 'absolute',
      right: horizontalScale(size / 5),
      bottom: verticalScale(size / 10),
      borderRadius: moderateScale(size / 50),
    },
  });

export default styles;
