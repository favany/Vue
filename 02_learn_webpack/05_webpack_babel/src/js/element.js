import '../css/style.css';
import '../css/title.less';
import '../css/image.css';
// import vueImg from '../img/vue.png';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '你好啊，李银河';

// 设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = 'image-bg';

// // 设置 img 元素的 src
// const imgEl = document.createElement('img');
// imgEl.src = vueImg;

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
// document.body.appendChild(imgEl);
