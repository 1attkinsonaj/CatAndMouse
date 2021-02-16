var cat, catImage1, catImage2, catImage3, catImage4;
var jerry, jerryImage1, jerryImage2,jerryImage3,jerryImage4;
var garden, gardenImage;



function preload() {
    //load the images here
    
gardenImage = loadImage("images/garden.png");

catImage1 = loadImage("images/cat1.png")
catImage2 = loadImage("images/cat2.png");
catImage3 = loadImage("images/cat3.png");
catImage4 = loadImage("images/cat4.png");


jerryImage1 = loadImage("images/mouse1.png");
jerryImage2 = loadImage("images/mouse2.png");
jerryImage3 = loadImage("images/mouse3.png");
jerryImage4 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    cat = createSprite(900,650);
    jerry = createSprite(200,650);
 
    

    cat.addImage(catImage1);
   jerry.addImage(jerryImage1);
    garden.addImage(gardenImage);
    cat.scale=0.15;
    jerry.scale=0.1
    garden.scale=1.3
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide




    if(spriteTouching(cat,jerry)){
      cat.addAnimation("catLastImage", catImage3);
      cat.changeAnimation("catLastImage", catImage3);
      jerry.addAnimation("mouseInspect",jerryImage4);
      jerry.changeAnimation("mouseInspect");
      cat.velocityX=0;
      jerry.velocityX=0;
    }
      else{
        CheckKeyPressed();
      }
    

    drawSprites();
}


function CheckKeyPressed(){
  if(keyCode === LEFT_ARROW){
    cat.velocityX =-5;
    cat.addAnimation ("catRunning", catImage2);
    cat.changeAnimation("catRunning");
    jerry.addAnimation("mouseWaving", jerryImage2);
    jerry.changeAnimation("mouseWaving");
  }


  //For moving and changing animation write code here


}


function spriteTouching(object1,object2){
    if(object1.x-object2.x<=object1.width/2+object2.width/2
      && object2.x-object1.x<=object1.width/2+object2.width/2
      && object1.y -object2.y<= object1.height/2+object2.height/2
      && object2.y -object1.y<= object1.height/2+object2.height/2){
        return true;
    }
    else{
      return false;
    }
  }
