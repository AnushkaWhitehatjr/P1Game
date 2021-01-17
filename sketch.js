
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var scubaD, scubaDImg;
var bg, bgImg;
var world, engine;

function preload()
{
	scubaDImg = loadAnimation("Images/Scuba/scuba1.png", "Images/Scuba/scuba2.png", "Images/Scuba/scuba3.png", 
	"Images/Scuba/scuba4.png", "Images/Scuba/scuba5.png", "Images/Scuba/scuba6.png");

	bgImg = loadImage("Images/bg.jpg");
}

function setup() {
	createCanvas(1725, 820);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	scubaD = createSprite(170,400,50,50);
	scubaD.addAnimation("scubaAanimation", scubaDImg);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  drawSprites();
 
}



