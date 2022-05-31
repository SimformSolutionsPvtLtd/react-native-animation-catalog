import {
  BounceInDown,
  BounceInLeft,
  BounceInRight,
  BounceOutDown,
  BounceOutLeft,
  BounceOutRight,
  FadeInDown,
  FadeInUp,
  FadeOutDown,
  FadeOutUp,
} from 'react-native-reanimated';

const useAnimatedList = (
  animationType: 'bottom' | 'left' | 'right' | 'fade-up' | 'fade-down'
) => {
  let enterType = null;
  let exitType = null;
  switch (animationType) {
    case 'left':
      enterType = BounceInLeft;
      exitType = BounceOutLeft;
      break;
    case 'right':
      enterType = BounceInRight;
      exitType = BounceOutRight;
      break;
    case 'bottom':
      enterType = BounceInDown;
      exitType = BounceOutDown;
      break;
    case 'fade-down':
      enterType = FadeInDown;
      exitType = FadeOutDown;
      break;
    case 'fade-up':
      enterType = FadeInUp;
      exitType = FadeOutUp;
      break;
    default:
      enterType = FadeInDown;
      exitType = FadeOutDown;
  }

  return {
    enterType,
    exitType,
  };
};

export default useAnimatedList;
