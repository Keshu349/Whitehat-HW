const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
var box1;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var box_options ={
       restitution : 2
    }

    var box1_options ={
        restitution : 1
    }

    var ball_options ={
        restitution : 2
    }


    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    box = Bodies.rectangle(200,300,50,50,box_options);
    World.add(world,box);

    box1 = Bodies.rectangle(100,200,50,50,box1_options);
    World.add(world,box1);

    ball = Bodies.circle(150,200,50,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,50,50);
    rect(box1.position.x,box1.position.y,50,50);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,50,50);
}