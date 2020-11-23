var dog, happyDog; 
var database; 
var foodS, foodStock;


function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  foodStock = databse.ref('food')
  foodStock.on("value",readStock)

 


}


function draw() {  
background (46, 139, 87)

if (keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();

  textSize(20)
  text("Press Up Arrow To feed Max Milk",100,100)

  //add styles here

}

function readStock(){

  foodS = data.val()
}

function writeStock(x){


  databse.ref('/').update({food : x})
}


