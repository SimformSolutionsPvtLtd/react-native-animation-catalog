import RNAnimatedCard from './AnimatedCard';
import SwipeableCard from './SwipeableCard';

const AnimatedCard = Object.assign(RNAnimatedCard, {
  Swipeable: SwipeableCard,
});

export type {
  SimpleCardProps,
  SwipeableCardProps,
  SwipeCallBackProps,
  SwipeCallEndProps,
} from './types';
export { AnimatedCard };
