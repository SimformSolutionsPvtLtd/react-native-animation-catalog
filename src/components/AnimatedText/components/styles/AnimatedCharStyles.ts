import { StyleSheet } from 'react-native';
import { Colors } from '../../../../theme';
import type { StyleProps } from '../../types';

/**
 *
 * @param theme
 * @returns
 */
const styles = ({ fontSize }: Partial<StyleProps>) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    charStyle: {
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: fontSize,
    },
  });

export default styles;
