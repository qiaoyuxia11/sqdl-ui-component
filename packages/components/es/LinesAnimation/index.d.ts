import { FC } from 'react';
import './index.less';
interface Iprops {
  children: any;
  color?: string;
  type?: string;
  hover?: boolean;
  active?: boolean;
}
declare const LinesAnimation: FC<Iprops>;
export default LinesAnimation;
