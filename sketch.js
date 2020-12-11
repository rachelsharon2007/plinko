const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle =[];
//var plinkos =[];
var divisions =[];
var divisionsHeight =300;

//function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
//}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  
  }


function draw() {
  Engine.update(engine);
  background("black");  
  for(var k = 0; k <= width; k= k+80){
    divisions.push(new Divisons (k,height-divisionsHeight/2,10,divisionsHeight));
  }

  particle.display();
  divisions.display();
  drawSprites();
}