// dongjoon.hyun
// Final prototype
// cs099
// spring.2020
class Stick {
  constructor() {
    this.x = 200
    this.y = 600
    this.size = 100
    this.ry = 0
    this.vrx = 3
    this.rx = 2 * width / 5
  }
  Draw_Aball() {
    colorMode(HSB)
    //Upside stick
    push()
    fill(6,63,100)
    strokeWeight(3)
    ellipse(this.rx, this.ry, 80, 80)
    ellipse(this.rx, this.ry, 40, 40)
    if (this.rx > 3 * width / 5 || this.rx < 2 * width / 5) {
      this.vrx = -this.vrx
      pop()
    }
    //Player's stick
    push()
    strokeWeight(3)
    stroke(line_c,0,100)
    fill(224,70,90)
    ellipse(this.x, this.y, this.size, this.size)
    ellipse(this.x, this.y, this.size / 2, this.size / 2)
    pop()
  }
  update() {
    this.rx += this.vrx
    if (mouseY > height / 2 && mouseX < width && mouseY < height) {
      this.x = mouseX
      this.y = mouseY
    }
    this.rxoff += 0.02
  }
}