
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola, quadrado, quadrado1, plano;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
     var plano_options={
         isStatic:true

	 }


 
   var bola_options = {
    restitution: 0.95,
    frictionAir: 0.1

  }

  var quadrado_options={
    restitution: 0.7,
    friction: 0.01,
  frictionAir: 0.1

  }
  
  var quadrado1_options={
  restitution: 0.01,
  friction: 1,
  frictionAir: 0.3

  }

 plano = Bodies.rectangle(1,690,2000,10,plano_options);
 World.add(world,plano);
  
  
 
  bola = Bodies.circle(150, 10, 20, bola_options);
  World.add(world,bola);
    
  quadrado = Bodies.rectangle(110,50,10,10, quadrado_options);
  World.add(world,quadrado);
  
  quadrado1 = Bodies.rectangle(350,50,10,10, quadrado1_options);
  World.add(world,quadrado1);
  
  
  	
	rectMode(CENTER)
  ellipseMode(RADIUS);
	Engine.run(engine);
	
	
  
  
 
   }
    
	

	

  



function draw() {
  

  background("green");
  Engine.update(engine);
  rect(quadrado1.position.x,quadrado1.position.y,10,10);
  rect(quadrado.position.x,quadrado.position.y,10,10);
  
  ellipse(bola.position.x,bola.position.y,20,20);
 
 

 
}


