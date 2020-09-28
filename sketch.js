var wall1,wall2,wi,player;
var v1,v2,v3,v4,v1i,v2i,v3i,v4i;
var antibodyImg, coronaImg;
var nobody;
function preload(){
  wi = loadImage("tissue.png");
  v1i= loadImage("v1.png");
  v2i= loadImage("v3.png");
  v3i= loadImage("v4.png");
  antibodyImg= loadImage("antibody.png");
  coronaImg= loadImage("corona.png");
}
function setup() {
  createCanvas(displayWidth-30,displayHeight-150);
  wall1 = createSprite(displayWidth/2, 0, displayWidth, 150);
  wall2 = createSprite(displayWidth/2, displayHeight-150, displayWidth, 150);
  player = createSprite(camera.position.x+500, displayHeight/2+100,50,50);
  player.addImage(antibodyImg);
  player.scale= 0.2
 
  
  nobody= createSprite(800, 400, 20,20)
  nobody.addImage(coronaImg);
  nobody.scale = 1
  v1= createSprite(400,100,30,30);
  v1.addImage(v1i);
  v1.scale= 0.2
 
  v2= createSprite(400,300,30,30);
  v2.addImage(v2i);
  v2.scale= 0.1
  
  v3= createSprite(400,500,30,30);
  v3.addImage(v3i);
  v3.scale= 0.3
}
 
function keyPressed(){
  if (keyCode === UP_ARROW) {
    player.position.x = player.position.x-10
  }
  if (keyCode === DOWN_ARROW) {
    player.position.x = player.position.x+10
  }
  if (keyCode === RIGHT_ARROW) {
  camera.position.x = camera.position.x+10;
 }
 if (keyCode === LEFT_ARROW) {
  camera.position.x = camera.position.x-10;
}
  }
  


function draw() {

player.collide(wall2);
player.collide(wall1);
player.collide(nobody);
/*player.collide(v1);
player.collide(v4);
player.collide(v3);
player.collide(v4);*/

player.position.x = camera.position.x;
console.log(camera.position.x);
  background(rgb(255,182,193));
  wall1.addImage(wi);
  wall1.scale = 2;
  wall2.addImage(wi);
  wall2.scale = 2;  
  drawSprites();
}