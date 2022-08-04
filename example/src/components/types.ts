import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

//CustomCard Type
interface CustomCardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

//CustomHeader Type
interface CustomHeaderProps {
  title: string;
  isBackEnabled: boolean;
  onBackPress?: () => void;
}

export { CustomCardProps, CustomHeaderProps };

