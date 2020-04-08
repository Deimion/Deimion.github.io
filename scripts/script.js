let timerForWork = document.querySelector( '.assist-nav--timer');
let timerWindow = document.querySelector('.timer-work');
let timerWindowClose = document.querySelector('.timer-work--close');
let timerWindowOutput = document.querySelector('.timer-work__input');

//Работа с датами


function calcDate() {
    let nowDate = new Date();
    let finishDate = new Date(2020, 3, 15, 14,0);
    let result = (finishDate - nowDate);
    let calcSecond = result / 1000;

    let days = Math.floor(calcSecond / 86400);
    let hours = Math.floor(calcSecond / 3600 - days * 24);
    let minutes = Math.floor(calcSecond / 60 - (days * 24 * 60 + hours * 60));
    let second = Math.floor(calcSecond - (days * 24 * 3600 + hours * 3600 + minutes * 60));
    timerWindowOutput.value = days + " дней " + hours + " часов " + minutes + " минут " + second + " секунд";

}
setInterval(function () { calcDate(); }, 1000);

function openTimerWindow() {
    timerWindow.style.display="block";
    calcDate();
}

function closeTimerWindow() {
    timerWindow.style.display="none";
}
timerForWork.addEventListener("click", openTimerWindow);
timerWindowClose.addEventListener("click", closeTimerWindow);





/*
let firstMoney = new Date();
let secondMoney = new Date();
let thirdMoney = new Date();
let timerWindowOutputResult =

timerWindowOutput.innerHTML = timerWindowOutputResult;*/

