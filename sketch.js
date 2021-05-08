const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 40, 40);
  box2 = new Box(600, 140, 40, 40);
  box3 = new Box(600, 180, 40, 40);
  box4 = new Box(600, 220, 40, 40);
  box5 = new Box(600, 260, 40, 40);
  box6 = new Box(600, 300, 40, 40);
  box7 = new Box(600, 60, 40, 40);
  box8 = new Box(900, 100, 40, 40);
  box9 = new Box(900, 60, 40, 40);
  box10 = new Box(900, 140, 40, 40);
  box11 = new Box(900, 180, 40, 40);
  box12 = new Box(900, 220, 40, 40);
  box13 = new Box(900, 260, 40, 40);
  box14 = new Box(900, 300, 40, 40);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display()
  box14.display()

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
