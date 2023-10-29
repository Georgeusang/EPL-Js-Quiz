const footballClub = [   
     {
    Question: "which of this clubs are in England?",
    Answers: [{ text: "Arsenal", correct: "True"},
              {  text: "Barcelona", correct: "False"},       
              {  text: "AC Milan", correct: "False"},       
              {  text: " Parma", correct: "False"} ]      
},
     {
    Question: "which of this club as won the european Champions League?",
    Answers: [{ text: "Arsenal" , correct: "False" },
              {  text: "Barcelona" , correct: "True" },       
              {  text: "Brighton" , correct: "False" },       
              {  text: " Parma" , correct: "False" } ]      
},
     {
    Question: " which of these clubs was coached by Asene Wenger?",
    Answers: [{ text: "Arsenal" , correct: "True" },
              {  text: "Real Betis" , correct: "False" },       
              {  text: "Inter Milan" , correct: "False" },       
              {  text: " Enyimba  " , correct: "False" } ]      
},
     {
    Question: "which is the best Club in the world?",
    Answers: [{ text: "Arsenal" , correct: "True" },
              {  text: "Chelsea" , correct: "False" },       
              {  text: " Juventus" , correct: "False" },       
              {  text: " Rovers of calabar", correct: "False" } ]      
},

];

const newQuestion = document.getElementById("question-sec");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const newMessage = document.getElementById("message");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() { 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){   
    reset();   
    let CurrentQuestion = footballClub[currentQuestionIndex];
    let  questionNo = currentQuestionIndex + 1;
    newQuestion.innerHTML =  questionNo + ". " + CurrentQuestion.Question;

    CurrentQuestion.Answers.map((answer) =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn1");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}
function reset(){    
    nextButton.style.display = "none";
    while(answerButton.firstChild){ 
        answerButton.removeChild(answerButton.firstChild);}
        
}

function selectAnswer(statement){  
    const sButton = statement.target;
    const isCorrect = sButton.dataset.correct === "True";


    if(isCorrect){
        sButton.classList.add("correct-answer");
        score ++;                                           
    } else {    
        sButton.classList.add("wrong-answer");
    }
    Array.from(answerButton.children).forEach(button => {
     if(button.dataset.correct === "True"){
        button.classList.add("correct-answer");
     }
     button.disabled = true;
    });
      nextButton.style.display = "block";
}

function showScore(){
    reset();
    newQuestion.innerHTML = `you scored ${score} out of ${footballClub.length}!`;
    nextButton.innerHTML = "Try Again";
    let po = document.createElement("div");
    po.innerHTML = "<h1>THANKS KODECAMP FOR THE OPPORTUNITY</h1>"
    newMessage.appendChild(po);
    // nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < footballClub.length){
        showQuestion();
    }else{ 
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < footballClub.length) {
    handleNextButton();
    }else{
         startQuiz()
    }
});

startQuiz();

