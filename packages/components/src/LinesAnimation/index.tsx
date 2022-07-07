import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
// import Lines from './lines';
import './index.less';

/*
 * 按钮效果动画
 * children, <ReactElement|String>, 内嵌元素
 * color?, <String>, 光线颜色
 * type?, <String>, 光线类型 'none|gradient|transparent'
 * hover? = true, <Boolean>, 'true'时，鼠标移入时显示光线
 * active? = false, <Boolean>, 'true'时，显示光线
 */
const LinesAnimation = ({ children, type }) => {
  const child = React.Children.only(children);
  let buttonRef = useRef(null);
  const styleType = type ? `button-${type}` : 'button-transparent';
  const newChild = React.cloneElement(
    child,
    {
      className: classNames(child.props.className, 'button', styleType),
      style: child.props.style,
    },
    [child.props.children],
  );
  console.log(newChild);
  return <div className="animation-button-lines">{newChild}</div>;
};

export default LinesAnimation;
