class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset=createButton("Reset")
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    //createElment- displaying text
     var title = createElement('h2')
    //.html()-write the text to display
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);
    
     
    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);
    this.reset.position(displayWidth-100,20)
     // button.mousePressed()-used to write what happens when button is pressed
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
       // store player's name in var name
       player.name = this.input.value();
      //playerCount is updated
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);
     this.greeting = createElement('h3');
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70, displayHeight/4)
    });

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0)
      database.ref("players").romove()
    })

  }
}
