// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>Flappy</h1>`;


let canvasbg = document.getElementById("bg");
let ctx = canvasbg.getContext("2d");

let imageBG = new Image();
imageBG.src = 'https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/math_flappy_bg.png';

ctx.drawImage(imageBG, 0, 0, canvasbg.width, canvasbg.height);

// image.onload=function(){
  
// };