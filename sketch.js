let posX, posY, diam, esp, piso, rad;
let velocidadY = 0;
let gravedad = 0.5;
let acel = 0.98;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  diam = random(10, 50);
  rad = diam / 2;
  esp = 20;
  piso = windowHeight;
  posX = windowWidth / 2;
  posY = windowHeight * 0.2;
}

function draw() {
  background(0, 200, 150, 70);
  actualizar();
  noStroke();

  fill(255, 200, 150);
  circle(posX, posY, diam);
  fill(100, 50, 0);
  rect(windowWidth / 2, piso, windowWidth, esp);

  function actualizar() {
    posY += velocidadY;
    velocidadY += gravedad;

    if (posY >= piso - rad) {
      velocidadY *= -1;
      posY = piso - rad;
    }
  }
}
