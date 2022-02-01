const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine, box, box2;

function setup() {
    createCanvas(400,400)

    engine = Engine.create();
    world = engine.world;

    var options = {
        restitution: 0.95,
        isStatic: true
    }
    var options2 = {
        restitution: 0.95,
        isStatic: false
    }

    
    box = Bodies.rectangle(200,300,50,50,options)
    World.add(world,box)
    
    box2 = Bodies.circle(200,100,50,options2)
    World.add(world,box2)

  
}

function draw() 
{
    background(100)
    Engine.update(engine);

    rectMode(CENTER)
    rect(box.position.x,box.position.y,50,50)

    ellipseMode(CENTER)
    ellipse(box2.position.x,box2.position.y,100)
  
}

