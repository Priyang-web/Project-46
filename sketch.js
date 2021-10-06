var player
var playerImg
var terror;
var tImg;
var bg;
var bgImg;
var blockImg;
var ground;
function preload(){
 bgImg = loadImage("images/Background/mbg.jpg"); 
 blockImg = loadImage("images/blocks/blocks.png");
 playerImg = loadAnimation("images/Player/P1.png","images/Player/P2.png","images/Player/P3.png","images/Player/P4.png","images/Player/P5.png","images/Player/P6.png");
 tImg = loadAnimation("images/Terrorist/T-1.png","images/Terrorist/T-2.png","images/Terrorist/T-3.png","images/Terrorist/T-4.png","images/Terrorist/T-5.png","images/Terrorist/T-6.png","images/Terrorist/T-7.png")
}
function setup() {
  createCanvas(1000, 600);

  ground = createSprite(displayWidth+700,580,displayWidth*5,20);
  ground.visible = false;
  player = createSprite(500,300);
  // player.debug = true;
  player.setCollider("rectangle",0,0,50,65);
  player.addAnimation("player",playerImg);
  player.scale = 2.5;
  terror = createSprite(400,400,);
  terror.addAnimation("t1",tImg);
  
}

function draw() {
  background(0);
  image(bgImg,-displayWidth,-150,displayWidth*5,displayHeight); 
  player.x = camera.x
  if(keyDown(RIGHT_ARROW)){
    camera.x+=20;
  }

  if(keyDown("space") && player.y>=displayHeight/2+93){
    player.velocityY-=13;
  }
  player.velocityY = player.velocityY+0.5;
  player.collide(ground);

  Block();

  drawSprites();
}
function Block(){
 if(frameCount%50===0){
   block = createSprite(camera.x+200,300,50,50);
   block.addImage("blocks",blockImg);
   block.scale =  0.3;
 }
}