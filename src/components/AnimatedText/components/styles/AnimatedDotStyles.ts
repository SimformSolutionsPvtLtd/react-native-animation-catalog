import { StyleSheet } from 'react-native';
import { Colors } from '../../../../theme';
import type { DotStyleProps } from '../../types';

/**
 *
 * @param theme
 * @returns
 */
const styles = ({ dotSize }: Partial<DotStyleProps>) =>
  StyleSheet.create({
    dot: {
      backgroundColor: Colors.white,
      position: 'absolute',
      zIndex: 2,
      borderRadius: dotSize,
      height: dotSize,
      width: dotSize,
    },
  });

export default styles;
