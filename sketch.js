const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var ground1
var ground2
var OurPlayer
var computorPlayer
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
 ground1=new ComputorBase(1000,random(450,height-300),200,115)
 ground2=new PlayerBase(width-1000,random(450,height-300),200,115)
 OurPlayer=new Player(ground2.x, ground2.y-140, 50, 180)
 computorPlayer=new Player(ground1.x, ground1.y-140, 50, 180)
 }

function draw() {

  background(180);

  Engine.update(engine);
ground1.display()
ground2.display()
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
OurPlayer.display()
computorPlayer.display()
   //Display Playerbase and computer base 


   //display Player and computerplayer


}
