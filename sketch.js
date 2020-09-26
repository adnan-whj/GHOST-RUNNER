var tower;
var tower1;
var img,door;
var doorgroup;
var climber,climbermg,climbergroup;
var ghost,ghostimg;
var invblock,invgroup;

var gamestate = "play";
function preload(){
  tower1=loadImage("tower.png");
  img=loadImage("door.png");
  climberimg=loadImage("climber.png");
  ghostimg=loadImage("ghost-standing.png");
}
function setup(){
  createCanvas(600,600);
  
  
  tower = createSprite(300,300);
  tower.addImage("tower",tower1);
  tower.velocityY=1;
  invgroup=createGroup();
  doorgroup=createGroup();
  climbergroup=createGroup();
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostimg);
  ghost.scale=0.3;
  
}
function draw(){
  background("white");
  if (gamestate==="play"){
  if (tower.y>400){
    tower.y=300;}
  if(keyDown("space")){
    ghost.velocityY=-5;
  
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  if (keyDown("left_arrow")){
    ghost.x=ghost.x-3;}
  if (keyDown("right_arrow")){
    ghost.x=ghost.x+3;}
  
  if (climbergroup.isTouching(ghost)){
    ghost.velocityY=0;}
   if (invgroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
   gamestate="end";
   }
spawndoors();  
drawSprites();
    
  }
if (gamestate==="end"){
  
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("GAME OVER",230,250);}
}
function spawndoors(){
   if(frameCount % 240 === 0){
    door=createSprite(200,-50);
    door.addImage("door",img);
     
     invblock=createSprite(200,15);
    // invblock.width=climber.width;
     invblock.height=2;
     
     
   climber=createSprite(100,10);
   climber.addImage("climber",climberimg);
     
    door.velocityY=1;
     door.x=Math.round(random(120,400));
     invblock.x=door.x;
     invblock.velocityY=1;
     invblock.lifetime=600;
     invgroup.add(invblock);
     ghost.depth=door.depth;
     ghost.depth=ghost.depth+1;
     
     climber.velocityY=1;
     climber.lifetime=600;
     climber.x=Math.round(random(30,500));
     climbergroup.add(climber);
     
     door.lifetime=600;
     doorgroup.add(door);
   }
}