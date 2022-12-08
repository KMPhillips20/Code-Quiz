var question = document.querySelector('#question');
var container = document.querySelector('#container');
var startBTN = document.querySelector('#startBTN');
var button = document.querySelector('#button')
var start = document.querySelector('#start');
var end= document.querySelector('#end');
var score = document.querySelector('#score');
var name = document.querySelector('#name')
var highScore = document.querySelector('#highScore');
var Submit = document.querySelector('#Submit');
var playAgain = document.querySelector('#playAgain')
// var cursor = 0;
// var correctAnswers = ["B", "D", "A","B","B"];

var index = 0;

var questions = [
   {
        message: "1. What is the name of the statement that is used to exit or end a loop?",
        possible: [
            'A',
            'B',
            'C',
            'D',
        ],
        correct: 1
    },
    {
        message: "2. What is considered to be the most popular programming language in the world?",
        possible: [
            'A',
            'B',
            'C',
            'D',

        ],
        correct: 3
    },
    {
        message: "3. What kind of statement is used to execute actions based on a trigger or condition?",
        possible: [
            'A',
            'B',
            'C',
            'D',
        ],
        correct: 0
    },
    {
        message: "4. In JavaScript, what element is used to store and manipulate text, usually in multiples?",
        possible: [
            'A',
            'B',
            'C',
            'D',
        ],
        correct: 1
    },
    {
        message: "5. In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
        possible: [
            'A',
            'B',
            'C',
            'D',
        ],
        correct: 1
    },
];


var startTimer = function(){
    console.log('time started');
};

var displayQuestion = function() {
    console.log('display questions');
};

var displayEnd = function() {
    console.log('Game Over');
    hideScreen();
    end.style.display = "block";
};

var nextQuestion = function() {
    var correct = true;
    index++;

    if (index >= questions.length) {
        displayEnd();
        return;
    }

    if (correct) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }
    displayQuestion();
};


var hideScreen= function() {
    var sections = document.querySelectorAll("section");
    console.log(sections);
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
};

startBTN.addEventListener('click', function() {
    startTimer();
    displayQuestion();
    hideScreen();
    question.style.display = "block";
});

button.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('button')) {
        nextQuestion();
    }
});

Submit.addEventListener('click', function() {
    console.log('send to local storage');
    hideScreen();
    highScore.style.display = "block";
});

playAgain.addEventListener('click', function() {
    console.log('Display Start Screen');
    hideScreen();
    start.style.display = "block";
});

hideScreen();
start.style.display = "block";