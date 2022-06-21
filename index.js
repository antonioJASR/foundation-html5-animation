// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const canvas = document.getElementById('canvas');

canvas.addEventListener('mousedown', () => {
  appDiv.innerHTML = 'Mouse down';
});

canvas.addEventListener('mouseup', () => {
  appDiv.innerHTML = 'Mouse UP';
});
