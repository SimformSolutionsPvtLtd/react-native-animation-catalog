import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';
import type { AnimatedWalletStyle } from './types';

const { moderateScale, horizontalScale, verticalScale } = Metrics;
const styles = ({ size }: AnimatedWalletStyle) =>
  StyleSheet.create({
    container: {
      height: verticalScale(size),
      width: horizontalScale(size + (size - 10) / 3),
      borderRadius: moderateScale((size - 10) / 6),
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wallet: {
      zIndex: 3,
      height: verticalScale(size),
      width: horizontalScale(size + (size - 10) / 3),
      borderRadius: moderateScale((size - 10) / 6),
    },
    walletPart: {
      height: verticalScale((size - 10) / 3),
      width: horizontalScale(size + (size - 10) / 3),
      borderTopLeftRadius: moderateScale((size - 10) / 6),
      borderTopRightRadius: moderateScale((size - 10) / 6),
    },
    walletButton: {
      height: verticalScale(size / 5),
      borderTopLeftRadius: moderateScale((size - 10) / 12),
      borderBottomLeftRadius: moderateScale((size - 10) / 12),
      alignSelf: 'flex-end',
      marginTop: '10%',
      justifyContent: 'center',
    },
    circle: {
      height: moderateScale((size - 10) / 8),
      width: moderateScale((size - 10) / 8),
      borderRadius: moderateScale((size - 10) / 16),
      marginLeft: horizontalScale((size - 10) / 16),
    },
    card: {
      height: verticalScale(size - size / 5),
      width: horizontalScale(size),
      borderRadius: moderateScale((size - 10) / 12),
      borderTopLeftRadius: moderateScale(size / 5),
      position: 'absolute',
    },
    innerCard: {
      zIndex: 2,
    },
    middleCard: {
      zIndex: 1,
      height: verticalScale(size - 10) - size / 5,
      width: horizontalScale(size - (size - 10) / 12),
    },
    outerCard: {
      height: verticalScale(size - 10) - size / 5,
      width: horizontalScale(size - (size - 10) / 12),
    },
    linearGradient: {
      paddingLeft: horizontalScale(15),
      paddingRight: horizontalScale(15),
      borderRadius: moderateScale(5),
      width: horizontalScale(300),
      marginTop: verticalScale(20),
      height: verticalScale(30),
    },
  });

export default styles;
