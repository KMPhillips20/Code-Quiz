var questions = document.querySelectorAll('.question');
var cursor = 0;

var correctAnswers = ["0", "3", "1", "2"];

const startingMinutes=1;
let time = startingMinutes * 59;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

var displayQuestion = function () {
    for (var question of questions) {
         if (question.dataset.index != cursor) {
            question.style.display = 'none';
        } else {
            question.style.display = 'block';
        }
    }
};

var advance = function(event) {
    var element = event.target;
    if (element.matches('.question button')) {
      var answer = element.dataset.choice === correctAnswers[cursor];
       
        if (cursor < questions.length ) {
         cursor++;
        }
         displayQuestion();
    }
};

document.addEventListener('click', advance);

displayQuestion();
