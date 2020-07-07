// dongjoon.hyun
// Final Project
// cs099
// spring.2020
let ST
let line_c2

class Puck {
  constructor(x, y, speed, direction) {
    angleMode(DEGREES)
    ST = St
    line_c2 = 0
    this.x = x
    this.y = y
    this.falling = 1
    this.size = 10;
    this.xoff = 0
    this.xoff2 = 0
    this.position = new Vec2(x, y)
    this.velocity = new Vec2(0, 0)
    this.gr = new Vec2(random(0.03), random(0.03))
    this.velocity.setLength(speed)
    this.velocity.setAngle(direction)
    this.break = 0
    this.trail = []
    this.polygonw = polygonwall
    this.polygons = polygonstick
  }
  accelerate(accel) {
    this.velocity.addTo(accel)
  }
  Draw_puck() {
    colorMode(HSB)
    push()
    this.Trails()
    pop()
    push()
    Draw_middleline()
    pop()
    this.accelerate(this.gr)
    var noising = map(noise(this.xoff), 0, 1, -10, 10)
    var noising1 = map(noise(this.xoff2), 0, 1, -7, 7)
    push()
    strokeWeight(3)
    fill(255)
    stroke(line_c2, 100, 100)
    circle(this.position.x, this.position.y, 80)
    pop()
    fill(255)
    circle(this.position.x - 20, this.position.y - 10, 30)
    circle(this.position.x + 20, this.position.y - 10, 30)
    push()
    fill('red')
    circle(this.position.x, this.position.y + 20, 10 + noising)
    pop()
    push()
    fill('black')
    circle(this.position.x + 20 + noising, this.position.y - 10 + noising, 10)
    circle(this.position.x - 20 - noising1, this.position.y - 10 - noising1, 10)
    this.xoff += random(0.2)
    this.xoff2 += random(0.3)
    push()
    pop()
    pop()
    line_c2 = (line_c2 += 0.8) % 360

  }
  update() {
    this.position.x += this.velocity.x * this.falling;
    this.position.y += this.velocity.y * this.falling;

    if (this.position.x > width - this.size - 1 || this.position.x < this.size - 1) {
      this.velocity.x = -this.velocity.x
      this.gr.x = -this.gr.x
      this.polygonw.play()
    }
    if (this.position.y > height - this.size - 1 || this.position.y < this.size - 1) {
      this.velocity.y = -this.velocity.y
      this.gr.y = -this.gr.y
      this.polygonw.play()


    }
    if (this.position.y > height - this.size - 3 && this.position.x <= 3 * width / 5 && this.position.x >= 2 * width / 5) {
      ScoreP--
      this.gr = new Vec2(random(0.03, 0.04), random(0.03, 0.04))
      this.position.x = width / 2
      this.position.y = height / 2
      this.velocity.x = 0
      this.velocity.y = 0
      console.log("your score is " + ScoreP)
      console.log("You need " + (5 - ScoreP) + " points!!") 
    }
    if (this.position.y < this.size && this.position.x < 7 * width / 10 && this.position.x > 3 * width / 10) {
      ScoreP++
      this.gr = new Vec2(random(0.03, 0.04), random(0.03, 0.04))
      this.position.x = width / 2
      this.position.y = height / 2
      this.velocity.x = 0
      this.velocity.y = 0
      this.gr.x *= -1
      this.gr.y *= -1
      if(ScoreP <5){
      console.log("your score is " + ScoreP)
      console.log("You need " + (5 - ScoreP) + " points!!")
      }else if(ScoreP ==5){
      console.log("your get " + ScoreP + " points"+"   You Win")
      }

    }

    this.distance = dist(this.position.x, this.position.y, ST.x, ST.y)
    this.distance2 = dist(this.position.x, this.position.y, ST.rx, ST.ry)
    this.Between = (ST.size / 2 + this.size / 2)
    this.inpuck = dist(this.position.x, this.position.y, this.position.x + this.size / 2, this.position.y + this.size / 2)

    // top Stick(Auto)\
    if (this.break == 1 && this.distance2 < this.Between) {
      this.break = 0
      if (this.distance2 < this.Between) {
        this.change()
        this.polygons.play()
      }
    } else if (this.distance > this.Between) {
      this.break = 1
    }

    //bottom Stick(Player)
    this.trail.push(new Trail(this.position.x, this.position.y))
    if (this.break == 1 && this.distance < this.Between) {
      this.break = 0
      if (this.distance < this.Between) {
        if (this.velocity.getAngle() > -15 && this.velocity.getAngle() <= 0) {
          this.velocity.setAngle(this.velocity.getAngle() - 90)
          if (this.velocity.x < 0) {
            this.gr.x = -this.gr.x;
          } else {
            this.gr.x = this.gr.x;
          }
          this.polygons.play()
        } else if (this.velocity.getAngle() > 0 && this.velocity.getAngle() <= 15) {
          this.velocity.setAngle(this.velocity.getAngle() - 110)
          if (this.velocity.x < 0) {
            this.gr.x = -this.gr.x;
          } else {
            this.gr.x = this.gr.x;
          }
          this.polygons.play()
        } else if (this.velocity.getAngle() > -180 && this.velocity.getAngle() <= -165) {
          this.velocity.setAngle(this.velocity.getAngle() + 90)
          if (this.velocity.x < 0) {
            this.gr.x = -this.gr.x;
          } else {
            this.gr.x = this.gr.x;
          }
          this.polygons.play()
        } else if (this.velocity.getAngle() > 165 && this.velocity.getAngle() <= 180) {
          this.velocity.setAngle(this.velocity.getAngle() + 110)
          if (this.velocity.x < 0) {
            this.gr.x = -this.gr.x;
          } else {
            this.gr.x = this.gr.x;
          }
          this.polygons.play()
        } else {
          this.changey()
          this.polygons.play()
        }
      }
    } else if (this.distance > this.Between) {
      this.break = 1
    }
  }


  change() {
    this.Between = this.distance
    if (this.velocity.x < 0) {
      this.gr.x = -this.gr.x;
    } else {
      this.gr.x = this.gr.x;
    }
    if (this.velocity.y < 0) {
      this.gr.y = -this.gr.y;
    } else {
      this.gr.y = this.gr.y
    }
    this.velocity.x = -this.velocity.x
    this.velocity.y = -this.velocity.y
    this.velocity.setLength(9.7)
  }
  changey() {
    this.Between = this.distance
    this.gr.y = -this.gr.y;
    this.velocity.y = -this.velocity.y
    this.velocity.setLength(9.7)
  }
  Trails() {
    for (var i = 0; i < this.trail.length; i++) {
      this.trail[i].update()
      this.trail[i].show()

      if (this.trail.length > 11) {
        this.trail.splice(0, 1)
      }
    }
  }
}