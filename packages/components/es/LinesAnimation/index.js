import React from 'react';
import classNames from 'classnames';
import Lines from './lines';
import './index.less';

var LinesAnimation = function LinesAnimation(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'gradient' : _ref$type;
  var linesColor = 'red';
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(Lines, {
      key: new Date().getTime().toString(),
      width: 100,
      height: 100,
      borderRadius: 5,
      color: type === 'none' ? linesColor : undefined,
    }),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classNames('guag', 'btn'),
      },
      '\u5149\u6548',
    ),
  );
};

export default LinesAnimation;
