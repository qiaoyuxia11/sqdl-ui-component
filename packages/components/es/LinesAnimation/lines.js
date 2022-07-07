/*
* 按钮效果动画
* 使用：
* 引入less文件 @import './lines.less';
* 在需要的地方添加class:
    .button{
        //添加光线默认样式
        .lines();
        // 设置光线颜色
        .set-lines-color(#01a4ff, #01ffc2);
    }
*
* 注意：无法使用在圆角较大的按钮上, 大于20就不行了
*/
import React from 'react';

var SvgRect = function SvgRect(_ref) {
  var width = _ref.width,
    height = _ref.height,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? 4 : _ref$borderRadius,
    color = _ref.color;
  var _style = {
    stroke: color,
  };
  return /*#__PURE__*/ React.createElement(
    'svg',
    {
      viewBox: '0 0 '.concat(width, ' ').concat(height),
      style: color && _style,
    },
    /*#__PURE__*/ React.createElement('rect', {
      x: '0',
      y: '0',
      width: '100%',
      height: '100%',
      rx: borderRadius,
      ry: borderRadius,
      pathLength: '10',
    }),
  );
};

function Lines(_ref2) {
  var width = _ref2.width,
    height = _ref2.height,
    style = _ref2.style,
    _ref2$borderRadius = _ref2.borderRadius,
    borderRadius = _ref2$borderRadius === void 0 ? 4 : _ref2$borderRadius,
    color = _ref2.color;

  var _width = width || style.width;

  var _height = height || style.height;

  var SvgRects = [0, 1, 2, 3, 4, 5].map(function (k) {
    return /*#__PURE__*/ React.createElement(SvgRect, {
      key: k.toString(),
      width: _width,
      height: _height,
      borderRadius: borderRadius,
      color: color,
    });
  });
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: '__lines',
    },
    /*#__PURE__*/ React.createElement('div', null, SvgRects),
    /*#__PURE__*/ React.createElement('div', null, SvgRects),
  );
}

export default Lines;
