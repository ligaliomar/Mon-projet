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
        id:1,
        question: "Quelle est la spécialité de Pascal Vicat-Blanc ?",
        options: ["Réseaux informatiques", "Cybersécurité", "Intelligence Artificielle", "Systèmes distribués"],
        correct: "Systèmes distribués",
    },
    {
        id:2,
        question: "Quel est le domaine de recherche principal de Pascal Vicat-Blanc ?",
        options: ["Cloud Computing", "Data Mining", "Sécurité réseau", "Virtualisation"],
        correct: "Virtualisation",
    },
    {
        id:3,
        question: "En quelle année Pascal Vicat-Blanc a-t-elle fondé la société Lyatiss ?",
        options: ["2010", "2008", "2012", "2015"],
        orrect: "2010"
    },
    {
        id:4,
        question: "Quelle entreprise a été fondée par Pascal Vicat-Blanc ?",
        options: ["Lyatiss", "Oracle", "Amazon Web Services", "Cisco"],
        correct: "Lyatiss",
    },
    {
        id:5,
        question: "Quel est l'un des principaux objectifs de ses recherches ?",
        options: ["Optimisation des flux de données dans le cloud", "Développement d'algorithmes IA", "Cyberattaques", "Gestion de bases de données"],
        correct: "Optimisation des flux de données dans le cloud",
    },
    {
        id:6,
        question: "Pascal Vicat-Blanc est une experte dans quel domaine technologique émergent ?",
        options: ["Edge Computing", "Blockchain", "Virtualisation", "Machine Learning"],
        correct: "Virtualisation",
    },
    {
        id:7,
        question: "Quel poste Pascal Vicat-Blanc a-t-elle occupé avant de fonder Lyatiss ?",
        options: ["Chercheuse CNRS", "Professeur à l'Université", "Directrice technique chez Cisco", "Consultante chez IBM"],
        correct: "Chercheuse CNRS",
    },
];

restart.addEventlistener("click",()=>{
    initial();
    displayContainer.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventlistener("click",(displayNext=() =>{
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
    quizArray.sort(()=>Math.random(-0.5));

    for (let i of quizArray){
        i.options.sort(()=>Math.random(-0.5));
        let div=document.createElement("div");
        div.classList.add("container-mid","hide");
        
        countOfQuestion.innerHTML=1+"of"+quizArray.length+Question
    

    let question_DIV=document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML=i.question;
    div.appendChild(question_DIV);

    div.innerHTML  +=`
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[2]}</button>

    <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
    
}
}

function checker(userOption){
    let userSolution=userOption.innerText;
    let question=document.getElementsByClassName
    ("container-mid")[questionCount];
    let options=question.querySelectorAll(".options-div");
    
    if(userSolution===quizArray[questionCount].
    correct){
        userOption.classList.add("correct");
        scoreCount++;

    }else{
        userOption.classList.add("incorrect");
        
        options.forEach((element)=>{
            if(element.innerText=quizArray[questionCount].
                correct){
                    element.classList.add("correct");
                }
        })
    }
    clearInterval(countdown);
    options.forEach((element)=>{
        element.disabled=true;
    });

}

function initial(){
    quizContainer.innerHTML="";
    questionCount=0;
    scoreCount=0;
    scoreCount=0;
    count=11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click",()=>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();

});

window.onload=()=>{
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
}