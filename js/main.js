import 'babel-polyfill';
import { test } from './vars';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

document.getElementById('output').innerHTML = `test var value = ${test}! <br/>`;
document.getElementById('output').appendChild(canvas);

const img = new Image();

img.src = 'http://www.gat-blac.com/EN/images/mati.jpg';

img.onload = () => ctx.drawImage(img, 0, 0);

const gradient=ctx.createLinearGradient(0,0,canvas.width,0);

gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");

ctx.font="20px Georgia";
ctx.fillText("Texto en canvas",20,300);
ctx.font="30px Verdana";

ctx.fillStyle=gradient;
ctx.fillText("TESTI TEST",40, 350);
