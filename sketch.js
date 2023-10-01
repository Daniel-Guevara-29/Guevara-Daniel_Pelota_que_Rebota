let posX, posY, diam, esp, piso, rad;
let velocidadY = 0;
let gravedad = 0.5;
let rebote = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
    posY = windowHeight / 2;
    rectMode(CENTER);
    diam = 70;
    rad = diam / 2; 
    esp = 0.8; 
    piso = windowHeight * 0.9;
    posX = windowWidth / 2;
  posY = windowHeight / 2;
}

function draw() {
  background(0, 200, 150, 70);
  noStroke();

  velocidadY += gravedad;
  posY += velocidadY;

  if (posY + rad >= piso) {
    posY = piso - rad;
    velocidadY *= -esp;
    rebote = true;
  } else {
    rebote = false;
  }


    fill(255)
    circle(posX, posY, diam);
  
  
    fill(255, 0, 0);
    rect(windowWidth * 0.5, piso, windowWidth, 20);

    if (rebote && posY >= piso - rad && velocidadY >= -1 && velocidadY <= 1) {
      posY = -rad;
      velocidadY = 0;
      rebote = false;
    }
  }

