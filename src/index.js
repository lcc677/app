import helloWrold from './hello';
import logSvg from './assets/log.svg';
import backGround from './assets/background.jpeg';
import hello from './assets/hello.txt';
import abc from './assets/abc.jpg';
import './style.css';
import './style.less';
// import getStrings from './dynamic-import'

helloWrold();

const logImg = document.createElement('img');
logImg.style.cssText = 'width:200px;height:200px';
logImg.src = logSvg;
document.body.appendChild(logImg);

const backGroundImg = document.createElement('img');
backGroundImg.style.cssText = 'width:400px;height:400px;';
backGroundImg.src = backGround;
document.body.appendChild(backGroundImg);

const helloDiv = document.createElement('div');
helloDiv.style.cssText = 'width:200px;background:red;height:200px';
helloDiv.classList.add('hello');
helloDiv.classList.add('bg-im');
helloDiv.innerHTML = hello;
document.body.appendChild(helloDiv);

const abcImg = document.createElement('img');
abcImg.style.cssText = 'width:400px;height:400px';
abcImg.src = abc;
document.body.appendChild(abcImg);

document.body.classList.add('background-color');

const bt = document.createElement('button');
bt.textContent = '点击我';
bt.addEventListener('click', () => {
  // getStrings()
});
document.body.appendChild(bt);
