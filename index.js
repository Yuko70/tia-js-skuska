// Import stylesheets
import './style.css';


let cvsgame = document.getElementById("game");
let ctxG = cvsgame.getContext("2d");

let bird = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeDown = new Image();
let pipeMiddle= new Image();


start();

function start() {

  let canvasbg = document.getElementById("bg");
  let ctx = canvasbg.getContext("2d");
  let imageBG = new Image();
  imageBG.src = 'https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/math_flappy_bg.png';
  ctx.drawImage(imageBG, 0, 0, canvasbg.width, canvasbg.height);




}