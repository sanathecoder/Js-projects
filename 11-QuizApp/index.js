const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]

    },
    {
        question: "What gas do humans breathe in?",
        answers: [
            { text: "Water", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Hydrogen", correct: false }
        ]

    },
    {
        question: "How many days are in a leap year?",
        answers: [
            { text: "366", correct: true },
            { text: "365", correct: false },
            { text: "364", correct: false },
            { text: "360", correct: false }
        ]

    },
    {
        question: "What is the capital of England?",
        answers: [
            { text: "Islamabad", correct: false },
            { text: "New York", correct: false },
            { text: "Tokyo", correct: false },
            { text: "London", correct: true }
        ]

    }
];

const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-btn')
const nextButton = document.getElementById('next-btn')
let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = 'Next'
    showQuestion()
}

function showQuestion() {
    resetState()
    let QuestionNO = currentQuestionIndex + 1
    let currentQuestion = questions[currentQuestionIndex]
    questionElement.innerHTML = QuestionNO + '.' + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
    const button  = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add('btn')
    answerButton.appendChild(button)
    if(answer.correct){
        button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selectAnswer)
    
    
});

}

function resetState(){
    nextButton.style.display = 'none'
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === 'true'
    if(isCorrect){
        selectBtn.classList.add('correct')
        score++
    }else{
        selectBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = 'block'
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you score ${score} out of ${questions.length}!`
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz()