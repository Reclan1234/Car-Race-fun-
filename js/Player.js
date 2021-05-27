class Player {
  constructor(){
this.index=null
this.distance=0
this.name=null
this.rank=0
  }

  getCount(){
    //reading playerCount from database
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    //updating playerCount to database
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + player.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
static getplayerinfo(){
  //refer to the location player in database
  var playerinfo =database.ref("players")
playerinfo.on("value",(data)=>{
  allPlayers = data.val();
  //extracting player data
})
}

getCarsAtEnd(){
  //reading playerCount from database
  var carsCountRef = database.ref('carsAtEnd');
  carsCountRef.on("value",(data)=>{
    this.rank = data.val();
  })
}
updateCarsAtEnd(rank){
  database.ref("/").update({
    carsAtEnd:rank
  })
}
}
