import mul from './ts/mul.ts';
import './css/style.css';
import './css/title.less';
import { title } from 'process';

console.log(mul(20, 30));
console.log('Hello World');

const titleEl = document.createElement('div');
titleEl.className = 'title';
titleEl.innerHTML = 'Hello Vite';
document.body.append(titleEl);
