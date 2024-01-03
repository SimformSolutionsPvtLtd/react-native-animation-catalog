import { StyleSheet } from 'react-native';
import type { StyleProps } from './types';

/**
 *
 * @param theme
 * @returns
 */
const styles = ({ backGroundColor, fontSize }: Partial<StyleProps>) =>
  StyleSheet.create({
    charWrapper: { flexDirection: 'row', position: 'absolute' },
    container: {
      justifyContent: 'center',
      backgroundColor: backGroundColor,
      fontSize: fontSize,
    },
    mainContainer: { alignItems: 'center', justifyContent: 'center' },
    maskTextStyle: {
      color: 'transparent',
      backgroundColor: 'transparent',
      fontSize: fontSize,
      fontWeight: 'bold',
    },
  });

export default styles;
