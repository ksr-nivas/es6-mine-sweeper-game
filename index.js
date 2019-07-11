// Import stylesheets
import './style.css';
import Grid from './grid.js';

window.width = 400;
window.height = 400;
window.color = function(value){
  return `rgb(${value}, ${value}, ${value})`;
}

const canvas = document.querySelector("#screen");
canvas.setAttribute('width', width);
canvas.setAttribute('height', height);
const ctx = canvas.getContext("2d");

let grid = new Grid(10, 10);

function update(){
    ctx.fillStyle = color(210);
    ctx.fillRect(0,0,width,height);

    grid.draw(ctx);

    requestAnimationFrame(update);
}

update();

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Mine Sweeper</h1>`;