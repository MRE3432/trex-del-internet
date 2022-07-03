var trex, trex_running, edges;
var groundImage,ground2;

function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
 trex.addAnimation ("running", trex_running);
  edges = createEdgeSprites();
  ground2 =createSprite(200,200,20,50);
  ground2.addImage("ground",groundImage);
  
  ground2.x = ground2.width / 2;
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  
}


function draw(){
  //establecer color de fondo.
  background("white");
  
  //cargar la posición Y del Trex
  console.log(trex.y)
  if (ground2.x < 0){
    ground2.x=ground2.width /2;
  }
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  if(trex.y <150){
trex.velocityY =0;
  }  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(edges[3]);
  ground2.velocityX = -5;
  drawSprites();
}
