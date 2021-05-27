class Game {
  constructor(){}
  
  getState(){
    // reading data from gameState location is database
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    //update change in state to database
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    //first gameState(0)
    if(gameState === 0){
      //when a person enters the game he becomes a new player
      player = new Player();
      //count gets updated
      player.getCount();
      //form page is displayed
      form = new Form()
      form.display();
    
  }
  car1=createSprite(100,200);
  car1.addImage(car1img)
  car2=createSprite(300,200);
  car2.addImage(car2img)
  car3=createSprite(500,200);
  car3.addImage(car3img)
  car4=createSprite(700,200);
  car4.addImage(car4img)
  cars=[car1,car2,car3,car4]
}
    play(){
      form.hide();
      text("game start",120,100);
      Player.getplayerinfo();
      player.getCarsAtEnd();
      if(allPlayers !==undefined){
        background(ground);
          image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0;
        var x=175;
        var y;
        for(var i in allPlayers){
          
          index=index+1;
          x=x+200;
          y=displayHeight-allPlayers[i].distance;
          cars[index-1].x=x;
          cars[index-1].y=y
          if(index===player.index){
            cars[index-1].shapeColor="red"
            camera .position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
          }

         
      }
    }
    
    if(keyDown(UP_ARROW)&&player.index!=null)
      {
      player.distance=player.distance+10
      player.update();
     

      }
      if(player.distance>4150){
        gameState=2
        player.rank=player.rank+1;
        player.updateCarsAtEnd(player.rank)
      }
      drawSprites();
      
    }
    end(){
      var message=createElement("h1");
      message.html("congratulations "+player.name+" your rank is=== "+player.rank);
      message.position(displayWidth/2-70,displayHeight/2)
    }
  }

