var readlineSync = require('readline-sync');

var userName = readlineSync.question("Give me your name? ");
log(" ");

function log(data) {
  console.log(data);
}

log("Welcome: " + userName + " Let's check who know's me better?");
log(" ");

score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    log("Well done right answer!!!");
    log("current score is added by 5")
    score = score + 5
    log("----------------------");
    log(" ");
    log(" ");
} else {
    log("wrong answer!!! ");
    log("Your current score is deducted by 5")
    score = score - 5
    log("----------------------");
    log(" ");
    log(" ");
  }
}
var question = [{
  question: "My favourite singer? a)Michael Jackson b)Freddie Mercury c)Bob Dylan d)Elvis Presley e)both a and b = ",
  answer: "e"
}, {
  question: "My favourite movie? a)The Godfather b)Star wars c)Dark Knight d)Joker e)Bohemian Rhapsody f) b,d and e = ",
  answer: "f"
}, {
  question: "My favourite game? a)BGMI b)Pes c)FIFA d)Chess = ",
  answer: "b"
}, {
  question: "My favourite drink? a)Mountain dew b)Thums Up c)Coca Cola d)Pepsi e)both a and c = ",
  answer: "a"
}, {
  question:"My favourite sports? a)cricket b)football c)basketball d)Volleyball = ",
  answer: "b"
}, {
  question: "My favourite football player?  a)Ronaldo b)Messi c)Neymar d)Johan Cruyff= ",
  answer: "b"
}, {
  question: "My favourite anime? a)Attack on Titan b)Naruto c)Death Note d)both b and c = ",
  answer: "d"
}, {
  question: "My favourite car company? a)BMW b)McLaren c)Rolls-Royce  d)Ferrari e)Lamborghini = ",
  answer: "c"
}]

for (var i=0; i < question.length; i++) {
  var currentQueston = question[i];
  play(currentQueston.question, currentQueston.answer);
}

log("Your finalscore is: " + score);
  log("----------------");
  log(" ");

var highScore = [
{
  name: "Yash",
  score: 40,
},
{
  name: "Sunil",
  score: 30,
},
{
  name: "Vedant",
  score: 30,
},
{
  name: "Haaris",
  score: 28,
},
{
namw: "Atharva",
answer: 0,
},
{
  name: "Kunal",
  score: -20,
},
{
  name: "Ebhrahim",
  score: -40,
}
]

log("WOW! your score ", score);
log("Check out the high score in this list = ");

for (var i=0; i < highScore.length; i++) {
  log(highScore[i].name + " ---> " + highScore[i].score);
  log("------------------");
  log(" ");
}


var score = [
{
  name: "name",
  score: 00, 
}]
