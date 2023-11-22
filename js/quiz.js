var questions = [
  {
    question: "Who directed 'The Lord of the Rings' film trilogy?",
    options: [
      "Peter Jackson",
      "Steven Spielberg",
      "Christopher Nolan",
      "Ridley Scott",
    ],
    answer: "Peter Jackson",
  },
  {
    question: "What is the name of the hobbit who inherits the One Ring?",
    options: [
      "Frodo Baggins",
      "Samwise Gamgee",
      "Peregrin Took",
      "Meriadoc Brandybuck",
    ],
    answer: "Frodo Baggins",
  },
  {
    question: "Which city is Aragorn destined to become the king of?",
    options: ["Minas Tirith", "Rivendell", "Hobbiton", "Gondor"],
    answer: "Minas Tirith",
  },
  {
    question:
      "Who composed the music for 'The Lord of the Rings' film trilogy?",
    options: ["Hans Zimmer", "Howard Shore", "John Williams", "Danny Elfman"],
    answer: "Howard Shore",
  },
  {
    question:
      "What is the Elvish word for 'friend' that opens the door of Moria?",
    options: ["Mellon", "Elendil", "Ainur", "Namarie"],
    answer: "Mellon",
  },
  {
    question: "Which actor portrayed Gandalf?",
    options: [
      "Ian McKellen",
      "Christopher Lee",
      "Viggo Mortensen",
      "Sean Bean",
    ],
    answer: "Ian McKellen",
  },
  {
    question:
      "What creature does Frodo encounter in the caves of Cirith Ungol?",
    options: ["Balrog", "Shelob", "Gollum", "Saruman"],
    answer: "Shelob",
  },
  {
    question:
      "What is the name of the final battle in 'The Return of the King'?",
    options: [
      "Battle of Helm's Deep",
      "Battle of the Pelennor Fields",
      "Battle of the Black Gate",
      "Siege of Minas Tirith",
    ],
    answer: "Battle of the Black Gate",
  },
  {
    question: "Who is the steward of Gondor until Aragorn becomes king?",
    options: ["Boromir", "Denethor", "Faramir", "Theoden"],
    answer: "Denethor",
  },
  {
    question:
      "What is the source material for the 'The Lord of the Rings' movie trilogy?",
    options: ["Manga", "Novel", "Video Game", "Original screenplay"],
    answer: "Novel",
  },
];

var currentQuestion = 0;
var score = 0;

var questionContainer = document.getElementById("question-container");
var resultContainer = document.getElementById("result-container");
var nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  var question = questions[currentQuestion];
  var optionsHtml = "";

  for (var i = 0; i < question.options.length; i++) {
    optionsHtml += `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer" id="option${i}" value="${question.options[i]}">
        <label class="form-check-label" for="option${i}">${question.options[i]}</label>
      </div>
    `;
  }

  var questionHtml = `
    <h3>${question.question}</h3>
    <form id="answer-form">
      ${optionsHtml}
    </form>
  `;

  questionContainer.innerHTML = questionHtml;
}

function checkAnswer() {
  var selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    var userAnswer = selectedOption.value;
    var correctAnswer = questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
      score++;
    }

    currentQuestion++;

    selectedOption.checked = false;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
}

function showResult() {
  var resultHtml = `
    <h3>Quiz Result</h3>
    <p>Your score: ${score} out of ${questions.length}</p>
  `;

  resultContainer.innerHTML = resultHtml;
  nextBtn.disabled = true;
}

loadQuestion();

nextBtn.addEventListener("click", checkAnswer);
