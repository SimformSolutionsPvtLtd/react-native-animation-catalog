import type { ImageStyle, StyleProp, ViewStyle } from 'react-native';

export interface MediaButtonProps {
  speed?: number;
  style?: StyleProp<ViewStyle>;
  playImageSource?: number | { uri: string };
  pauseImageSource?: number | { uri: string };
  imageStyle?: StyleProp<ImageStyle>;
  onPlayPress?: () => void;
  onPausePress?: () => void;
  pulseStyle?: StyleProp<ViewStyle>;
}
