import CircularAnimatedCheckMark from './CircularAnimatedCheckMark';
import FadedAnimatedCheckMark from './FadedAnimatedCheckMark';

const AnimatedCheckMark = Object.assign(FadedAnimatedCheckMark, {
  Faded: FadedAnimatedCheckMark,
  Circular: CircularAnimatedCheckMark,
});

export { AnimatedCheckMark };
