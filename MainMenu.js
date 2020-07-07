// dongjoon.hyun
// Final prototype
// cs099
// spring.2020

class MainMenu {
  constructor() {
    const center_x = width / 2;
    this.play = new Button(center_x, height * 2 / 5, "Play");
    this.How_to_Play = new Button(center_x, height * 3 / 5, "How to Play");
    this.credits = new Button(center_x, height * 4 / 5, "Credits");
  }

  Update() {
    textFont(DetailFont)
    if (this.play.DidClickButton()) {
      console.log("Play!");
      CurrentScene = PLAY;
    } else if (this.How_to_Play.DidClickButton()) {
      console.log("How to Play!");
      CurrentScene = How_to_Play_SCREEN;
    } else if (this.credits.DidClickButton()) {
      console.log("Credits!");
      CurrentScene = CREDITS_SCREEN;
    }
    
  }

  Draw() {
    background(0)
    image(hello,360,100,250,220)
    image(hockey,50,380,90,120)
    DrawTitle("A Pong's trip");
    this.play.DrawButton();
    this.How_to_Play.DrawButton();
    this.credits.DrawButton();

  }
 
}