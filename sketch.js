var canvas;
var contestantCount,database,quiz,question,contestant,input,input1;
var gameState=0;

function setup(){
  
  canvas = createCanvas(500,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
}


function draw(){
  background("orange");

  
}
