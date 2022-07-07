import React from 'react';
import { Button } from 'antd';
import { LinesAnimation } from '@sqdl-ui-components/components';

import './index.less';

const MyButton = (props) => {
  return <button {...props}>{props.children}</button>;
};

const gradientColors = [
  ['#44e513', '#dffb2a'],
  ['#fd0b60', '#fc4ae4'],
  ['#FF8513', '#FF5539'],
];

function ButtonStyle() {
  return (
    <div className="warper">
      {/* 清除默认颜色，自定义发光颜色 */}
      <LinesAnimation type="none" color="#1890ff">
        <Button block type="primary" size="large">
          Antd Button
        </Button>
      </LinesAnimation>
      {/* 默认样式 */}
      <LinesAnimation>
        <button style={{ width: '100%', height: 48 }} type="button">
          Button 2
        </button>
      </LinesAnimation>
      {/* 内置渐变 蓝->绿 */}
      <LinesAnimation type="gradient">
        <button style={{ width: '100%', height: 48 }}>
          Button <span>3</span>
        </button>
      </LinesAnimation>
      {gradientColors.map((color, index) => {
        const bgColor = `linear-gradient(105.23deg, ${color[0]} 33.35%, ${color[1]} 115.77%)`;
        const _style = {
          width: '100%',
          height: 48,
          background: bgColor,
        };
        return (
          <LinesAnimation type="none" color={color[0]} key={color[0]}>
            <MyButton className="my-button" style={_style}>
              Button {index + 4}
            </MyButton>
          </LinesAnimation>
        );
      })}
      {/* 非按钮元素 */}
      <LinesAnimation type="none" active color="#bf03bf">
        <div
          style={{
            width: '100%',
            height: 60,
            lineHeight: '60px',
            background: 'purple',
            borderRadius: 4,
            color: '#fff',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          非按钮元素
        </div>
      </LinesAnimation>
    </div>
  );
}

export default ButtonStyle;
