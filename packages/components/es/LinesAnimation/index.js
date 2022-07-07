import React, { useRef } from 'react';
import classNames from 'classnames'; // import Lines from './lines';

import './index.less';
/*
 * 按钮效果动画
 * children, <ReactElement|String>, 内嵌元素
 * color?, <String>, 光线颜色
 * type?, <String>, 光线类型 'none|gradient|transparent'
 * hover? = true, <Boolean>, 'true'时，鼠标移入时显示光线
 * active? = false, <Boolean>, 'true'时，显示光线
 */

var LinesAnimation = function LinesAnimation(_ref) {
  var children = _ref.children,
    type = _ref.type;
  var child = React.Children.only(children);
  var buttonRef = useRef(null);
  var styleType = type ? 'button-'.concat(type) : 'button-transparent';
  var newChild = /*#__PURE__*/ React.cloneElement(
    child,
    {
      className: classNames(child.props.className, 'button', styleType),
      style: child.props.style,
    },
    [child.props.children],
  );
  console.log(newChild);
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'animation-button-lines',
    },
    newChild,
  );
};

export default LinesAnimation;
