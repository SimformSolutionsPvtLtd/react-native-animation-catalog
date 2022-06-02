import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

//Navigation Type
interface NavProps {
  navigate: (args: string) => void;
  goBack: () => void;
  pop: () => void;
}

//CustomCard Type
interface CustomCardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

//CustomHeader Type
interface CustomHeaderProps {
  title: string;
  isBack: boolean;
  onBackPress?: () => void;
}

export { NavProps, CustomCardProps, CustomHeaderProps };

