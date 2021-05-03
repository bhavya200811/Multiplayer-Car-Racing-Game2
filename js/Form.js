class Form {

  constructor() {
    //to create the properties of form
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    //to hide all the info of the form once the game starts
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    //to display all the form components on the screen
    var title = createElement('h2')
    title.html("Car Racing Game");
    //we are not going to give a fixed value, instead we are going to be writiong this code so that all 
    //of the components of the game adjust themselves when played in another device
    title.position(displayWidth/2-50,0);

    this.input.position(displayWidth/2-50,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70,displayHeight/4);
    });

  }
}
