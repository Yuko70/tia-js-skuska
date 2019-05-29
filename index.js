// Import stylesheets
import './style.css';


let cvsgame = document.getElementById("game");
let ctxG = cvsgame.getContext("2d");

let canvasbg = document.getElementById("bg");
let ctx = canvasbg.getContext("2d");

let bird = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeDown = new Image();
let pipeMiddle= new Image();


bird.src = "https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/bird.png";
pipeUp.src = "https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/pipeUp.png";
pipeDown.src = "https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/pipeDown.png";
pipeMiddle.src = "https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/pipeMiddle.png";

let score = 0;
let space = 150;

let bX = 50;
let bY = 350; 

let running = false;
let timer = 0;

let fly = new Audio();
let boom = new Audio();

document.onkeydown = pressedKey;

drawBG();
ready();

function drawBG() {
  
  let imageBG = new Image();
  imageBG.src = 'https://raw.githubusercontent.com/yuko70/tia-js-skuska/master/math_flappy_bg.png';
  ctx.drawImage(imageBG, 0, 0, canvasbg.width, canvasbg.height);
}

function ready() {
  ctx.font = "30px Arial";
  ctx.fillText("Press Enter to start", 80, 350); 
}

function pressedKey(ev) {
  let event = window.event ? window.event : ev;

  if (event.keyCode == '38') {
    // console.log("up"); 
    if (bY >= 10) {
      bY -= 10;
    }

  }
  else if (event.keyCode == '40') {
    // console.log("down"); 
    if (bY <= 700-36) {
      bY += 10;
    }
  }
  else if (event.keyCode == '13' && running === false) {
    // console.log("enter");
    drawBG();
    start();
  }
}


function start() {
  running = true;
  timer = new Date().getTime();
  score = 0;
  requestAnimationFrame(update);
}
let i = 0;
function update(){
  if (new Date().getTime() - timer > 100) {
    timer = new Date().getTime();
    i += 1;
    console.log(i);
  }

  ctxG.clearRect(0, 0, cvsgame.width, cvsgame.height);

  ctxG.font = "30px Arial";
  ctxG.fillText("SCORE: " + score, 10, 35);

  ctxG.drawImage(bird, bX, bY);



  if (running) {
    requestAnimationFrame(update);
  }
  
    
}