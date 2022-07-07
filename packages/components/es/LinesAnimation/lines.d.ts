import { FC } from 'react';
interface Iprops {
  width: number | undefined;
  height: number | undefined;
  borderRadius?: number;
  color: string | undefined;
  style?: {
    width: number;
    height: number;
  };
}
declare const Lines: FC<Iprops>;
export default Lines;
