var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
//for cars we use sprites
// we are using cars array to store how many cars are there
//the remaining car variables are for indivisual cars
var cars, car1,car2,car3,car4;



function setup(){
  //to resize your canvas(depending upon screen size)
  //displayWidth is used to automatically adjust our application according to our screen width
  //displayHeight is used to automatically adjust our application according to our screenHeight
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  //to load the database
  
  database = firebase.database();
  //to create a game object, GetState, and start the game
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //to check if the total number of players we want in the game has joined or not,
  // if joined then update the gamestate to 1(play) 
  
  if(playerCount === 4){
    game.update(1);
  }
  //if players have logged in, and gamestate is 1, then call the function game.play
  if(gameState === 1){
    clear();
    game.play();
  }
}
