import { Dimensions } from 'react-native';

let { width, height } = Dimensions.get('window');
if (width > height) {
  [width, height] = [height, width];
}
//Guideline sizes are based on standard ~5" screen mobile device

const guidelineBaseWidth = 375;

const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export default {
  horizontalScale,
  verticalScale,
  moderateScale,
  width,
  height,
};
