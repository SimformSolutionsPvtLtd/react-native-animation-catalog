import CircularAnimatedCheckMark from './CircularAnimatedCheckMark';
import FadedAnimatedCheckMark from './FadedAnimatedCheckMark';
import SimpleAnimatedCheckMark from './SimpleAnimatedCheckMark';

const AnimatedCheckMark = Object.assign(FadedAnimatedCheckMark, {
  Circular: CircularAnimatedCheckMark,
  Simple: SimpleAnimatedCheckMark,
});

export { AnimatedCheckMark };
