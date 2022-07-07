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

const Lines = () => <div>Lines</div>;

export default Lines;
