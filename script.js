let cols, rows;
let scl = 20;
let w = 1200;
let h = 1600;

let flying = 0;

let terrain = [];

function setup() {
  createCanvas(600,600,WEBGL);
  cols = w/scl;
  rows = h/scl;
  noStroke();
  

}


function draw() {
  frameRate(60);
  orbitControl();
  
  flying -=0.07;
  
  let xoff = flying;
  for (let x = 0; x < cols; x++) {
    let yoff = 0;
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -60, 60);
      yoff += 0.2;
      //terrain[x][y] = 0;
    }
    xoff += 0.2;
  }

  
  background(255,102,0);
  //stroke(0,51,255);
  noStroke();
  //noFill();
  
  rotateX(PI/2.8);
  ambientLight(255,155,255);
let z;
  push();
  translate(-w/2, -h/2)
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      let depth = terrain[x][y];
      z = terrain[x][y];
      let brightness = map(depth, 60, -60, 100, 250);
      fill(0,51,255,brightness)
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y+1) * scl, terrain[x][y+1]);
    }
    endShape();
  }
  pop();
  
  push();
  rotateX(-PI/2.8);
  rotateZ((15-z)/180);
  translate(70,90+z,0);
  boat();
  
  pop();
  
  
  
  
  
}
function boat(){
  translate(-width/2,-height/2)
  
  fill('brown')
  beginShape()
  vertex(145 , 190)
  vertex(155 , 210)
  vertex(260 , 210)
  vertex(270 , 190)
  vertex(145 , 190)
  endShape()
  //sail1
  fill('yellow')
  stroke('yellow')
  beginShape()
  vertex(206 , 190)
  vertex(206 , 115)
  vertex(167 , 185)
  vertex(206 , 185)
  endShape()
  fill('teal')
  stroke('teal')
  //sail2
  beginShape()
  vertex(210 , 123)
  vertex(210 , 185)
  vertex(240 , 185)
  vertex(210 , 123)
  endShape()
}
