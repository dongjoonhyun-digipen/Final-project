// dongjoon.hyun
// Final Project
// cs099
// spring.2020
class Trail {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.yspeed = 0
    this.gravity = 0.1
    this.history = []
  }

  update() {
    this.x = this.x
    this.y = this.y
    this.size2 = 25
    var vector = createVector(this.x, this.y)
    this.history.push(vector)

  }
  show() {
    colorMode(HSB)
    fill(60, 40, 100,50)
    rectMode(CENTER)
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i]
      push()
      noStroke()
      ellipse(pos.x, pos.y,75/this.history.length,75/this.history.length)
      pop()  
      
    }

  }
}