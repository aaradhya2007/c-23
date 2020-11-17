const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
   
   // console.log(ground);
    box1=new Box(130,100,40,50)
    box2=new Box(100,200,50,40)

ground1=new Ground(200,390,400,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display()

    
box1.display();
box2.display();

}