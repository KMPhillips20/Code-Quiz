var questions = document.querySelectorAll('.question');
var cursor = 0;


var correctAnswers = ["0", "3", "1", "2"];

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
