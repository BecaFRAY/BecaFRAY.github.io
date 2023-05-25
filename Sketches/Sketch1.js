function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  
  
  
//head
  
fill(170, 108, 112)
ellipse(200,200,200,250)
  
  //eyes
  fill(255, 255, 255)
  ellipse(150,184,40,40)
  ellipse(230,184,40,40)
  
  fill(0,0,0)
      ellipse(230,184,10,10)
    ellipse(150,184,10,10)
  
  //nose
  fill(170, 90, 112)
  strokeWeight(1)
  triangle(190,215,180,234,200,234)
  
  //mouth
  fill(255,255,255)
  stroke(5)
  triangle(154,255,240,255,196,300)
  line(175,277,218,277)
  
  
//hair
  fill(0,0,0)
  rect(100,68,210,80)





//Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
}