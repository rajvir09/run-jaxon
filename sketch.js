var path,pathImg
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=5
}

function draw() {
  background(0);
drawSprites()
}
