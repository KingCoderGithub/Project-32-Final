const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, tower, Matter;


var ballob, blowerob, blowermouthob;
var button;


function setup() {
  createCanvas(500,500);

  ballob = new Ball(width / 2 + 80, height/2 - 80, 80, 80);
  blowerob = new Blower(width/2-50, height/2+50, 150, 20); 
  blowermouth = new Blowermouth(width/2 + 70, height/2 + 20, 100, 90);

  

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow)

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  ballob.display();
  blowerob.display();
  blowermouthob.display();
  
  drawSprites();

}
function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
}