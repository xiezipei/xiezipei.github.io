import _ from 'lodash';
import './style.css';
import bg from './bg.jpg';

function component() {
    const element = document.createElement('div');

    // 创建dom元素
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // 添加class类名
    element.classList.add('hello');

    // 添加图片
    const bgImage = new Image();
    bgImage.src = bg;
    element.appendChild(bgImage);

    return element;
  }
  
  document.body.appendChild(component());