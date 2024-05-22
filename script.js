
// First we set question variable in Array file
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
// After Question file we set multiple option avrriable in array file  
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
// After Question and option file we set correctanswer option avrriable in array file  
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
  // Get the all button and class elements by their ID

var Quizcontainer = document.getElementById("Quiz_container")
var titleIdElement = document.getElementById("title");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("options");
var nextButton = document.getElementById("next-btn");
var timerElement = document.getElementById("time");
var FirstButton = document.querySelector(".First-btn button");
var infoBox = document.getElementById("info-box");
var infoButton = document.getElementById("start-btn");


// Hide the infoBox and quizSection initially
FirstButton.style.display = "none";
infoBox.style.display = "none";
Quizcontainer.style.display = "none"
titleIdElement.style.display = "none"
questionElement.style.display = "none";
answerButtons.style.display = "none";
nextButton.style.display = "none";
timerElement.style.display = "none";


// Show the info box clicking lets play button
FirstButton.onclick = () => {
    // Hide the FirstButton and infoBox when clicked
    FirstButton.style.display = "none";
    Quizcontainer.style.display = "none"
    infoBox.style.display = "block";
    titleIdElement.style.display = "none"
    questionElement.style.display = "none";
    answerButtons.style.display = "none";
    nextButton.style.display = "none";
    timerElement.style.display = "none";
    timerElement.style.display = "none";
}

// Show the main quiz clicking Ready button

FirstButton.style.display = "block";
infoButton.onclick = () =>{
    FirstButton.style.display = "none";
    Quizcontainer.style.display = "block"
    infoBox.style.display = "none";
    titleIdElement.style.display = "none"
    questionElement.style.display = "block";
    answerButtons.style.display = "block";
    nextButton.style.display = "block";
    timerElement.style.display = "block";
    startQuiz();
}

// Here initilize the first question
// WE will start the first question
var currentQuestionIndex = 0;
// When we start with first question our score will be zero
var score = 0;
// We hav only 20 seconds for each question
var timeLeft = 20;

// Now we can set a function for start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
   
}
// Here we set function called strat timer for each question
function startTimer() {
    timeLeft = 20;
    timerElement.textContent = timeLeft;
    clearInterval(window.timer);
    window.timer = setInterval(() =>{
        timeLeft -= 1;
        timerElement.textContent = timeLeft;
        if(timeLeft <= 0){
            // if time is over it will automatically go to next question
            clearInterval(window.timer);
            // so here is our nextButton if time is up
            handleNextButton();


        }
    }, 1000);// it will count with mili second
}

// Now its time to show the real question 
 function showQuestion() {
    resetState();// we set resetState for the reset timer, question and option in each question
    var currentQuestion = questions[currentQuestionIndex];
    var currentOptions = options[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion;
    // here we set foreach to target every optoin for every question
    currentOptions.forEach((option, index) => {
        // Here we creat a new button for optoinelement
        var button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (option === correctAnswers[currentQuestionIndex]) {
            button.dataset.correct = true;
        }
        // we also use addEvenListener to select the option argument set

        button.addEventListener("click", selectAnswer);
    });
    startTimer();
}
// we need to defien resetState so here is a function for that
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }}

/*This loop removes all child elements from the AnswerButton element.
answerButtons.firstChild Returns the first child node of the answerButton element.
answerButtons.removeChild(answerButtons.firstChild) removes that child node.
The while loop continues as long as AnswerButton has any child nodes. */

// Here is slectanswer function to show correct answer
function selectAnswer(e) {
    // here we create two new varriable for target the correct answer
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    // Here we creat a if statment for Scring and see the correct answer
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {// else for showing incorrect result if user select wrong answer
        selectedBtn.classList.add("incorrect");
    }
// Here we create a array form for every correct option for each question
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // when user will select a optoin next button will show imedietly
    nextButton.style.display = "block";
}
// after finishing all question it time to see the score
function showScore() {
    resetState();
    clearInterval(window.timer); // Stop the timer
    var percentage = (score / questions.length) * 100; // Calculate the percentage
    questionElement.innerHTML = "You scored " + score + " out of " + questions.length + ". Your percentage: " + percentage.toFixed(2) + "%";
    // If user want play again then it directly start the quiz
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    timerElement.style.display = "none";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
        /*This part is cheking if the current question index 
        is less than the total number of questions it will move the next question */
    } else {
        startQuiz();
        /*If currentQuestionIndex is not 
        less than the length of the questions array
         it calls the startQuiz function. */
    }
});
// Here is set a function for next button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        startTimer();
    } else {
        showScore();
    }
}
// Finaly we can start the quiz

