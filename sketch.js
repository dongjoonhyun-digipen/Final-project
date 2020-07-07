// dongjoon.hyun
// Final prototype
// cs099
// spring.2020
let BackgroundColor = 0;
let CurrentScene = MAIN_MENU;

let MainMenuScene;
let CreditsScene;
let How_to_PlayScene;
let play
let win
let lose


function setup() {
  createCanvas(600, 600);
  MainMenuScene = new MainMenu();
  CreditsScene = new CreditsScreen();
  How_to_PlayScene = new How_to_PlayScreen();
  play = new PlayScene();
  win = new WinScene()
  lose = new LoseScene()
}

function draw() {
  background(BackgroundColor);
  switch (CurrentScene) {
    case MAIN_MENU:
      createCanvas(600,600)
      MainMenuScene.Update();
      MainMenuScene.Draw();
      Draw_line()
      break;
    case CREDITS_SCREEN:
      CreditsScene.Update();
      CreditsScene.Draw();
      Draw_line()
      break;
    case How_to_Play_SCREEN:
      How_to_PlayScene.Update();
      How_to_PlayScene.Draw();
      Draw_line()
      break;
    case PLAY:
      createCanvas(600,800)
      play.Update()
      play.Draw();
      break;
    case WIN:
      win.Update()
      win.Draw()
      break;
    case LOSE:
      lose.Update()
      lose.Draw()
      break;
  }


}