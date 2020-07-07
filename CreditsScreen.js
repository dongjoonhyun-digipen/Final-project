// dongjoon.hyun
// Final prototype
// cs099
// spring.2020
class CreditsScreen{
    constructor(){
        this.mainmenu = new Button(width/2, height - 50, "Main Menu");
    }

    Update(){
        if(this.mainmenu.DidClickButton()){
            console.log("Main Menu!");
            CurrentScene = MAIN_MENU;
        }
    }

    Draw(){
        DrawTitle("Credits");
        textAlign(CENTER);
      Drawdetail(width/2,height/2,"Thank you for \n  Rudy Castan \n Some Digipen students \n \n \n \n \n Made by Dong joon Hyun.")
      
      

        this.mainmenu.DrawButton();
    }
}