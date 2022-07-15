import SimpleCard from './SimpleCard';
import SwipeableCard from './SwipeableCard';

const AnimatedCard = Object.assign(SimpleCard, {
  Swipeable: SwipeableCard,
});

export type {
  SimpleCardProps,
  SwipeableCardProps,
  SwipeCallBackProps,
  SwipeCallEndProps,
} from './types';
export { AnimatedCard };
