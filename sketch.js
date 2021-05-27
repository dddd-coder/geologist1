
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
	world = engine.world;

	
	ground1= new Ground(600,680,1200,20)
	rubber1= new Rubber(300,100,30)
	stone1= new Stone(100,100,100,100) 
	hammer1=new Hammer(500,100,100,30)
	sand1=new Sand(500,100,10,10)
	sand2=new Sand(510,100,10,10)
	sand3=new Sand(520,100,10,10)
	sand4=new Sand(540,100,10,10)
	sand5=new Sand(550,100,10,10)
	sand6=new Sand(560,100,10,10)
	sand7=new Sand(570,100,10,10)
	iron1=new Iron(600,100,70,70)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  drawSprites();


  ground1.display()
  stone1.display()
  rubber1.display()
 hammer1.display()
 sand1.display()
 sand2.display()
 sand3.display()
 sand4.display()
 sand5.display()
 sand6.display()
 sand7.display()
 iron1.display()
 
}



