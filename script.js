let timeleft = document.querySelector("time-left");
let quizContainer=document.getElementById("container");
let nextBtn=document.getElementById("next-button");
let countOfQuestion=document.querySelector("number-of-question");
 
let displayContainer=document.getElementById("display-container");
let scoreContainer=document.querySelector("score-container");
let restart=document.getElementById("restart");
let userScore=document.getElementById("user-score");
let startScreen=document.querySelector("start-screen");
let startButton=document.getElementById("start-button");
let questionCount;
let scoreCount=0;
let count=11;
let countdown;

const quizArray=[
    {
        question: "Quelle est la spécialité de Pascal Vicat-Blanc ?",
        options: ["Réseaux informatiques", "Cybersécurité", "Intelligence Artificielle", "Systèmes distribués"],
        answer: "Systèmes distribués"
    },
    {
        question: "Quel est le domaine de recherche principal de Pascal Vicat-Blanc ?",
        options: ["Cloud Computing", "Data Mining", "Sécurité réseau", "Virtualisation"],
        answer: "Virtualisation"
    },
    {
        question: "En quelle année Pascal Vicat-Blanc a-t-elle fondé la société Lyatiss ?",
        options: ["2010", "2008", "2012", "2015"],
        answer: "2010"
    },
    {
        question: "Quelle entreprise a été fondée par Pascal Vicat-Blanc ?",
        options: ["Lyatiss", "Oracle", "Amazon Web Services", "Cisco"],
  !      answer: "Lyatiss"
    },
    {
        question: "Quel est l'un des principaux objectifs de ses recherches ?",
        options: ["Optimisation des flux de données dans le cloud", "Développement d'algorithmes IA", "Cyberattaques", "Gestion de bases de données"],
        answer: "Optimisation des flux de données dans le cloud"
    },
    {
        question: "Pascal Vicat-Blanc est une experte dans quel domaine technologique émergent ?",
        options: ["Edge Computing", "Blockchain", "Virtualisation", "Machine Learning"],
        answer: "Virtualisation"
    },
    {
        question: "Quel poste Pascal Vicat-Blanc a-t-elle occupé avant de fonder Lyatiss ?",
        options: ["Chercheuse CNRS", "Professeur à l'Université", "Directrice technique chez Cisco", "Consultante chez IBM"],
        answer: "Chercheuse CNRS"
    }
];

restart.addEventlistener("click",()=>{
    initial();
    displayContainer.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventlistener("click",(displayNext={} =>{
    questionCount  += 1;

    if(questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML="Ton score is"+
        scoreCount+"out of"+questionCount;
    }else{
            countOfQuestion.innerHTML=questionCount+1+"of"+quizArray.lenght+"Question";

            quizDisplay(questionCount);
            count=11;
            clearInterval(countdown);
            timerDisplay();

    }   
})

);

const timerDisplay=()=>{
    countdown=setInterval(()=>{
        count--;
        timeleft.innerHTML='$(count)s';

        if (count==0){
            clearInterval(countdown);
            displayNext();
        }
    },1000)
};

const quizDisplay=(questionCount)=>{
    let quizCards=document.querySelectorAll(".container-mid");

    quizCards.forEach((card)=>{
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater(){
    quizArray.sort(()=>Math.random(-0.5);

    for (let i of quizArray){
        i.options.sort(()=>Math.random(-0.5));
        let div=document.createElement("div");
        div.classList.add("container-mid","hide");
        
        countOfQuestion.innerHTML=1+"of"+quizArray.length+Question
    

    let question_DIV=document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML=i.question;
    div.appendChild(question_DIV);

    div.innerHTML bn +=
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[2]}</button>

    <button class="option-div" onclick="checker(this)">${i.options[3]}</button>;

     
}
}
