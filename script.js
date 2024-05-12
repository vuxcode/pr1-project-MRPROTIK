
// Here is our question i set for the user
var q1 = "What is the Largest country in the world?";
var q2 = "What is the biggest animal in the world?";
var q3 = "What is the countries with the largest population 2024?";
var q4 = "What is the Largest sea in the world?";
var q5 = "What is the Longest beach in the world?";

// Here is the multiple option for every question
var o1 = ["A) Russia",  "B) India",  "C) Sweden",  "D) U.S.A"];
var o2 = ["A) Elephant",  "B) Ziraph",  "C) Blue whale",  "D) Lion"];
var o3 = ["A) China",  "B) England",  "C) India",  "D) Russia"];
var o4 = ["A) Mediterranean Sea",  "B) Caribbean Sea",  "C) Bering Sea",  "D) The East China Sea"];
var o5 = ["A) Padre Island(U.S.A)",  "B) Praia do Cassino(Brazil)",  "C) Cox's Bazar Beach(Bangladesh)", "D) Ninety Mile Beach(Australia)"]

// Here is the correct answer for every question

var a1 = "A) Russia";
var a2 = "C) Blue whale";
var a3 = "C) India";
var a4 = "B) Caribbean Sea";
var a5 = "B) Praia do Cassino(Brazil)"

// Here i create a array for every question, answere and correct answere
var question = [q1, q2, q3, q4, q5];
var option = [o1, o2, o3, o4, o5];
var answer = [a1, a2, a3, a4, a5];

// creat a question opttion reference to HTML elements
var questionElement = document.getElementById("question");
var option1Element = document.getElementById("option1")
var option2Element = document.getElementById("option2")
var option3Element = document.getElementById("option3")
var option4Element = document.getElementById("option4")
var answerElement = document.querySelectorAll("options");
// Here i am initialize the index
var index = 0;


// Wrap the code in a function that executes after the HTML content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create an array of radio button elements
    var answer = [
        document.getElementById('ans1'),
        document.getElementById('ans2'),
        document.getElementById('ans3'),
        document.getElementById('ans4')
    ];

    // Function to check the selected answer
    function checkAnswer() {
        var ans;
        answer.forEach(curElement => {
            if (curElement.checked) {
                ans = curElement.id;
          
            }
        });
        return ans;
    }



// function to move to the next question
function nextQuestion(){

    index++

    if(index < question.length){
        displayQuestion();
    }
    else{
        alert("End the quize");
    }
}
// Here i Display the currrent question and option
function displayQuestion(){
    questionElement.innerHTML = question[index];
    option1Element.innerHTML = option[index][0];
    option2Element.innerHTML = option[index][1];
    option3Element.innerHTML = option[index][2];
    option4Element.innerHTML = option[index][3];
    
    }
    displayQuestion();
    var nextButton = document.querySelector(".btn button");
    nextButton.addEventListener("click", function(){
        var seletedAnswer = checkAnswer();
        nextQuestion();
    });
});