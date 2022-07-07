import React from 'react';
import classNames from 'classnames';
import Lines from './lines';
import './index.less';

const LinesAnimation = ({ type = 'gradient' }) => {
  const linesColor = 'red';
  return (
    <>
      <Lines
        key={new Date().getTime().toString()}
        width={100}
        height={100}
        borderRadius={5}
        color={type === 'none' ? linesColor : undefined}
      />
      <div className={classNames('guag', 'btn')}>光效</div>
    </>
  );
};

export default LinesAnimation;
