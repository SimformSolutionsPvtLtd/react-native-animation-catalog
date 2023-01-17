import type { ImageSourcePropType } from 'react-native';
import type { Range } from '../../types';

export interface StrikeImagePropsType {
  size: Range<50, 351>;
  color: string;
  imageSource: ImageSourcePropType;
  strikeWidth: Range<6, 41>;
  onChangeStrike: (strikeVisibility: boolean) => void;
}

export interface StrikeImageStylePropsType {
  size: number;
  strikeWidth: number | undefined;
}

export interface UseStrikeImageReturnType {
  parentStrikeLineAnimation: {
    width: number;
    backgroundColor: string;
  };
  imageStyleAnimation: {
    tintColor: string;
  };
  onPressImage: () => void;
}
