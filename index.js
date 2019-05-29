// Import stylesheets
import './style.css';


let cvsgame = document.getElementById("game");
let ctxG = cvsgame.getContext("2d");

let bird = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeDown = new Image();
let pipeMiddle= new Image();


bird.src = "https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/bird.png";
pipeUp.src = "https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/pipeUp.png";
pipeDown.src = "https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/pipeDown.png";
pipeMiddle.src = "https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/pipeMiddle.png";

// ctxG.drawImage(bird, bX, bY, 30, 30);


let score = 0;
let space = 150;

let bX = 50;
let bY = 350; 

let fly = new Audio();
let boom = new Audio();

start();

function start() {

  let canvasbg = document.getElementById("bg");
  let ctx = canvasbg.getContext("2d");
  let imageBG = new Image();
  imageBG.src = 'https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/math_flappy_bg.png';
  ctx.drawImage(imageBG, 0, 0, canvasbg.width, canvasbg.height);

  ctxG.drawImage(bird, bX, bY, 38, 26);

}