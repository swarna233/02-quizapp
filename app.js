const question = [
  {
    question: "What is the capital of France?",
    answer: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question:
      "In which year did Christopher Columbus first reach the Americas?",
    answer: [
      { text: "1492", correct: true },
      { text: "1620", correct: false },
      { text: "1776", correct: false },
      { text: "1812", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Hg", correct: false },
    ],
  },
  {
    question: "Which element has the atomic number 1?",
    answer: [
      { text: "Helium", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Carbon", correct: false },
    ],
  },
  {
    question: "What is the largest mammal on Earth?",
    answer: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Polar Bear", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answer: [
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Which scientist developed the theory of general relativity?",
    answer: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Stephen Hawking", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("scoreDisplay");

let currentQuestionIndex = 0;
let score = 0;

nextBtn.addEventListener("click", showQuestion);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";

  showQuestion();
}

function showQuestion() {
  answerButtons.innerHTML = "";

  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => checkAnswer(answer.correct));
    answerButtons.appendChild(button);
  });

  currentQuestionIndex++;
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    score++;
  }

  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    scoreDisplay.innerHTML = "Quiz finished. Score: " + score;
    questionElement.innerHTML = "";
    answerButtons.innerHTML = "";
  }

  if (score < 5) {
    scoreDisplay.style.color = "#ff5925";
  } else if (score >= 5) {
    scoreDisplay.style.color = "green";
  }
}

startQuiz();
