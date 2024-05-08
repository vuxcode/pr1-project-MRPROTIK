
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
var index = 0;
function Quize(){
    var output = document.getElementById("question");
    // SHOW THE CURRENT QUESTION
    output.innerHTML = (question[index]);
    // WHAT HAPPENS NEXT? You wanted to update the index number!!!!!!!!
    index++;
    var output = document.getElementById("option");
    output.innerHTML = (option[index]);
    index++;
    var output = document.getElementById("answer");
    output.innerHTML = (answer[index]);
    index++;
}