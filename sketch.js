let posX, posY, diam, 
let rad; 
esp;
function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
    posY = windowHeight / 2;
    rectMode(CENTER);
    piso = windowHeight * margen * esp / 2;
    

}

function draw() {
  background(0, 200, 150, 70);
  noStroke();

  if(posX){

  }

    fill(255)
    circle(posX, posY, 50);
  
  
    fill(255, 0, 0);
    rect(windowWidth * 0.5, windowHeight - 50, windowWidth * 0.8, 20);
    noStroke(); 

}
