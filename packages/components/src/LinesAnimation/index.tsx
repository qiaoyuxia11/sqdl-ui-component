import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Lines from './lines';
import './index.less';

/*
 * 按钮效果动画
 * children, <ReactElement|String>, 内嵌元素
 * color?, <String>, 光线颜色
 * type?, <String>, 光线类型 'none|gradient|transparent'
 * hover? = true, <Boolean>, 'true'时，鼠标移入时显示光线
 * active? = false, <Boolean>, 'true'时，显示光线
 */
const LinesAnimation = ({ children, color, type, hover = true, active = false }) => {
  return <div className="animation-button-lines">光效组件</div>;
};

export default LinesAnimation;
