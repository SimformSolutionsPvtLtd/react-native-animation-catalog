import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const { moderateScale } = Metrics;

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
});

export default styles;
