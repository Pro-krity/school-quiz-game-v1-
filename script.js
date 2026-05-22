const questions = [
  {
    question: "৫ + ৩ = কত?",
    options: ["৬", "৭", "৮", "৯"],
    answer: "৮"
  },
  {
    question: "১০ - ৪ = কত?",
    options: ["৫", "৬", "৭", "৮"],
    answer: "৬"
  },
  {
    question: "৩ × ৪ = কত?",
    options: ["১০", "১১", "১২", "১৩"],
    answer: "১২"
  },
  {
    question: "২০ ÷ ৫ = কত?",
    options: ["২", "৩", "৪", "৫"],
    answer: "৪"
  },
  {
    question: "বাংলাদেশের রাজধানী কোনটি?",
    options: ["চট্টগ্রাম", "ঢাকা", "রাজশাহী", "খুলনা"],
    answer: "ঢাকা"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {
  answered = false;
  messageElement.textContent = "";

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(function(option) {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");

    button.addEventListener("click", function() {
      checkAnswer(button, option);
    });

    optionsElement.appendChild(button);
  });
}

function checkAnswer(button, selectedOption) {
  if (answered === true) {
    return;
  }

  answered = true;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedOption === correctAnswer) {
    score = score + 10;
    scoreElement.textContent = score;
    button.classList.add("correct");
    messageElement.textContent = "সঠিক উত্তর! খুব ভালো।";
  } else {
    button.classList.add("wrong");
    messageElement.textContent = "ভুল উত্তর। সঠিক উত্তর: " + correctAnswer;
  }
}

function nextQuestion() {
  currentQuestionIndex = currentQuestionIndex + 1;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  questionElement.textContent = "Game Over!";
  optionsElement.innerHTML = "";
  messageElement.textContent = "আপনার final score: " + score;
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = score;
  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  showQuestion();
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartGame);

showQuestion();