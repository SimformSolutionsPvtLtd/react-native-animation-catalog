import CircularAnimatedCheckMark from './CircularAnimatedCheckMark';
import FadedAnimatedCheckMark from './FadedAnimatedCheckMark';
import SimpleAnimatedCheckMark from './SimpleAnimatedCheckMark';

const AnimatedCheckMark = Object.assign(FadedAnimatedCheckMark, {
  Circular: CircularAnimatedCheckMark,
  Simple: SimpleAnimatedCheckMark,
});

export type {
  AnimationCheckMarkProps,
  CircularAnimatedProps,
  AnimatedParticlesProps,
  AnimatedCheckMarkProps,
} from './types';
export { AnimatedCheckMark };
