var bruce, bruce_walking, walking_1, walking_2,walking_3,walking_4,walking_5,walking_6,walking_7,walking_8;
var thunder1,thunder2,thunder3,thunder4;

var thunderGroup;


function preload(){
  bruce_walking = loadAnimation("walking_1.png", "walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  thunder1 = loadImage("obstacle1.png");
  thunder2 = loadImage("obstacle2.png");
  thunder3 = loadImage("obstacle3.png");
  thunder4 = loadImage("obstacle4.png");
  
  
  
}

function setup() {
    createCanvas(1600, 1600);
    
    rectMode(CENTER);
    bruce = createSprite(400,1570);
    bruce.addAnimation("walking", bruce_walking);
    bruce.scale = 0.5;
    
    thunderGroup = new Group();
    
    
  }
  function draw() {
    background(0);
    

    
    thunders();
    
    drawSprites();
  }
  
  
  
  function thunders() {
    if(World.frameCount % 60 === 0) {
      var thunder = createSprite(300,165,10,40);
      thunder.velocityX = -6;
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand){ 
          case 1 : thunder.addImage(thunder1);
            break;
          case 2 : obstacle.addImage(thunder2);
            break;
          case 3 : obstacle.addImage(thunder3);
            break; 
          case 4 : obstacle.addImage(thunder4);
            break;
        default:
          break ;
      }
      //assign scale and lifetime to the obstacle           
      thunder.scale = 0.5;
      thunder.lifetime = 200;
      
      thunderGroup.add(thunder);
    }
  }
