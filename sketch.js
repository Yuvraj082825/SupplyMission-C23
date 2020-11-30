var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1=createSprite(width/2, height-50, 200,20);
	rect1.shapeColor="red"

	rect2=createSprite(310, height-90, 20,100);
	rect2.shapeColor="red"

	rect3=createSprite(490, height-90, 20,100);
	rect3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	var package_options ={
		isStatic:true
		//restitution:0.6
		
	}
	 
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);

	var ground_options={
		isStatic:true
	}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10,ground_options );
	World.add(world, ground);
	 
	rect2 = Bodies.rectangle(390, 650,ground_options );
	World.add(world, rect1);
	 
	rect1= Bodies.rectangle(width/2, 650,ground_options );
	World.add(world, rect2);
	 
	rect3= Bodies.rectangle(410, 650,ground_options );
	 World.add(world, rect3);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("a")) 
 {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Matter.Body.setStatic(packageBody, false);
	packageBody.restitution=0.5
  }
}



