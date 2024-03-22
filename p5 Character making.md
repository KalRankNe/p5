# p5.js 캐릭터 만들기 과제
## 팀장 : 박성민
## 팀원 : 김태훈
#### 팀원이 2명 뿐이라 캐릭터도 2개 입니다
***
#결과물 링크
*<링크>
***
###조작법
<pre>
  키보드 1~6
  키보드 1 : 1번캐릭터 크기 증가
  키보드 2 : 1번캐릭터 크기 감소
  키보드 3 : 2번캐릭터 크기 증가
  키보드 4 : 2번캐릭터 크기 감소
  키보드 5 : 1번캐릭터 12도 회전
  키보드 6 : 1번캐릭터 12도 회전
</pre>
***
#코드
<pre>
  ```js
  function setup() {
  createCanvas(700,700);
}

let pigScale = 0.5;
let rororoScale = 0.5;

let pigRotation = 0;
let rororoRotation = 0; 

let bgFrame = 0; 

let bg = { r: 255, g: 255, b: 255 }; 

let currentBgColor = { r: 255, g: 255, b: 255 };

function draw() {
  background(bg.r, bg.g, bg.b); 
  bgFrame++; 
 
   if (bgFrame >= 60) {
        bg = { r: random(255), g: random(255), b: random(255) };
        bgFrame = 0; // 프레임 초기화
    }
  
  push();
  translate(100,200);
  translate(70, 70);
  rotate(radians(pigRotation));
  translate(-70, -70)
  scale(pigScale);
  pig();
  pop();
  
  push();
  translate(400,200);
  translate(70, 70);
  rotate(radians(rororoRotation));
  scale(rororoScale);
  translate(-70, -70)
  rororo();
  pop();
  
}

function keyPressed() {
    if (keyCode === 49) { 
        pigScale += 0.1;
    } else if (keyCode === 51) { 
        rororoScale += 0.1; 
    } else if (keyCode === 50) { 
        pigScale -= 0.1; 
    } else if (keyCode === 52) { 
        rororoScale -= 0.1; 
    } else if (keyCode === 53) {
        pigRotation += 12; 
    } else if (keyCode === 54) {
        rororoRotation += 12;
    }
}

function rororo() {
  //head
  circle(200,200,265);
  push();
  fill(51,0,153);
  ellipse(200,102,150,70)
  pop();
  
  //left eye
  push();
  fill(255,153,0)
  circle(130,180,110);
  fill(255);
  circle(130,180,80);
  fill(0);
  circle(145,185,15);
  pop();
  
  //right eye
  push();
  fill(255,153,0)
  circle(270,180,110);
  fill(255);
  circle(270,180,80);
  fill(0);
  circle(255,185,15);
  pop();
  
  //mouth and glasses'bridge
  push();
  fill(255,204,0);
  circle(200,247,82);
  beginShape(LINES);
  vertex(165,235);
  vertex(185,252);
  vertex(235,235);
  vertex(215,252);
  vertex(185,252);
  vertex(215,252);
  endShape();
  beginShape(TESS);
  vertex(185,185);
  vertex(200,182)
  vertex(215,185);
  vertex(218,160);
  vertex(200,163)
  vertex(182,160);
  endShape(CLOSE);
  pop();
  
  //hat
  push();
  fill(51,0,0);
  beginShape(TESS);
  vertex(65,125);
  vertex(270,125);
  vertex(335,125);
  vertex(335,70);
  vertex(280,70);
  vertex(280,10);
  vertex(120,10);
  vertex(120,70);
  vertex(65,70);  
  endShape(CLOSE);
  pop();
}

function pig() {
  
  translate(50,50)
  translate(150, 150);
  scale(4)
  
  
  fill(255,150,200)
  //left
  ellipse(-20, -30, 20, 32)
  //right
  ellipse( 20, -30, 20, 32)
  
  fill(255,255,200)
  ellipse(20, -30, 10, 22)
  ellipse(-20, -30, 10, 22)
  
  
  //face
  fill(255,150,200)
  ellipse(0, 0, 80, 60);
  

  //eyes
  fill(255,255,255)
  ellipse( -20, -10, 20, 10)
  ellipse( 20, -10, 20, 10)
  fill(0,0,0)
  ellipse( -20, -10, 5, 5)
  ellipse( 20, -10, 5, 5)
  
  //nose
  fill(255,150,200)
  ellipse( 0, 0, 20, 10)
  fill(0,0,0)
  ellipse( 5, 0, 5, 5)
  ellipse( -5, 0, 5, 5)
  
  //mouse
  fill(200,0,0)
  ellipse( 0, 15, 20, 10)
}
  ```
</pre>
