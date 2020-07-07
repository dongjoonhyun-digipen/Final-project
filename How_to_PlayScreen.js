// dongjoon.hyun
// Final Project
// cs099
// spring.2020
class How_to_PlayScreen{
    constructor(){
        const center_x = width/2;
        this.mainmenu = new Button(center_x, height - 50, "Main Menu");
    }

    Update(){
        if(this.mainmenu.DidClickButton()){
            CurrentScene = MAIN_MENU;
        }
    }

    Draw(){
        DrawTitle("How to Play");
      image(pointRule,100,height/2-30,400,200)
      image(how,0,height/5,600,200)
        this.mainmenu.DrawButton();
       Drawdetail(width/2,height/2," \n\n\n\n  \n \n  \n  \n  \n \n I think you can win easily!! \n Let's play!")
    }
}