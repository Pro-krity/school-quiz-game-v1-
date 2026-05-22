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
    options: ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা"],
    answer: "ঢাকা"
  },
  {
    question: "বাংলাদেশের জাতীয় ফুল কোনটি?",
    options: ["গোলাপ", "শাপলা", "জবা", "বেলি"],
    answer: "শাপলা"
  },
  {
    question: "বাংলাদেশের জাতীয় পশু কোনটি?",
    options: ["হাতি", "হরিণ", "রয়েল বেঙ্গল টাইগার", "গরু"],
    answer: "রয়েল বেঙ্গল টাইগার"
  },
  {
    question: "বাংলাদেশের জাতীয় ফল কোনটি?",
    options: ["আম", "কাঁঠাল", "লিচু", "কলা"],
    answer: "কাঁঠাল"
  },
  {
    question: "সূর্য কোন দিক থেকে ওঠে?",
    options: ["উত্তর", "দক্ষিণ", "পূর্ব", "পশ্চিম"],
    answer: "পূর্ব"
  },
  {
    question: "এক সপ্তাহে কয় দিন?",
    options: ["৫", "৬", "৭", "৮"],
    answer: "৭"
  },
  {
    question: "১২ + ৮ = কত?",
    options: ["১৮", "১৯", "২০", "২১"],
    answer: "২০"
  },
  {
    question: "১৫ - ৭ = কত?",
    options: ["৬", "৭", "৮", "৯"],
    answer: "৮"
  },
  {
    question: "৬ × ৫ = কত?",
    options: ["২৫", "৩০", "৩৫", "৪০"],
    answer: "৩০"
  },
  {
    question: "৪০ ÷ ৮ = কত?",
    options: ["৪", "৫", "৬", "৭"],
    answer: "৫"
  },
  {
    question: "১০০ এর অর্ধেক কত?",
    options: ["২৫", "৫০", "৭৫", "১০০"],
    answer: "৫০"
  },
  {
    question: "A, B, C এর পরে কোন অক্ষর আসে?",
    options: ["D", "E", "F", "G"],
    answer: "D"
  },
  {
    question: "Apple শব্দের বাংলা অর্থ কী?",
    options: ["আম", "আপেল", "কলা", "আঙুর"],
    answer: "আপেল"
  },
  {
    question: "Book শব্দের বাংলা অর্থ কী?",
    options: ["কলম", "বই", "খাতা", "ব্যাগ"],
    answer: "বই"
  },
  {
    question: "Cat শব্দের বাংলা অর্থ কী?",
    options: ["কুকুর", "বিড়াল", "গরু", "ছাগল"],
    answer: "বিড়াল"
  },
  {
    question: "Dog শব্দের বাংলা অর্থ কী?",
    options: ["বিড়াল", "কুকুর", "ঘোড়া", "পাখি"],
    answer: "কুকুর"
  },
  {
    question: "পানির রাসায়নিক সংকেত কোনটি?",
    options: ["CO2", "O2", "H2O", "NaCl"],
    answer: "H2O"
  },
  {
    question: "মানুষ শ্বাস নেওয়ার সময় কোন গ্যাস গ্রহণ করে?",
    options: ["অক্সিজেন", "কার্বন ডাই অক্সাইড", "নাইট্রোজেন", "হাইড্রোজেন"],
    answer: "অক্সিজেন"
  },
  {
    question: "গাছ আমাদের কোন গ্যাস দেয়?",
    options: ["অক্সিজেন", "হাইড্রোজেন", "নাইট্রোজেন", "ধোঁয়া"],
    answer: "অক্সিজেন"
  },
  {
    question: "চোখ দিয়ে আমরা কী করি?",
    options: ["শুনি", "দেখি", "ঘ্রাণ নেই", "খাই"],
    answer: "দেখি"
  },
  {
    question: "কান দিয়ে আমরা কী করি?",
    options: ["দেখি", "শুনি", "লিখি", "হাঁটি"],
    answer: "শুনি"
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
