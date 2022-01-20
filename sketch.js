const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine, myWorld;
var spaceShip, spaceShipImg;
var playerShip, playerShipImg;
var mySentry,  myBullet;
var bullets = [];
var i = 0;
var bulletImg
var myBullet
var life = 3; 
var won = false;
function preload()
{
  spaceShipImg = loadImage("./assets/spaceship.png");
  playerShipImg = loadImage("./assets/heroplane.png");
  bulletImg = loadImage('./assets/laser.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  spaceShip = createSprite(100,height-200)
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;

  playerShip = createSprite(width-200,100);
  playerShip.addImage(playerShipImg);
  playerShip.scale = 0.25;

  mySentry = new Sentry(spaceShip.x + 150, spaceShip.y, 30, 30)
  
}

function draw() {
  background(112,112,112);  
  Engine.update(myEngine);
  
  drawSprites();

  mySentry.display();
  
  //fill("white");
  arc(mySentry.x, mySentry.y - 15, mySentry.w, mySentry.h + 15, 57 * Math.PI , 115 * Math.PI);

  
  if(bulletTouch(playerShip,myBullet))
  {
    myBullet.x =width;
    life -= 1
   // console.log("dab")
  }
  if(bulletTouch(playerShip,spaceShip))
  {
    spaceShip.visible= false;
    World.remove(myWorld,mySentry);
    won = true;
    //mySentry= null;
  }
 if(won)
 {
  youWon()
 }
 if(life===0)
 {
   youLost();
 }
  createBullets()
  keyReleased();
  fill("red");
  text("Lives: "+life,100,100)
}


function keyReleased()
{
  if(keyCode === LEFT_ARROW)
  {
    playerShip.x -= 2
  }
  if(keyCode === RIGHT_ARROW)
  {
    playerShip.x += 2
  }
  if(keyCode === UP_ARROW)
  {
    playerShip.y -= 2
  }
  if(keyCode === DOWN_ARROW)
  {
    playerShip.y += 2
  }
}

function createBullets() {
  if(!won){
  if (frameCount % 50 === 0) {
    myBullet = createSprite(mySentry.x, mySentry.y)
    myBullet.addImage(bulletImg)
    myBullet.scale = 0.05
    var angle =  random(270, 360)
    myBullet.addSpeed(10,angle)
  }
}
 
}

function bulletTouch(sprite,sprite2)
{
  if(myBullet!=null)
  {

    var d = dist(sprite.position.x, sprite.position.y, sprite2.position.x,sprite2.position.y)
    if(d<=80)
    {
      return true;
    }
    else{
      return false;
    }
  }
 
}
function youWon()
{
  swal({
  title: "You Won",
      text: "You defeated Darth Vader",
      
      confirmButtonText: "Ok",
    },
    
    function(isConfirm)
           {
                if(isConfirm)
                {
                    location.reload();
                }
           }
           );
}

function youLost()
{
  swal({
    title: "You Lost :(",
        text: "You were defeated by Darth Vader",
        
        confirmButtonText: "Ok",
      },
      
      function(isConfirm)
             {
                  if(isConfirm)
                  {
                      location.reload();
                  }
             }
             );
}