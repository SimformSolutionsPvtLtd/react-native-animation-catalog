import SimpleCard from './SimpleCard';
import SwipeableCard from './SwipeableCard';

const CardSwipeable = Object.assign(SimpleCard, {
  SimpleCard: SimpleCard,
  SwipeableCard: SwipeableCard,
});

export type {
  SimpleCardProps,
  SwipeableCardProps,
  SwipeCallBackProps,
  SwipeCallEndProps,
} from './types';
export { CardSwipeable };
