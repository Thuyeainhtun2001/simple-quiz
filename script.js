// variable names
let start = document.querySelector(".startdiv");
let display = document.querySelector(".container");
let question = document.querySelector(".question");
let answer = document.querySelector(".answer");
let next = document.querySelector(".nextbtn");
let previous = document.querySelector(".previousbtn");
let correctAnswer = document.querySelector(".correctAnswer");
let wrongAnswer = document.querySelector(".wrongAnswer");
let optionBtn = document.getElementsByClassName("optionBtn");
let count = 0;
// start function
start.addEventListener("click",function(){
    start.classList.add("hidden");
    display.classList.remove("hidden");
    queryCreator(queryArray[count]);
    previous.classList.add("hidden");
    checker();
})
// question and answer
const queryArray = [
    {
        question : "What is your fav colors?",
        options : ["white", "black", "blue", "red"],
        correct : "white"
    },
    {
        question : "What is your fav fruits?",
        options : ["apple", "orange", "mango", "banana"],
        correct : "orange"
    },
    {
        question : "What is your fav food?",
        options : ["Korea", "Myanmar", "China", "Italy"],
        correct : "China"
    },
    {
        question : "What is your fav pet?",
        options : ["rabbit", "cat", "dog", "hamster"],
        correct : "dog"
    },
    {
        question : "What is your fav flower?",
        options : ["rose", "sunflower", "orchid", "daisy"],
        correct : "orchid"
    },
];
function queryCreator(i){
    question.innerHTML = i.question;
    answer.innerHTML = `
    <button class = "optionBtn">${i.options[0]}</button>
    <button class = "optionBtn">${i.options[1]}</button>
    <button class = "optionBtn">${i.options[2]}</button>
    <button class = "optionBtn">${i.options[3]}</button>
     `
}
// next button
next.addEventListener("click",function(){
    previous.classList.remove("hidden");
    correctAnswer.classList.add("hidden");
    wrongAnswer.classList.add("hidden");
   if(count < 4){
    count++;
    queryCreator(queryArray[count]);
   }
   if(count == 4){
    next.classList.add("hidden");
   }
   checker();
})
// previous button
previous.addEventListener("click",function(){
    correctAnswer.classList.add("hidden");
    wrongAnswer.classList.add("hidden");
    next.classList.remove("hidden");
    if(count>0){
        count--;
        queryCreator(queryArray[count]);
    }
    if(count == 0){
        previous.classList.add("hidden");
    }
    checker();
})
// checker
function checker(){
    for (let i = 0; i < optionBtn.length; i++) {
        optionBtn[i].addEventListener("click",function(){
            let x = optionBtn[i].innerHTML;
            let answer = queryArray[count].correct;
            console.log(x);
            console.log(answer);
            if(x==answer){
                correctAnswer.classList.remove("hidden");
                wrongAnswer.classList.add("hidden");
            }else{
                correctAnswer.classList.add("hidden");
                wrongAnswer.classList.remove("hidden");
            }
        })
    }
}
