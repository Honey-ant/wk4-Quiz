const startButton = document.getElementById("Start")
const nextButton = document.getElementById("next")
const questioncontainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
const correctAnswer = document.querySelector(".correct")
var timerElement = document.querySelector(".timer-count");
const timeCard = document.getElementById("time")
const container = document.querySelector(".container")
const submitForm = document.querySelector(".submit-form")
const highScores = document.querySelector(".highscore-container")
var win = document.querySelector(".win");
// var scoreForm = $('#score-form');
// var scoreList = $("'score-list');
var timer;
var timerCount;


let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener("click", startGame, showQuestion)
// correctAnswer.addEventListener("click", () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })

function initForm() {
    getCorrect();
}

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questioncontainerElement.classList.remove("hide")
    timeCard.classList.remove("hide")
   // nextButton.classList.remove("hide")
   // (nextButton).remove("hide")
   timerCount = 60;
    setNextQuestion()
    startTimer()
    
}

function getWins() {
    //Get stored value from clientstorage, if it exists
    var storedCorrect = localStorage.getItem("scoreCount");
    if (storedCorrect === null) {
        winCounter = 0;
    } else {
        winCounter = storedCorrect;
    }
    win.textContent = win
}

 startButton.addEventListener("click", function (event) {
     var element = event.target;

     if (element.matches(".correct")) {
         var state = element.getAttribute("class");
             if (state === "correct") {
                 setNextQuestion()
             } 
         
     }
 })

function setNextQuestion() {
    resetState()
 showQuestion(shuffledQuestions [currentQuestionIndex])
} 



function showQuestion(question){
    questionElement.innerText = question.question
      question.answer.forEach(answer => {
       const button = document.createElement('button')
      button.innerText = answer.text
        button.classList.add('btn')
        //adds a class of 'correct' to the correct answer buttons
        if (answer.correct) {
           button.dataset.correct = answer.correct
          button.classList.add('correct')
        }
       button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    }); 
}

function resetState() {
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

//correctAnswer.addEventListener("click", selectAnswer, showQuestion, resetState)
//
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.querySelector(".btn"), correct)
    Array.from(answerButtonsElement.children).forEach(button =>  {
        setStatusClass( button, button.dataset.correct)
    })
    // correctAnswer.addEventListener("click", function (event) {
    //     var element = event.target;
   
    //     if (element.matches(".correct")) {
    //         var state = element.getAttribute("class");
    //             if (state === "correct") {
    //                 setNextQuestion()
    //             } 
            
    //     }
    // })
    resetState()
    setNextQuestion()
}
//when the correct anser is selected, the next question should be presented.
//correctAnswer.addEventListener("click", setNextQuestion, showQuestion)

//correctAnswer.addEventListener("click", showQuestion, setNextQuestion)

answerButtonsElement.addEventListener("click", function(event){
    var element = event.target;

    if (element.matches(".correct")) {
        setNextQuestion()
    }
})

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//clears questions when timer runs out
function quizFin() {
    console.log("Quiz finished")
    questioncontainerElement.classList.add("hide")
    container.textContent = "Quiz Fin";
    submitForm.classList.remove("hide")
    timeCard.classList.add("hide")
    initForm()
}
// startTimer function starts the timer
function startTimer() {
    //Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            quizFin();
        }
    }, 1000);
}

// var scoreForm = document.getElementById("score-form");
// var scoreList = document.getElementById("score-list");

// function handleScoreSubmit(event) {
//   highScores.classList.remove('hide')    
//     event.preventDefault();
  
//     var scoreName = $('input[name="score-input"]').val();

//     if (!scoreName) {
//         console.log('No name filled out in form!');
//         return;
//     }

//     var scoreList = $(
//         //the listed item element will be added
//         '<li class>'
//     );
//     scoreList.text(scoreName);
//     // print to page
//     scoreList.append(scoreList);

//     $('input[name="score-input"]').val('');
// }

// scoreForm.on('submit', handleScoreSubmit);

// function initForm() {
//     getCorrect()

// }

const questions = [
    {
        question: 'What does HTML mean?',
        answer: [
            {text: 'Hyperlink text Manual Language', correct: false},
            {text: 'Hypertext Markup Language', correct: true},
            {text: 'HyperTone Mail Link', correct: false},
            {text: 'HypnoText Mega Lanuage', correct:false}
        ]
    },
    {
        question:'What does CSS stand for?',
        answer: [
            {text: "Casandra Sylvia Stoks", correct: false},
            {text: "Cambridge Sailing Society", correct: false},
            {text: "Cascading Styling Sheet", correct: true},
            {text: "Tasm", correct: false}
        ]
    },
    {
        question:'What is the <link> tag used for in HTML?',
        answer: [
            {text: "Yes", correct: false},
            {text: "Linking to an external style sheet", correct: true},
            {text: "Linking to an external Javascript file", correct: false},
            {text: "Nothing", correct: false}
        ]
    },

    {
        question: 'What is the signifigance of the location fo the MCG?',
        answer: [
            {text: "there is none", correct: false},
            {text: "Meeting place for the Kulin nation to decide new laws", correct: true},
            {text: "Where sports games were held", correct: false},
            {text: "Was a woman's area", correct: false}
        ]
    }

]

