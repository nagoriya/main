// Quiz Questions & Answers
let questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Bhopal", "Kolkata"],
    answer: 1
  },
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C++", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

// Load Question
function loadQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion].question;
  document.getElementById("btn0").innerText = questions[currentQuestion].options[0];
  document.getElementById("btn1").innerText = questions[currentQuestion].options[1];
  document.getElementById("btn2").innerText = questions[currentQuestion].options[2];
  document.getElementById("btn3").innerText = questions[currentQuestion].options[3];
}

loadQuestion();

// Check Answer
function checkAnswer(option) {
  if (option === questions[currentQuestion].answer) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }

  document.getElementById("score").innerText = "Score: " + score;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz Over! Your final score is: " + score);
  }
}
