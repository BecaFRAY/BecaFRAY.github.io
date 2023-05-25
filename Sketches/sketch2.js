function setup() {
  createCanvas(400, 300);
  fill(250,250,200)
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300,0,300,300);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill(250, 0, 255);
    ellipse(mouseX, mouseY, 180, 40);
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill(255, 100, 0);
    triangle(mouseX, mouseY, 40, 40,40,40);
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 255, 200);
    rect(mouseX, mouseY, 40, 40);
  }
  
  else if (mouseX >300 && mouseX >=300){
    fill(150,255,150)
    ellipse(mouseX,mouseY,40,40)
  }
}







