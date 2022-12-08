var question = document.querySelector('#question');
var container = document.querySelector('#container');
var startBTN = document.querySelector('#startBTN');
var button = document.querySelector('#button')
var start = document.querySelector('#start');
var end= document.querySelector('#end');
var score = document.querySelector('#score');
var name = document.querySelector('#name')
var highScore = document.querySelector('#highScore');
// var cursor = 0;
// var correctAnswers = ["0", "B", "D", "A","B","B"];

var index = 0;

var questions = [0, 1];


var startTimer = function(){
    console.log('time started');
};

var displayQuestion = function() {
    console.log('display questions');
};

var nextQuestion = function() {
    var correct = true;
    index++;
    if (correct) {
        console.log("Correct");
    } else {
        console.log('Wrong');
    }
    displayQuestion();
};


startBTN.addEventListener('click', function() {
    startTimer();
    displayQuestion();
    var sections = document.querySelectorAll("section");
    console.log(sections);
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    question.style.display = "block";
});

button.addEventListener('click', function (event) {
    var element = event.target;

    if (element.matches('button')) {
        nextQuestion();
    }

});

