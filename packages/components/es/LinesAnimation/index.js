function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Lines from './lines';
import './index.less';

var LinesAnimation = function LinesAnimation(_ref) {
  var children = _ref.children,
    color = _ref.color,
    type = _ref.type,
    _ref$hover = _ref.hover,
    hover = _ref$hover === void 0 ? true : _ref$hover,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active;
  var child = React.Children.only(children);

  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    linesMod = _useState2[0],
    setLinesMod = _useState2[1];

  var buttonRef = useRef();
  var styleType = type ? 'button-'.concat(type) : 'button-transparent';
  var newChild = /*#__PURE__*/ React.cloneElement(
    child,
    {
      className: classNames(child.props.className, 'button', styleType),
      style: child.props.style,
    },
    [child.props.children, linesMod],
  );

  var play = function play(e) {
    e.target.classList.add('start');
    setTimeout(function () {
      e.target.classList.remove('start');
    }, 500);
  };

  var stop = function stop(e) {
    e.target.classList.remove('start');
  };

  useEffect(
    function () {
      if (buttonRef.current && buttonRef.current.childNodes) {
        var _current = buttonRef.current.childNodes[0];
        var clientWidth = _current.clientWidth,
          clientHeight = _current.clientHeight;
        var Style = window.getComputedStyle(_current, null);
        var borderRadius = parseInt(Style.getPropertyValue('border-radius'));
        var bgColor = Style.getPropertyValue('background-color');

        if (!bgColor.match(/^(rgb|rgba|#)/)) {
          throw new Error('Only "RGB, RGBA, #" three color formats are supported');
          return;
        }

        var linesColor = color ? color : bgColor;
        setLinesMod(
          /*#__PURE__*/ React.createElement(Lines, {
            key: new Date().getTime().toString(),
            width: clientWidth,
            height: clientHeight,
            borderRadius: borderRadius,
            color: type === 'none' ? linesColor : undefined,
          }),
        );
      }
    },
    [color, type],
  );
  useEffect(
    function () {
      if (buttonRef.current && buttonRef.current.childNodes) {
        var _current = buttonRef.current.childNodes[0];

        if (hover) {
          _current.addEventListener('mouseenter', play);

          _current.addEventListener('mouseleave', stop);
        }

        return function () {
          _current.removeEventListener('mouseenter', play);

          _current.removeEventListener('mouseleave', stop);
        };
      }
    },
    [hover],
  );
  useEffect(
    function () {
      if (buttonRef.current && buttonRef.current.childNodes && active)
        play({
          target: buttonRef.current.childNodes[0],
        });
    },
    [active],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      ref: buttonRef,
      className: 'animation-button-lines',
    },
    newChild,
  );
};

export default LinesAnimation;
