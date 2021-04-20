var readlineSync = require('readline-sync');

var score = 0;
var level = 1;
var userName = readlineSync.question("What is your name ?");
console.log("Welcome "+userName+" Do you know Kashif");

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
    console.log("You are right");
    score = score+1;
  }
  else{
    console.log("You are wrong");
  }
  if(score===3){
    console.log("Congrats you are now in level"+level)
    level++;
  }
  console.log("Current score is: "+score);
    console.log("============");
}
// Creating objects 

var questions = [{

  question: "Where do I live ?",
  answer: "Bhopal"
},{
  question: "Which IPL team is my favortie ?",
  answer: "KKR"
},{
  question: "My favorite super hero would be ?",
  answer: "Thor"
},{
  question: "What do I do ?",
  answer: "Engineering"
}];

for(var i=0; i<questions.length; i++){
  var currentQuestions = questions[i];
  play(currentQuestions.question, currentQuestions.answer)
}
console.log("Yay! You Scored: "+score);