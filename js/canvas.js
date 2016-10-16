const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

window.canvas = canvas;
window.ctx = ctx;

canvas.width = screen.width;
canvas.height = screen.height;

document.getElementById('wrapper').appendChild(canvas);

export default canvas
