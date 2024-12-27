
let questionCount = 0; // Compteur de questions
let scoreCount = 0; // Score utilisateur
let countdown; // Minuteur

const quizArray = [
    {
        id:"1",
        question: "Quelle est la spécialité de Pascal Vicat-Blanc ?",
        options: ["Réseaux informatiques", "Cybersécurité", "Intelligence Artificielle", "Systèmes distribués"],
        correct: "Systèmes distribués",
    },
    {
        id:"2",
        question: "Quel est le domaine de recherche principal de Pascal Vicat-Blanc ?",
        options: ["Cloud Computing", "Data Mining", "Sécurité réseau", "Virtualisation"],
        correct: "Virtualisation",
    },
    {
        id:"3",
        question: "En quelle année Pascal Vicat-Blanc a-t-elle fondé la société Lyatiss ?",
        options: ["2010", "2008", "2012", "2015"],
        correct: "2010"
    },
    {
        id:"4",
        question: "Quelle entreprise a été fondée par Pascal Vicat-Blanc ?",
        options: ["Lyatiss", "Oracle", "Amazon Web Services", "Cisco"],
        correct: "Lyatiss",
    },
    {
        id:"5",
        question: "Quel est l'un des principaux objectifs de ses recherches ?",
        options: ["Optimisation des flux de données dans le cloud", "Développement d'algorithmes IA", "Cyberattaques", "Gestion de bases de données"],
        correct: "Optimisation des flux de données dans le cloud",
    },
    {
        id:"6",
        question: "Pascal Vicat-Blanc est une experte dans quel domaine technologique émergent ?",
        options: ["Edge Computing", "Blockchain", "Virtualisation", "Machine Learning"],
        correct: "Virtualisation",
    },
    {
        id:"7",
        question: "Quel poste Pascal Vicat-Blanc a-t-elle occupé avant de fonder Lyatiss ?",
        options: ["Chercheuse CNRS", "Professeur à l'Université", "Directrice technique chez Cisco", "Consultante chez IBM"],
        correct: "Chercheuse CNRS",
    },
    {
        id:"8",
        question: "Quel domaine Pascal Vicat-Blanc a-t-elle exploré avec le projet Grid5000 ?",
        options: ["Cloud Computing", "IoT", "Big Data", "Blockchain"],
        correct: "Cloud Computing",
    },
    {
        id:"9",
        question: "Quelle technologie est clé dans ses recherches sur le cloud ?",
        options: ["Virtualisation", "5G", "Containers", "Deep Learning"],
        correct: "Virtualisation",
    },
    {
        id:"10",
        question: "Quelle est une contribution majeure de Pascal Vicat-Blanc ?",
        options: ["Amélioration des protocoles TCP", "Création d'un système d'IA", "Développement de réseaux 5G", "Conception de langages de programmation"],
        correct: "Amélioration des protocoles TCP",
    }
    // Ajoutez d'autres questions ici
];

// Commencer le quiz
document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector(".start-screen").classList.add("hide");
    document.querySelector(".display-container").classList.remove("hide");
    initializeQuiz();
});

// Réinitialiser le quiz
document.querySelector("#restart").addEventListener("click", () => {
    initializeQuiz();
    document.querySelector(".score-container").classList.add("hide");
    document.querySelector(".display-container").classList.remove("hide");
});

// Passer à la question suivante
document.querySelector("#next-button").addEventListener("click", () => {
    questionCount++;
    if (questionCount === quizArray.length) {
        document.querySelector(".display-container").classList.add("hide");
        document.querySelector(".score-container").classList.remove("hide");
        document.querySelector("#user-score").innerText = `Votre score : ${scoreCount} sur ${quizArray.length}`;
    } else {
        showQuestion(questionCount);
    }
});

// Initialiser le quiz
function initializeQuiz() {
    questionCount = 0;
    scoreCount = 0;
    clearInterval(countdown);
    createQuestions();
    showQuestion(questionCount);
    startTimer();
}

// Créer dynamiquement les questions
function createQuestions() {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    quizArray.forEach((quiz, index) => {
        const div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        // Question
        const questionDiv = document.createElement("p");
        questionDiv.classList.add("question");
        questionDiv.innerText = quiz.question;
        div.appendChild(questionDiv);

        // Mélanger les options et les créer
        quiz.options.sort(() => Math.random() - 0.5); // Mélange correct
        quiz.options.forEach((option) => {
            const button = document.createElement("button");
            button.classList.add("option-div");
            button.innerText = option;
            button.onclick = () => checkAnswer(button, quiz.correct);
            div.appendChild(button);
        });

        container.appendChild(div);
    });
}

// Afficher une question spécifique
function showQuestion(index) {
    const questions = document.querySelectorAll(".container-mid");
    questions.forEach((q) => q.classList.add("hide"));
    questions[index].classList.remove("hide");

    document.querySelector(".number-of-question").innerText = `${index + 1} sur ${quizArray.length}`;
    startTimer();
}

// Vérifier la réponse
function checkAnswer(button, correctAnswer) {
    clearInterval(countdown);

    const options = button.parentElement.querySelectorAll(".option-div");
    options.forEach((btn) => {
        btn.disabled = true;
        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (button.innerText === correctAnswer) {
        scoreCount++;
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }
}

// Minuteur pour chaque question
function startTimer() {
    let timeLeft = 10;
    document.querySelector(".time-left").innerText = `${timeLeft}s`;

    countdown = setInterval(() => {
        timeLeft--;
        document.querySelector(".time-left").innerText = `${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(countdown);
            questionCount++;
            if (questionCount < quizArray.length) {
                showQuestion(questionCount);
            } else {
                document.querySelector(".display-container").classList.add("hide");
                document.querySelector(".score-container").classList.remove("hide");
                document.querySelector("#user-score").innertext = `Votre score : ${scoreCount} sur ${quizArray.length}`;
            }
        }
    }, 1000);
}
