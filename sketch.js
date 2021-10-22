var bg,bgImg;
var ron, ronImage;
var chessImg1,chessImg2,chessImg3,chessImg4,chessImg5;
var bg2,bg2Img;
var hermione,hermioneImg;
var dracoImg,dracoImg1,dracoImg2;
var chessGroup;
var lightImg,lightImg1,lightImg2;

var STAGE0 = 0;
var STAGE1 = 1;
var STAGE2 = 2;
var STAGE3 = 3;
var gameState = 0;

var score = 0;

function preload(){
bgImg = loadImage("bg.jpg");
ronImage = loadImage("ron.png");
chessImg1 = loadImage("Chess.png");
chessImg2 = loadImage("Chess1.png");
chessImg3 = loadImage("Chess2.png");
chessImg4 = loadImage("Chess3.png");
chessImg5 = loadImage("chess4.png");
hermioneImg = loadImage("hermione.png");
dracoImg = loadImage("draco.png");
dracoImg1 = loadImage("draco1.png");
dracoImg2 = loadImage("draco2.png");
bg2Img = loadImage("bg2.jpg");
lightImg = loadImage("red light.png");
lightImg1 = loadImage("red light1.png");
lightImg2 = loadImage("red light 2.png");
}

function setup() {
    createCanvas(600,400);
    
    bg = createSprite(600,200,10,10);
    bg.x = bg.width/2;
    bg.addImage(bgImg);
    bg.scale = 1;
    bg.velocityX = -3;
  
    bg2 = createSprite(600,200,10,10);
    bg2.x = bg2.width/2;
    bg2.addImage(bg2Img);
    bg2.velocityX = -3;

    ron = createSprite(300,200);
    ron.addImage(ronImage);
    ron.scale = 0.9;
  
    hermione = createSprite(150,250);
    hermione.addImage(hermioneImg);

    chessGroup = new Group();

  }
  
  function draw() {

    background("black");
    
if(gameState === STAGE0){

      bg.visible = false;
      bg2.visible = false;
      ron.visible = false;
      hermione.visible = false;

      fill("red")
      textSize(50);
      text("ABRA KA DABRA",100,50);

      fill("yellow");
      textSize(30);
      text("STAGE1:- Beat the chess pieces",30,100);

      fill("yellow");
      textSize(30);
      text("STAGE2:- Beat Draco Malfoy",30,150);

    

      fill("grey");
      textSize(20);
      text("*Press Space to start* ",200,350);



      if(keyDown("SPACE")){
        gameState = STAGE1;
      }
}
if (gameState === STAGE1){

      background("white");

      bg.visible = true;
      ron.visible = true;
      bg2.visible = false;
      hermione.visible = false;

  score = score + Math.round(getFrameRate()/60);

  if(bg.x <250){
    bg.x = bg.width/2;
  }

var select_chess = Math.round(random(1,5));
  if (World.frameCount % 150 == 0) {
    if (select_chess == 1) {
      chess();
    } else if (select_chess == 2) {
     chess1();
    } else if (select_chess == 3) {
      chess2();
    } else if (select_chess == 4){
      chess3();
    }else {
      chess4();
    }
  }

  if(keyDown("UP_ARROW")){
    ron.velocityY = -4;
  }

  if(keyDown("DOWN_ARROW")){
    ron.velocityY = 4;
  }

  if(keyDown("RIGHT_ARROW")){
    ron.velocityX = 4;
  }

  if(keyDown("LEFT_ARROW")){
    ron.velocityX = -4;
  }
  
  if (score === 500){
  gameState=STAGE2;  
  }
}
if (gameState === STAGE2){

    background("white");

    hermione.visible = true;
    bg.visible = false;
    ron.visible = false;
    chessGroup.visible = false;
    bg2.visible = true;
    
    if(bg2.x <200){
      bg2.x = bg2.width/2;
    }

    score = score + Math.round(getFrameRate()/60);

    var select_draco = Math.round(random(1,3));
    if (World.frameCount % 50 == 0) {
      if (select_draco == 1) {
        draco();
      } else if (select_draco == 2) {
       draco1();
      } else {
        draco2();
      }
    }

if(keyDown("UP_ARROW")){
  hermione.velocityY = -4;
}

if(keyDown("DOWN_ARROW")){
  hermione.velocityY = 4;
}

if(keyDown("RIGHT_ARROW")){
  hermione.velocityX = 4;
}

if(keyDown("LEFT_ARROW")){
  hermione.velocityX = -4;
}

if (score === 1000){
  gameState=STAGE3;  
  }

}

if (gameState === STAGE3){

  background("black");
  
  bg.visible = false;
  bg2.visible = false;
  ron.visible = false;
  hermione.visible = false;
  
  textSize(50);
  fill("red");
  text("GAME OVER!!!!",100,100);

  fill("yellow");
  textSize(30);
  text("Chess Pieces & ",80,160);

  fill("yellow");
  textSize(30);
  text("Draco Malfoy",250,200);

  fill("yellow");
  textSize(30);
  text("Defeated",350,250);

  textSize(15);
  fill("blue");
  text("Thanks for playing :) ",450,350);
  }

  drawSprites();

  strokeWeight(10);
  fill("blue")
  textSize(20)
  text("Score:" + score,10,50);
}
  

  function chess(){
  var chess = createSprite(Math.round(random(600, 370)),Math.round(random(50,350)), 10, 10);
  chess.addImage(chessImg1);
  chess.velocityX = -3;
  //chess.velocityY = -3;
  chess.lifetime = 150;
  chess.scale = 0.5;
  //chess.debug = true;
  chess.setCollider("rectangle",0,0,30,30);
  chessGroup.add(chess);

}
function chess1(){
  var chess1 = createSprite(Math.round(random(20, 370)),Math.round(random(50,350)), 10, 10);
  chess1.addImage(chessImg2);
  chess1.velocityX = 3;
 //chess1.velocityY = -3;
 chess1.lifetime = 150;
 chess1.scale = 0.5;
 //chess1.debug = true;
 chess1.setCollider("rectangle",0,0,30,30);
 chessGroup.add(chess1);
}
function chess2(){
  var chess2 = createSprite(Math.round(random(20, 370)),Math.round(random(50,750)), 10, 10);
  chess2.addImage(chessImg3);
  //chess2.velocityX = 3;
  chess2.velocityY = -3;
  chess2.lifetime = 150;
  chess2.scale = 0.5;
  //chess2.debug = true;
  chess2.setCollider("rectangle",0,0,30,30);
  chessGroup.add(chess2);
}
function chess3(){
  var chess3 = createSprite(Math.round(random(20, 370)),Math.round(random(50,350)), 10, 10);
  chess3.addImage(chessImg4); 
  chess3.velocityX = 3;
  //chess3.velocityY = -3;
  chess3.lifetime = 150;
  chess3.scale = 0.5;
  //chess3.debug = true;
  chess3.setCollider("rectangle",0,0,30,30);
  chessGroup.add(chess3);
}
function chess4(){
  var chess4 = createSprite(Math.round(random(20, 370)),Math.round(random(50,750)), 10, 10);
  chess4.addImage(chessImg5);
  //chess4.velocityX = 3;
  chess4.velocityY = -3;
  chess4.lifetime = 150;
  chess4.scale = 0.5;
  //chess4.debug = true;
  chess4.setCollider("rectangle",0,0,50,50);
  chessGroup.add(chess4);
}
function draco(){
  
  var draco = createSprite(500,Math.round(random(50,350)));
  draco.addImage(dracoImg);
  //draco.velocityX=-3;
  draco.lifetime = 50;

  var light = createSprite(draco.x -15, draco.y +5);
  light.addImage(lightImg);
  light.velocityX=-7;
  light.lifetime = 50;
  
}
function draco1(){
  var draco1 = createSprite(500,Math.round(random(50,350)));
  draco1.addImage(dracoImg1);
  //draco1.velocityX=-3;
  draco1.lifetime = 50;

  var light1 = createSprite(draco1.x -15, draco1.y);
  light1.addImage(lightImg1);
  light1.velocityX=-7;
  light1.lifetime = 50;

}
function draco2(){
  var draco2 = createSprite(500,Math.round(random(50,350)));
  draco2.addImage(dracoImg2);
  //draco2.velocityX=-3;
  draco2.lifetime = 50;

  var light1 = createSprite(draco2.x -15, draco2.y);
  light1.addImage(lightImg2);
  light1.velocityX=-7;
  light1.lifetime = 50;

}
