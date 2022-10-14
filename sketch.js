var canvas
var backgroungImg
var planet
var planetImg
var menuImg
var astronaut
var astroautIdle
var astronautRun
var angle

function preload(){
backgroundImg=loadImage("pixel art space.png");
planetImg=loadImage("planet.png");
astronautIdle=loadAnimation("Astronaut_Idle1.png" , "Astronaut_Idle2.png" , "Astronaut_Idle3.png" , "Astronaut_Idle4.png" , "Astronaut_Idle5.png" , "Astronaut_Idle6.png");
astronautIdle.playing=true
astronautRun=loadAnimation("Astronaut_Run1.png","Astronaut_Run2.png","Astronaut_Run3.png","Astronaut_Run4.png","Astronaut_Run5.png","Astronaut_Run6.png");
}

function setup(){
canvas=createCanvas(windowWidth,windowHeight);
planet=createSprite(windowWidth/2-29,windowHeight/2+1200,100,100);
planet.scale=10
planet.addImage(planetImg);
astronautIdle.frameDelay=20
astronaut=createSprite(300,300,50,50);
astronaut.addAnimation("astronaut", astronautRun);
astronaut.addAnimation("astronaut", astronautIdle);
astronaut.scale=3
//astronautRun.frameDelay=5
}

 function draw(){

  background(backgroundImg);
  if(keyDown("right_arrow")){
    planet.rotate(PI,5);
    astronaut.changeAnimation("astronaut",astronautRun);
  }

  drawSprites();
}

//else{
  //astronaut.velocityX=0
  //astronaut.changeAnimation("astronaut",astronautIdle)
//}