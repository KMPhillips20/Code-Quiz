var question = document.querySelectorAll('#question');
var container = document.querySelector('#container');
var startBTN = document.querySelector('#startBTN');
var start = document.querySelector('#start');
var end= document.querySelector('#end');
var score = document.querySelector('#score');
var name = document.querySelector('#name')
var highScore = document.querySelector('#highScore');
// var cursor = 0;
// var correctAnswers = ["0", "B", "D", "A","B","B"];



// Timer
var startTimer = function(){
    console.log('time started');
};

var displayQuestion = function() {
    console.log('displayed question');
};

startBTN.addEventListener('click', function() {
    startTimer();
    displayQuestion();

});



