var a,b

function setup() {
  createCanvas(800,400);
  a = createSprite(400,0,50,80);
  b = createSprite(400, 500, 50, 80);
  a.shapeColor = "purple";
  b.shapeColor = "purple"
  a.velocityY = 5;
  b.velocityY = -5;

  a.debug = true
  b.debug = true
}

function draw() {
  background(0); 
  
  //a.x = World.mouseX;
  //a.y = World.mouseY;

  if(a.x - b.x < a.width/2 + b.width/2 && 
    b.x - a.x < b.width/2 + b.width/2)
     {
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
      }
    if (a.y - b.y < a.height/2 + b.height/2 &&
      b.y - a.y < b.height/2 + a.height/2){
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);   
     }

  drawSprites();
}