var a,b;

function setup() {
  createCanvas(1200,800);

  a = createSprite(200,50,50,100);
  b = createSprite(200,750,100,50);

  a.velocityY=4;
  b.velocityY=-7;
}

function draw() {
  background(0,0,0);  

  if(bounce(a,b));

  drawSprites();
}
