import type { Range } from '../../types';

export interface AnimatedWalletProps {
  size: Range<50, 270>;
  primaryColor?: string;
  secondaryColor?: string;
  numberOfCards?: Range<1, 4>;
}
