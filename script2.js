const questions = [
    {
        question: "What is your name?",
        answers: [
            {text: "Motiur", correct: true},
            {text: "MD", correct: false},
            {text: "Rahman", correct: false},
            {text: "Protik", correct: false},
            
        ]

    },

    {
        question: "What is your wife name?",
        answers: [
            {text: "Khatun", correct: false},
            {text: "HK", correct: false},
            {text: "Kona", correct: false},
            {text: "Hazera", correct: true},
            
        ]

    },

    {
        question: "Where do you live?",
        answers: [
            {text: "Sköve", correct: true},
            {text: "Göteborg", correct: false},
            {text: "Malmo", correct: false},
            {text: "Dhaka", correct: false},
            
        ]

    },
    {
        question: "What do you want to do?",
        answers: [
            {text: "Job", correct: false},
            {text: "IT", correct: false},
            {text: "Buiseness", correct: true},
            {text: "Nothing", correct: false},
            
        ]

    },
    {
        question: "What do you like to eat?",
        answers: [
            {text: "Rice", correct: true},
            {text: "Pasta", correct: false},
            {text: "Bread", correct: false},
            {text: "Water", correct: false},
            
        ]

    },
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-Buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
  nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentquestion = questionNo[currentQuestionIndex];
    let questionNo = currentQuestionIndex ++;
    questionElement.innerHTML= questionNo + " . " + currentquestion.question;


currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.corect){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChildren){
        answerButtons.removChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBTn = e.target;
    const isCorrect = selectBTn.dataset.correct === "true";
    if(isCorrect){
        selectBTn.classList.add("correct");
        score++;
        
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "True"){
        button.classList.add("correct");

    }
    button.disable = true;
    nextButton.style.display = "block";
})

}
function handelNextButton(){
    currentQuestion++;
    if(currentQuestionIndex < question.length){
        showQuestion();

    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML="you scored §{score} out of § {question.length}!";

    nextButton.innerHTML= "Play Again"
    nextButton.style.display ="block";
}



nextButton.addEventListener("click", () =>{ if(currentQuestionIndex < question.length){  handelNextButton()
)}}   
  

}
 



startQuiz();