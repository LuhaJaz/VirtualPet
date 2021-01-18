var database, food, foodStock, dog, dog1, dog2

function preload()
{
  dog1 = loadImage ("images/dogImg.png")
  dog2 = loadImage ("images/dogImg1.png")
  bg = loadImage ("Kitchen.gif")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,400,150,150)
  
  dog.addImage(dog1)
  dog.scale = 0.2
  foodStock = database.ref("Food")
  foodStock.on("value", readStock)
}


function draw() {  
background(bg)
if(keyWentDown(UP_ARROW)){
  writeStock(food)
  dog.addImage (dog2)
}
stroke("black")
textSize(15)
text ("Food Remaining" +food, 170, 200)
text ("Press Up Arrow to Feed Milk", 130, 10, 300, 20)

  drawSprites();
  //add styles here

}
function readStock(data){
  food = data.val()
}
function writeStock(x){
  if(x<=0){
     x=0; }
     else{
        x=x-1; 
      } 
      database.ref('/').update({ 
        Food:x 
      }
      )
    }


