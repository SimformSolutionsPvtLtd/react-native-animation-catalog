import Images from '../assets';
import { NavigationStrings } from '../constants';
import { NavProps } from '../navigation/types';

export const imageData = [
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
    name: 'Card Swipeable',
    screen: () => navigation.navigate(NavigationStrings.CARD_SWIPEABLE),
  },
  {
    id: 2,
    name: 'Animated List',
    screen: () => navigation.navigate(NavigationStrings.ANIMATED_LIST),
  },
  {
    id: 3,
    name: 'Gradient Progress',
    screen: () => navigation.navigate(NavigationStrings.GRADIENT),
  },
  {
    id: 4,
    name: 'Parallax Header',
    screen: () => navigation.navigate(NavigationStrings.PARALLAX_HEADER),
  },
  {
    id: 5,
    name: 'Parallax Header Tabs',
    screen: () =>
      navigation.navigate(NavigationStrings.PARALLAX_HEADER_WITH_TABS),
  },
  {
    id: 7,
    name: 'Media Button',
    screen: () => navigation.navigate(NavigationStrings.MEDIA_BUTTON),
  },
  {
    id: 8,
    name: 'Animated Check Mark',
    screen: () => navigation.navigate(NavigationStrings.ANIMATED_CHECK_MARK),
  },
  {
    id: 9,
    name: 'Animated Wallet',
    screen: () => navigation.navigate(NavigationStrings.ANIMATED_WALLET),
  },
  {
    id: 10,
    name: 'Animated Scanner',
    screen: () => navigation.navigate(NavigationStrings.ANIMATED_SCANNER),
  },
  {
    id: 11,
    name: 'Animated Switch',
    screen: () => navigation.navigate(NavigationStrings.ANIMATED_SWITCH),
  },
  {
    id: 12,
    name: 'Animated Notification',
    screen: () => navigation.navigate(NavigationStrings.ANIMATED_NOTIFICATION),
  },
];

export const FOLLOWING = [
  {
    name: 'Arrow Macwan',
    photo: 'https://avatars.dicebear.com/api/initials/:arrow_macwan.png',
  },
  {
    name: 'Brus Taylor',
    photo: 'https://avatars.dicebear.com/api/initials/:brus_taylor.png',
  },
];

export const FOLLOWERS = [
  {
    name: 'Nemi Crispor',
    photo: 'https://avatars.dicebear.com/api/initials/:nemi_crispor.png',
  },
  {
    name: 'John Millar',
    photo: 'https://avatars.dicebear.com/api/initials/:john_millar.png',
  },
  {
    name: 'Addy Brock',
    photo: 'https://avatars.dicebear.com/api/initials/:addy_brock.png',
  },
  {
    name: 'Samuel Johnson',
    photo: 'https://avatars.dicebear.com/api/initials/:samuel_johnson.png',
  },
  {
    name: 'Olivia Millar',
    photo: 'https://avatars.dicebear.com/api/initials/:olivia_millar.png',
  },
  {
    name: 'Jassica Wintage',
    photo: 'https://avatars.dicebear.com/api/initials/:jassica_wintage.png',
  },
  {
    name: 'Zedyy Williams',
    photo: 'https://avatars.dicebear.com/api/initials/:zeddy_williams.png',
  },
  {
    name: 'Jack Jones',
    photo: 'https://avatars.dicebear.com/api/initials/:jack_jones.png',
  },
  {
    name: 'Thenos',
    photo: 'https://avatars.dicebear.com/api/initials/:thenos.png',
  },
  {
    name: 'Chars Carlie',
    photo: 'https://avatars.dicebear.com/api/initials/:chars_carlie.png',
  },
  {
    name: 'Arrow Macwan',
    photo: 'https://avatars.dicebear.com/api/initials/:arrow_macwan.png',
  },
  {
    name: 'Brus Taylor',
    photo: 'https://avatars.dicebear.com/api/initials/:brus_taylor.png',
  },
  {
    name: 'Ricky Jackson',
    photo: 'https://avatars.dicebear.com/api/initials/:ricky_jackson.png',
  },
  {
    name: 'Wrons Wyen',
    photo: 'https://avatars.dicebear.com/api/initials/:wrons_wyen.png',
  },
];
