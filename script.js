const restartButton = document.getElementById("reiniciar");

const questions = [
    {
        question: "Quando a Segunda Guerra Mundial chegou ao fim?",
        options: ["1941", "1945", "1954", "1971"],
        answer: 1,
        image: "guerra.jpeg"
    },
    {
        question: "Qual a menor partícula visível da matéria?",
        options: ["Átomo", "Molécula", "Próton", "Elétron"],
        answer: 0,
        image: "atomo.jpg"
    },
    {
        question: "Qual o valor de x na equação x+7 = 14",
        options: ["3", "5", "7", "9"],
        answer: 2,
        image: "equacao.jpeg"
    },
    {
        question: "qual o tipo de relevo é esse?",
        options: ["Montanha", "Depressão", "Planalto", "Vale"],
        answer: 1,
        image: "depressao.jpeg"
    },
    {
        question: "Essa bandeira é de qual país?",
        options: ["Eslovênia", "Croácia", "Áustria", "Eslováquia"],
        answer: 0,
        image: "eslovenia.jpg"
    },
    
    
];

let currentQuestionIndex = 0;
let score = 0;
let errorCount = 0;

const questionElement = document.getElementById("question");
const imageElement = document.getElementById("image");
const optionElements = [
    document.getElementById("opcao1"),
    document.getElementById("opcao2"),
    document.getElementById("opcao3"),
    document.getElementById("opcao4")
];
const scoreElement = document.getElementById("pontuacao");

function loadQuestion(index) {
    if (index < questions.length) {
        const currentQuestion = questions[index];
        questionElement.textContent = currentQuestion.question;
        imageElement.src = currentQuestion.image;
        for (let i = 0; i < optionElements.length; i++) {
            optionElements[i].textContent = currentQuestion.options[i];
            optionElements[i].addEventListener("click", () => checkAnswer(i));
        }
    } else {
        
        questionElement.textContent = "Parabéns! Você completou o quiz!";
        imageElement.src = "parabens.jpeg";
        document.body.style.backgroundColor = "";
        document.getElementById("mensagem").innerHTML = "";
        for (const optionElement of optionElements) {
            optionElement.style.display = "none"; 
        }
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score += 10;
        scoreElement.textContent = score;
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        document.body.style.backgroundColor = "";
    } else {
       
        document.body.style.backgroundColor = "darkred";
        document.getElementById("mensagem").innerHTML = "Resposta incorreta, apenas mais uma chance!";
    } 
}
restartButton.addEventListener("click", () => {
    window.location.href = "index.html"; 
});

loadQuestion(currentQuestionIndex);



















