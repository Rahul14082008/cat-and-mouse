var tom,tomimg1,tomimg2,tomimg3,tomimg4;
var mouse,mouseimg1,mouseimg2,mouseimg3,mouseimg4;
var garden,gardenimg
function preload() {
    tomimg1=loadAnimation("images/cat1.png");
    tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomimg4=loadAnimation("images/cat4.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg4=loadAnimation("images/mouse4.png");
    gardenimg=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,500);
    //create tom and jerry sprites here
tom=createSprite(870,300);
tom.addAnimation("tomsitting",tomimg1);
tom.scale=0.2;
mouse=createSprite(200,300);
mouse.scale=0.1;
mouse.addAnimation("mousestanding",mouseimg1);
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-mouse.x<tom.width/2+mouse.width/2){
    tom.velocityX= 0;
    tom.addAnimation("tomlastimage",tomimg3);
    tom.changeAnimation("tomlastimage");
tom.scale=0.2
    mouse.addAnimation("mouselastimage",mouseimg3);
    mouse.changeAnimation("mouselastimage");
    mouse.scale=0.1
}
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-2;
    tom.addAnimation("tomrunning",tomimg2);
    tom.changeAnimation("tomrunning");

    mouse.addAnimation("mousrunning",mouseimg2);
    mouse.changeAnimation("mouserunning");
  //For moving and changing animation write code here

}
}
