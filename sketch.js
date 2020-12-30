
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,stone;
var mango1;
var boy,boyImage
var launch
var mangoBodyPosition,stoneBodyPosition
function preload()
{
boyImage = loadImage("Plucking mangoes/boy.png");

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	mango1 = new Mango(900,140,50);
	ground = new Ground(600,height,1200,20)
 
   stone = new Stone(200,290,10,10);
   stone.scale = 0.2;
  boy = createSprite(310,340,20,20);
  boy.addImage("boy",boyImage);
  boy.scale = 0.099
tree = new Tree(900,200,20,20);
launch = new Launch(stone.body,{x:258,y:284});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,230,230);
  mango1.display();
 ground.display();
stone.display();
tree.display();
launch.display();
mango1.depth=tree.depth+1
detectCollision(stone.body,mango1.body);
  drawSprites();
 //console.log(mouseY)
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
 launch.fly();
  
  }

  function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition(stone.body,{x: 258, y: 284});
    launch.attach();
  }

  }

  function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPositiony.y);

  if(distance>lmango.radius,lstone.radius){
    Matter.Body.setStatic(lmango.body,false);
  }





  }