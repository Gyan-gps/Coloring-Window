let r=255,g=255,b=255,dia=16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw(){
  circle(mouseX ,mouseY ,dia);
  noStroke();
  fill(r,g,b,100);
}

function mousePressed(){
  r=random(100, 200);
  g=random(100, 200);
  b=random(100, 200);
  dia=random(16, 200);
}