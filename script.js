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
var playAgain = document.querySelector('#playAgain');
var timeEl = document.querySelector('#time');
// var cursor = 0;
// var correctAnswers = ["B", "D", "A","B","B"];

var index = 0;
var timeLeft = 100;
var timer;

var questions = [
   {
        message: "1. What is the name of the statement that is used to exit or end a loop?",
        possible: [
            'A. Break Statement',
            'B. Conditional statement',
            'C. Close statement',
            'D. Falter statement',
        ],
        correct: 1
    },
    {
        message: "2. What is considered to be the most popular programming language in the world?",
        possible: [
            'A. Swift',
            'B. Ruby',
            'C. HTML',
            'D. JavaScript',

        ],
        correct: 3
    },
    {
        message: "3. What kind of statement is used to execute actions based on a trigger or condition?",
        possible: [
            'A. Conditional Statement',
            'B. Boolean Variable',
            'C. RegExp or Regular Expression',
            'D. Fired Event',
        ],
        correct: 0
    },
    {
        message: "4. In JavaScript, what element is used to store and manipulate text, usually in multiples?",
        possible: [
            'A. Recorders',
            'B. Strings',
            'C. Arrays',
            'D. Variables',
        ],
        correct: 1
    },
    {
        message: "5. In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
        possible: [
            'A. RegExp',
            'B. Boolean',
            'C. Condition',
            'D. Events',
        ],
        correct: 1
    },
];


var startTimer = function(){
    console.log('time started');
    timer = setInterval (function (){
        timeLeft--;
        timeEl.textContent = timeLeft;

    }, 1000);
};

var displayQuestion = function() {
    var currentQuestion = questions[index];

    question.querySelector('h2').textContent = currentQuestion.message;
    button.innerHTML = null;

    for (var i = 0; i < currentQuestion.possible.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.textContent = currentQuestion.possible[i];
        buttonEl.dataset.id = i;
        button.appendChild(buttonEl);
    }

   console.log('Quesiton Displayed');
};

var displayEnd = function() {
    console.log('Game Over');
    hideScreen();
    end.style.display = "block";
    score.textContent = timeLeft;
    clearInterval(timer);
};

var nextQuestion = function(element) {
    var correct = element.dataset.id === questions[index].correct;

    if (index >= questions.length - 1) {
        displayEnd();
        return;
    }

    if (correct) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }

    index++;
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
        nextQuestion(element);
    }
});

Submit.addEventListener('click', function() {
    console.log('send to local storage');
    var highsScore = {
        score: timeLeft,
        initials: initialsInput.value.trim(),
    }
    var highScoreList = JSON.parse(localStorage.getItem)
    hideScreen();
    highScore.style.display = "block";
});

playAgain.addEventListener('click', function() {
    console.log('Display Start Screen');
    // RESET INDEX
    // RESET TIMER
    hideScreen();
    start.style.display = "block";
});

hideScreen();
start.style.display = "block";

timeEl.textContent = timeLeft;