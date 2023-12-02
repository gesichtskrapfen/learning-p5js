// Programming with p5.js – Tutorial 2.2 The Coding Train

  let circleX = 200;

function setup() {
  createCanvas(500, 500);
  background(0);
}
  
  function mousePressed () {
  circleX = 0;   
}

function draw() {

  // Could add transparency through fill Alpha
  fill(70,25,255, 10);
  stroke(200,200,200);
  strokeWeight(2);
  circle(250, 250, circleX);
  
  circleX = circleX + 2;
}