import type { Range } from '../../types';

export interface AnimatedChargingProps {
  size: Range<100, 351>;
  adapterColor: string;
  frontWaveColor: string;
  backWaveColor: string;
  stormColor: string;
  backgroundColor: string;
}

export interface AnimatedChargingStyleProps {
  size: number;
  adapterColor: string;
  frontWaveColor: string;
  backWaveColor: string;
  stormColor: string;
  backgroundColor: string;
}
