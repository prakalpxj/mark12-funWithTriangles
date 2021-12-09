const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const output1 = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];
submitAnswerBtn.addEventListener('click', calculateScore);


function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score++;
        }
        index++;
    }

    console.log(score)
    output1.innerText = "Your score is " + score;
}

