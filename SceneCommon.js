// dongjoon.hyun
// Final prototype
// cs099
// spring.2020
let line_c = 0
let line_c3 = 0
let ScoreP = 0
let difficult = 0
let difficultx
let coff = 1

function DrawTitle(label) {
  push()
  push();
  textFont(TitleFont)
  textAlign(CENTER);
  textSize(80);
  fill(0)
  push()
  colorMode(HSB)
  stroke(60, 100, 100);
  strokeWeight(coff)
  text(label, width / 2, 80);
  pop()
  pop();
  if (coff <= 3) {
    coff += 0.005
  } else if (coff > 3) {
    coff = 1
  }
  pop()
}

function Draw_line() {
  push()
  colorMode(HSB)
  strokeWeight(3)
  strokeJoin(BEVEL)
  stroke(line_c, 100, 100)
  line(0, 0, width, 0)
  line(0, 0, 0, height)
  line(0, height, width, height)
  line(width, height, width, 0)
  pop()
  line_c = (line_c + 0.5) % 360
}

function Draw_middleline() {
  push()
  colorMode(HSB)
  strokeWeight(3)
  stroke(line_c, 100, 100)
  line(0, height / 2, width / 2 - 60, height / 2)
  line(width / 2 + 60, height / 2, width, height / 2)
  push()
  noFill()
  circle(width / 2, height / 2, 120)
  line_c = (line_c + 0.5) % 360
  pop()
}

function Drawdetail(x, y, detail) {
  push()
  stroke('yellow')
  textFont(DetailFont)
  push();
  textAlign(CENTER, CENTER);
  textSize(28);
  fill('yellow');
  noStroke();
  text(detail, x, y);
  pop();
  pop()
}

function Draw_Score() {
  push()
  textFont(TitleFont)
  difficultx = 2 * width / 5
  push()
  colorMode(HSB)
  fill(line_c3, 100, 100)
  textAlign(CENTER, CENTER)
  textSize(80)
  text(ScoreP, width / 2, height / 2)
  pop()
  push()
  fill(0)
  stroke(line_c3, 100, 100)
  strokeWeight(5)
  rect(2 * width / 5, height - 10, width / 5, 20)
  rect(3 * width / 10, -10, difficultx, 20)
  pop()
  line_c3 = (line_c3 + 0.8) % 360
  pop()
}

function preload() {
  TitleFont = loadFont('fonts/Typo_DecoSolidSlash.ttf')
  DetailFont = loadFont('fonts/HoonWhitecatR.ttf')
  polygonwall = loadSound('sounds/polygon(wall).mp3')
  polygonstick = loadSound('sounds/polygon(stick).mp3')
  hello = loadImage('images/pong(hello).PNG')
  hockey = loadImage('images/air-hockey.png')
  pointRule = loadImage('images/point.PNG')
  how = loadImage('images/how.PNG')
  winPic = loadImage('images/win.png')
  losePic = loadImage('images/lose.PNG')

}