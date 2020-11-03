var survivalTime=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400, 350, 900, 10);
  
  

  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background(255);
  
//monkey.debug = true;
  console.log(monkey.y);
  if(ground.x < 0 ){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  

  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
    score = score + Math.round(getFrameRate()/60);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ survivalTime, 100, 50);

  
  
  
  obstacle();
  banana();
  drawSprites();
}
function banana(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
    banana.lifetime = 200;

    bananaGroup.add(banana);
  }
}
function obstacle(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(600, 295, 40, 40);
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.25;
    obstacle.velocityX = -3;
    
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
    
  }
}






