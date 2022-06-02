import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

//Navigation Type
interface NavProps {
  navigate: (args: string) => void;
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
}

export { NavProps, CustomCardProps, CustomHeaderProps };

