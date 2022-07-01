import type {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface MediaButtonProps {
  speed: number;
  style: StyleProp<ViewStyle>;
  buttonStyle: StyleProp<ViewStyle>;
  playImageSource: ImageSourcePropType;
  pauseImageSource: ImageSourcePropType;
  imageStyle: StyleProp<ImageStyle>;
  onPlayPress: () => void;
  onPausePress: () => void;
  pulseStyle: StyleProp<ViewStyle>;
  pulseStart: number;
  pulseEnd: number;
  pulseSpeed: number;
  pulseDisable: boolean;
}
