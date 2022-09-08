const quizData = [
    {
        question: "Time complexity to search in an array in the worst-case scenario ?",
        a: "O(1)",
        b: "O(n)",
        c: "O(log(n)",
        d: "O(n^2)",
        correct: "b",
    },
    {
        question: "Time complexity of a Binary Search in the worst-case scenario ?",
        a: "O(1)",
        b: "O(n)",
        c: "O(log(n)",
        d: "O(n^2)",
        correct: "c",
    },
    {
        question: "Time complexity to insert in Binary Search Tree in the worst-case scenario ?",
        a: "O(1)",
        b: "O(n)",
        c: "O(log(n)",
        d: "O(n^2)",
        correct: "c",
    },
    {
        question: "Time complexity to delete in a Stack in the worst-case scenario ?",
        a: "O(1)",
        b: "O(n)",
        c: "O(log(n)",
        d: "O(n^2)",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        if(answer !== quizData[currentQuiz].correct) {
            window.alert("Sorry the right answer is "+ quizData[currentQuiz].correct)
        }

        currentQuiz++


        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})