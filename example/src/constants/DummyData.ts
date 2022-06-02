import { NavigationStrings } from '../constants';
import Images from '../assets';
import {NavProps} from '../services/Types';

export let imageData = [
  {
    id: 1,
    image: Images.nature,
  },
  {
    id: 2,
    image: Images.nature2,
  },
  {
    id: 3,
    image: Images.nature3,
  },
  {
    id: 4,
    image: Images.nature4,
  },
  {
    id: 5,
    image: Images.nature5,
  },
];

export const sampleData = [
  {
    id: 1,
    title: 'Rabbit',
    image: Images.rabbit,
  },
  {
    id: 2,
    title: 'Cat',
    image: Images.cat,
  },
  {
    id: 3,
    title: 'Fox',
    image: Images.fox,
  },
  {
    id: 4,
    title: 'Squirrel',
    image: Images.squirrel,
  },
];

export const AnimationComponentData = (navigation: NavProps) => [
  {
    id: 1,
    name: 'Gradient Progress',
    screen: () => navigation.navigate(NavigationStrings.GRADIENT),
  },
  {
    id: 2,
    name: 'Card Swipeable',
    screen: () => navigation.navigate(NavigationStrings.GRADIENT),
  },
  {
    id: 3,
    name: 'Animated List',
    screen: () => navigation.navigate(NavigationStrings.GRADIENT),
  },
];
