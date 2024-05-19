var questions = [
    "Q.1: What is the Largest country in the world?",
    "Q.2: What is the biggest animal in the world?",
    "Q.3: What is the country with the largest population in 2024?",
    "Q.4: What is the Largest sea in the world?",
    "Q.5: What is the Longest beach in the world?",
    "Q.6: What is the largest rainforest in the world?",
    "Q.7: What is the Biggest Airport in the world?",
    "Q.8: What is the Largest Desert in the world?",
    "Q.9: What is the Largest City by Population in the world?",
    "Q.10: What is the tallest building in the world?"
];

var options = [
    ["A) Russia", "B) India", "C) Sweden", "D) U.S.A"],
    ["A) Elephant", "B) Giraffe", "C) Blue whale", "D) Lion"],
    ["A) China", "B) England", "C) India", "D) Russia"],
    ["A) Mediterranean Sea", "B) Caribbean Sea", "C) Bering Sea", "D) The East China Sea"],
    ["A) Padre Island(U.S.A)", "B) Praia do Cassino(Brazil)", "C) Cox's Bazar Beach(Bangladesh)", "D) Ninety Mile Beach(Australia)"],
    ["A) Amazon Rainforest", "B) Congo Basin", "C) Sundorbon", "D) New Guinea Rainforest"],
    ["A) King Fahd International", "B) Denver International", "C) Orlando International", "D) Shanghai Pudong International"],
    ["A) Antarctic Polar Desert", "B) Arctic Polar Desert", "C) Sahara Desert", "D) Arabian Desert"],
    ["A) Delhi", "B) Dhaka", "C) Mumbai", "D) Tokyo"],
    ["A) Merdeka 118", "B) Burj Khalifa", "C) Shanghai Tower", "D) Lotte World Tower"]
];

var correctAnswers = [
    "A) Russia",
    "C) Blue whale",
    "C) India",
    "B) Caribbean Sea",
    "B) Praia do Cassino(Brazil)",
    "A) Amazon Rainforest",
    "A) King Fahd International",
    "C) Sahara Desert",
    "D) Tokyo",
    "B) Burj Khalifa"
];

var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("options");
var nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    var currentQuestion = questions[currentQuestionIndex];
    var currentOptions = options[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion;
    
    currentOptions.forEach((option, index) => {
        var button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (option === correctAnswers[currentQuestionIndex]) {
            button.dataset.correct = true;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = "You scored " + score + " out of " + questions.length;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();



