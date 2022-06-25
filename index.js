// Import stylesheets
import './style.css';
import { captureMouse } from './utils.js';
import { Arrow } from './arrow.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Madafaka <code>Math.atan2</code></h1>`;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const mouse = captureMouse(canvas);
const arrow = new Arrow();

arrow.x = canvas.width / 2;
arrow.y = canvas.height / 2;

function drawFrame() {
  window.requestAnimationFrame(drawFrame, canvas);
  context.clearRect(0, 0, canvas.width, canvas.height);

  const dx = mouse.x - arrow.x,
    dy = mouse.y - arrow.y;

  arrow.rotation = Math.atan2(dy, dx); // radians
  arrow.draw(context);
}

drawFrame();

function sineWave() {
  for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
    console.log(Math.sin(angle));
  }
}

sineWave();
