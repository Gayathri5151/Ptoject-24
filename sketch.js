
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
var dustbinObj,paperObject,groundObject
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

rectMODE(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  dustbinObj=new dustbinObj(1200,650);
  paperObject=new paper(200,450,40);
  groundObject=new groundObject(widt/2,670,width,20)
  
  var render=Render.create({element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false }})

  Engine.run(engine);
          
	//Render.run(render); 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  keyPressed();
  drawSprites();
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
   { Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); }
}





