const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body1;
var body2;
var body3;
var paper;

function preload()
{	
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	boxSprite=createSprite(width/2, 650, 200,20);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	boxBody = ({isStatic:true});
	World.add(world, boxBody);

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
   
	body1=new Box_tree(390,650,200,20);
	body2=new Box_tree(280,610,20,100);
	body3=new Box_tree(500,610,20,100);
    paper=new Paper(150,600,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
  body1.display();
  body2.display();
  body3.display();
  paper.display();
  rect(ground.position.x,ground.position.y,width,10)
}
function keypressed(){
   if (keycode===UP_ARROW){
	   Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
   }	
}



