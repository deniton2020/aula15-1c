function setup() {
  createCanvas(600, 400);
  background("rgb(19,17,18)");
}

function draw() {
  stroke("#FFEB3B")
  fill("red")
  
 
if(mouseIsPressed){
  rect(mouseX,mouseY, 40, 20);
}
}