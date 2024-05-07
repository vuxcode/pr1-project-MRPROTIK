var q1 = "What is the Largest country in the world?";
var q2 = "What is the biggest animal in the world?";
var q3 = "What is the countries with the largest population 2024?";
var q4 = "What is the Largest sea in the world?";
var q5 = "What is the Longest beach in the world?";


var question = [q1, q2, q3, q4, q5];
//var myButton = document.getElementById("button1");
//myButton.addEventListener("click", question);


//function question(){

function askQuestion(question){
    var answere = prompt(question);
    return answere;
}
// function for run the quize
function runQuize(){
    var score = 0;
    for ( var i = 0; i < question.length; i++){
        var userAnswer = askQuestion(question[i]);
        score++
    }
    alert("quize comnpleted! Your score is: " + score + " / " + question.length);
}
runQuize();










/*const questions = [
    {
    question: "What is the Largest country in the world?",
    options: ["Vatikan city", "England", "America", "Russia"],
    answer: "Russia"},

    {
    question: "What is the countries with the largest population 2024?",
    options: ["China", "England", "India", "Russia"],
    answer: "India"
    },

    {
    question: "What is the biggest animal in the world?",
    options: ["Elephant", "Ziraph", "Blue whale", "Lion"],
    answer: "Blue whale"
},

{
    question: "What is the Largest sea in the world?",
    options: ["Mediterranean Sea", "Caribbean Sea", "Bering Sea", "The East China Sea"],
    answer: "Mediterranean Sea"
},

{
    question: "What is the Largest bird in the world?",
    options: ["Greater Rhea", "Cassowary", "Dalmatian Pelican", "Ostrich"],
    answer: "Ostrich"

},

{
    question: "What is the Largest tree in the world?",
    options: ["General Sherman", "General Grant", "President", "King Arthur"],
    answer: "General Sherman"

},

{
    question: "What is the Longest beach in the world?",
    options: ["Padre Island(U.S.A)", "Praia do Cassino(Brazil)", "Cox's Bazar Beach(Bangladesh)", "Ninety Mile Beach(Australia)"],
    answer: "Praia do Cassino(Brazil)"
},

{
    question: "What is the Longest Road Network country in the world?",
    options: ["China", "India", "U.S.A", "Russia"],
    answer: "U.S.A"
},

{
    question: "What is the Longest River in the world?",
    options: ["Mississipi River", "Yellow River", "Amazon River", "Nile River"],
    answer: "Nile River"
},
{
    question: "What is the Largest lake in the world?",
    options: ["Lake Superior", "Lake Viktoria", "Lake Michigan", "Caspian sea"],
    answer: "Caspian sea"

}
];*/

