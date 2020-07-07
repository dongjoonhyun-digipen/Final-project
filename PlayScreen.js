// dongjoon.hyun
// Final prototype
// cs099
// spring.2020
let St
let P

class PlayScene {
  constructor() {
    St = new Stick()
    P = new Puck(300, 400, 0.3, 0)
  }

  Draw() {
    createCanvas(600,800)
    background(0)
    Draw_Score()
    Draw_line()
    P.Draw_puck()
    P.update()
    St.Draw_Aball()
    St.update()

  }
  Update() {
    if (ScoreP >= '5') {
      CurrentScene = WIN
      ScoreP = 0
    } else if (ScoreP <= '-3') {
      CurrentScene = LOSE
      ScoreP = 0
    }
  }
}
