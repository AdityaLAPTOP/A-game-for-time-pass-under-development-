var drop1,dr0p2,images,bg="download.jpg";

var life=10;
var score=0;

//var a=randomNumber(3/400)
function preload(){
  images=loadImage("images.png");
//  earthImage=loadImage("earth.jpg");


  backgroundImg = loadImage("road.png.bmp");

}

function setup() {
  createCanvas(400,600);
drop1= createSprite(125, 20, 10, 50);
drop2= createSprite(020, 50, 10, 50);
drop3= createSprite(100, 100, 10, 50);
drop4= createSprite(200, 150, 10, 50);
drop5= createSprite(300, 180, 10, 50);
drop6= createSprite(380, 260, 10, 50);
drop7= createSprite(150, 290, 10, 50);
drop8= createSprite(250, 340, 10, 50);
drop9= createSprite(350, 380, 10, 50);
drop0= createSprite(350, 460, 10, 50);


qdrop1= createSprite(125, 200, 1, 900);
qdrop2= createSprite(020, 200, 1, 900);
qdrop3= createSprite(100, 200, 1, 900);
qdrop4= createSprite(200, 200, 1, 900);
qdrop5= createSprite(300, 200, 1, 900);
qdrop6= createSprite(380, 200, 1, 900);
qdrop7= createSprite(150, 200, 1, 900);
qdrop8= createSprite(250, 200, 1, 900);
qdrop9= createSprite(350, 200, 1, 900);
qdrop0= createSprite(350, 200, 1, 900);
//bird= new Bird(100,100,20,20);
 drop2.velocityY=13;
 drop3.velocityY=23;
 drop4.velocityY=14; 
 drop5.velocityY=29;
 drop6.velocityY=13;
 drop7.velocityY=18; 
 drop8.velocityY=23;
 drop9.velocityY=28;
 drop0.velocityY=26; 

 line= createSprite(50,300,20,life*10);

 }


function draw() {
 var randomNumber
 if(life>0.0){
  if(drop1.isTouching(drop2)||drop1.isTouching(drop3)||drop1.isTouching(drop4)||drop1.isTouching(drop5)||drop1.isTouching(drop6)||drop1.isTouching(drop7)||drop1.isTouching(drop8)||drop1.isTouching(drop9)||drop1.isTouching(drop0)&&life>0){
    
   
    life=life-0.1;
   
  }
}
if(drop1.isTouching(qdrop2)||drop1.isTouching(qdrop3)||drop1.isTouching(qdrop4)||drop1.isTouching(qdrop5)||drop1.isTouching(qdrop6)||drop1.isTouching(qdrop7)||drop1.isTouching(qdrop8)||drop1.isTouching(qdrop9)||drop1.isTouching(qdrop0)&&life>1.5){
      
  score=score+1;

}

line.shapeColor = "red";


 
  if(life<0){
    life=0
    line.height=life;
  }
    else{
      line.height=life*13;
    }
  
    
 
  background(200,100,010);
  textSize(35);
  fill("white");

  text( "SCORE :"+score,100,100);
 // text( "LIFE :"+life,100,150);
  if(life===0){
    died();
    text("YOU DIED Score:"+score,50,300);
  }
  if(keyDown(LEFT_ARROW)){
   drop1.x=drop1.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  drop1.x=drop1.x+10;
}
else if(keyDown(UP_ARROW)){
  drop1.y=drop1.y-10;
}
else if(keyDown(DOWN_ARROW)){
  drop1.y=drop1.y+10;
}
if(drop1.y>600){
  drop1.y=1;
  up();
}
if(drop1.y<0){
  drop1.y=600;
  down();
}
CSSNamespaceRule.x=drop1.x;
 
  if(drop2.y>600){
    drop2.y=1;
  }
  if(drop3.y>650){
    drop3.y=1;
  }
  if(drop4.y>710){
    drop4.y=1;
  }
  if(drop5.y>770){
    drop5.y=1;
  }
  if(drop6.y>690){
    drop6.y=1;
  }
  if(drop7.y>650){
    drop7.y=1;
  }
  if(drop8.y>740){
    drop8.y=1;
  }
  if(drop9.y>610){
    drop9.y=1;
  }
  if(drop0.y>620){
    drop0.y=1;

    
  }

  //bird.display();
 // background(650,190,270); 

  drawSprites();
}


function down(){
  background(200,100,000);
  textSize(35);
  fill("white");
  textSize(35);
    fill("white");
  drop2.y=drop2.y-300;
  drop3.y=drop3.y-300;
  drop4.y=drop4.y-300;
  drop5.y=drop5.y-300;
  drop6.y=drop6.y-300;
  drop7.y=drop7.y-300;
  drop8.y=drop8.y-200;
  drop9.y=drop9.y-300;
  drop0.y=drop0.y-300;
}
function up(){
  drop2.y=drop2.y+300;
  drop3.y=drop3.y+300;
  drop4.y=drop4.y+300;
  drop5.y=drop5.y+300;
  drop6.y=drop6.y+300;
  drop7.y=drop7.y+300;
  drop8.y=drop8.y+300;
  drop9.y=drop9.y+300;
  drop0.y=drop0.y+300;
}
function died(){
  drop2.velocityY=0;
  drop3.velocityY=0;
  drop4.velocityY=0; 
  drop5.velocityY=0;
  drop6.velocityY=0;
  drop7.velocityY=0; 
  drop8.velocityY=0;
  drop9.velocityY=0;
  drop0.velocityY=0; 
 
}