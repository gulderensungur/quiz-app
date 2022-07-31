const questions = [
  {
    number: 1,
    question: "What is the month of Gulderen's birth?",
    a: "September",
    b: "October",
    c: "November",
    d: "December",
    correct_answer: "c",
  },
  {
    number: 2,
    question: "What is her favorite activity?",
    a: "Reading",
    b: "Flirting her bf",
    c: "Swimming",
    d: "Cooking",
    correct_answer: "b",
  },
  {
    number: 3,
    question: "What job did she want to do as a child?",
    a: "Doctor",
    b: "Teacher",
    c: "Writer",
    d: "Traveller",
    correct_answer: "c",
  },
  {
    number: 4,
    question: "What is her biggest fear?",
    a: "Failure",
    b: "Getting Old",
    c: "Supernatural things",
    d: "Being Alone",
    correct_answer: "b",
  },
  {
    number: 5,
    question: "Where is her birthmark?",
    a: "Right arm",
    b: "Her back",
    c: "Above right eye",
    d: "Left hip",
    correct_answer: "a",
  },
  {
    number: 6,
    question: "Where is her favorite TV Series?",
    a: "Brooklyn 99",
    b: "Sherlock Holmes",
    c: "Big Bang Theory",
    d: "Game of Thrones",
    correct_answer: "b",
  },
];

const answers = [...document.querySelectorAll(".answer")];
const questionEl = document.getElementById("question");
const quizEl = document.getElementById("quiz");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submitBtn");

let currentQuestion = 0;
let currentQuizData = 0;
let score = 0;

loadData();

function loadData() {
  deselectedAswers();
  const currentQuiz = questions[currentQuestion];

  questionEl.textContent = currentQuiz.question;
  a_text.textContent = currentQuiz.a;
  b_text.textContent = currentQuiz.b;
  c_text.textContent = currentQuiz.c;
  d_text.textContent = currentQuiz.d;

  currentQuestion++;
}

function getSelect() {
  let answer = undefined;

  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
      console.log(answer);
    }
  });
  return answer;
}

function deselectedAswers() {
  answers.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelect();

  if (answer) {
    if (answer === questions[currentQuizData].correct_answer) {
      score++;
    }
    currentQuizData++;

    if (currentQuizData < questions.length) {
      loadData();
    } else {
      if (score <= 3) {
        quizEl.innerHTML = `<h2>You answered correctly  ${score}/ ${questions.length} questions</h2>
        <p>Shame on you!</p>`;
      } else if (score >= 4 && score <= 5) {
        quizEl.innerHTML = `<h2>You answered correctly  ${score}/ ${questions.length} questions</h2>
        <p>You should have known me better.</p>`;
      } else if (score === 6) {
        quizEl.innerHTML = `<h2>You answered correctly  ${score}/ ${questions.length} questions</h2>
        <p style = "color:green">Well done! You know me well :)</p>`;
      }
    }
  }
});

console.log(questions[currentQuestion]);
console.log(questions.length);
