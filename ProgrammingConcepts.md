**Programming Concepts Document.**

56546585 
Dongjoon Hyun
CS099
Spring.2020

**1.Shapes**

circle: Puck’s shape and hockey stick’s shape : ellipse(this.x, this.y, this.size, this.size)
Rectangle: Air Hockey table’s shape and button’s shape. : rect(2 * width / 5, height - 10, width / 5, 20)


**2.Colors**

Table’s side color is random colors. And puck’s color is white.

ex:colorMode(HSB)
   stroke(line_c3, 100, 100)
   line_c3 = (line_c3 += 0.5) % 360


**3.Variables**

Puck’s velocity and sticks position

ex :circle(this.position.x, this.position.y, 80)


**4.Conditinal Statements.**

ex: this.break = 0

When the puck touch the sticks then puck’s direction is changed.


**5.Loops**

After puck hit the stick, when the puck move to the opposite side, pucks velocity is larger.

ex: if (this.break == 1 && this.distance2 < this.Between) {
      this.break = 0
      if (this.distance2 < this.Between) {
        this.change()
        this.polygons.play()
      }


**6.Functions**

Draw Score at the center of playboard

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


**7.Classes**

Puck’s drawing at position and Draw sticks at position

Sticks.js
Puck.js


**8.Arrays**

The puck’s moving trails 

In the Trail.js
this.history = []
