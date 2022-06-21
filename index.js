// Import stylesheets
import './style.css';
import { captureTouch } from './utils.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const canvas = document.getElementById('canvas');
// const mouse = captureMouse(canvas);
const touch = captureTouch(canvas);

canvas.addEventListener('touchmove', () => {
  console.log(touch);
  appDiv.innerHTML = `x: ${touch.x}, y: ${touch.y}`;
});
