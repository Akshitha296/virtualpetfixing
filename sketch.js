var dog, happyDog, database, foodS, foodStock;
var ds

function preload()
{
  dog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  ds = createSprite(250, 250);
  ds.addImage("sitting", happyDog);
  ds.addImage("eating", dog);
  ds.scale = 0.4;

  database = firebase.database();

  foodStock = database.ref('Food')
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  fill("white")
  text("Food Left: " + foodS, 250, 50);
}

function readStock(data){
  foodS = data.val();
}

function keyPressed(){
  if (keyDown(UP_ARROW)){
    writeStock(foodS);
    ds.changeImage("eating", dog);
  }
}

function writeStock(x){
  if (x<=0){
    x = 0;
  } else{
    x = x-1;
  }

  database.ref('/').update({
    Food: x
  })
}

function updateFoodStock(){
  database.ref('/').update({
    Food: x
  })
}

function getFoodStock(){
  
}