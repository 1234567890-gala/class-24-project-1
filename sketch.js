
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, rubber;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1440,840);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,200,100,20);
	ground = new Ground(600,height,1700,30);
stone = new Stone(1000,600,60,60);
circle = new Circle(1200,600,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  hammer.display();
  stone.display();
  circle.display();
  ground.display();
  drawSprites();
 
}



