import React from 'react';
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
    color = _ref.color,
    type = _ref.type,
    _ref$hover = _ref.hover,
    hover = _ref$hover === void 0 ? true : _ref$hover,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'animation-button-lines',
    },
    '\u5149\u6548\u7EC4\u4EF6',
  );
};

export default LinesAnimation;
