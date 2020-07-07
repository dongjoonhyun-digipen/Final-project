// dongjoon.hyun
// Final prototype
// cs099
// spring.2020
class WinScene {
  constructor() {
    const center_x = width / 2;

    this.mainmenu = new Button(center_x + 100, height - 100, "Main Menu");
    this.re = new Button(center_x - 100, height - 100, "restart");
    this.check = 0;
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;

    } else if (this.re.DidClickButton()) {
      CurrentScene = PLAY;
    }
  }

  Draw() {
    createCanvas(600,600)
    background(0)
    DrawTitle("Win");
    Draw_line()
    image(winPic,100,100,450,450)
    this.mainmenu.DrawButton();
    this.re.DrawButton();
  }
}