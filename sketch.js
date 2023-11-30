function setup() {
  createCanvas(1080, 1080);
  print("Hello");
    background(0);
}

function draw() {

  // Could add transparency through fill Alpha
  fill(70,25,255);
  stroke(200,200,200);
  strokeWeight(2);
  circle(mouseX,mouseY, 100);
  
}

function mousePressed() {
  // Press mouse for background refresh
  background (0);
}
