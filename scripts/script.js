"use strict"

let timerForWork = document.querySelector( '.assist-nav--timer');
let timerWindow = document.querySelector('.timer-work');
let timerWindowClose = document.querySelector('.timer-work--close');
let timerWindowOutput = document.querySelector('.timer-work__input');

//Работа с датами
function calcDate() {
    let finishYears = 2020;
    let finishMonths = 3;
    let finishDays = 15;

    let nowDate = new Date();
    let finishDaysWeek = nowDate.getDay();

    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
    }
    let checkFinishDate;
    if(nowDate.getHours() === 14 && nowDate.getMinutes() === 0 && nowDate.getSeconds() === 0 || (nowDate.getDate() === 11 || nowDate.getDate() === 15 || nowDate.getDate() === 25)) {
        if(nowDate.getDate() === 10 ) {
            checkFinishDate = 15;
            if(checkFinishDate.getDay() === 6) {
                finishDays = 17;
            } else if (checkFinishDate.getDay() === 0) {
                finishDays = 16;
            } else {
                finishDays = 15;
            }
        } else if(nowDate.getDate() === 15) {
            checkFinishDate = 25;
            if(checkFinishDate.getDay() === 6) {
                finishDays = 24;
            } else if (checkFinishDate.getDay() === 0) {
                finishDays = 23;
            } else {
                finishDays = 25;
            }
        } else if(nowDate.getDate() === 11) {
            alert(finishDays)

            checkFinishDate = getLastDayOfMonth(finishYears, finishMonths) + 10;
            if(checkFinishDate.getDay() === 6) {
                finishDays = 9;
            } else if (checkFinishDate.getDay() === 0) {
                finishDays = 8;
            } else {
                finishDays = 10;
            }
            finishMonths++;
            if(nowDate.getMonth() === 11) {
                finishYears++;
            }
        }
    }


    let finishDate = new Date(finishYears, finishMonths, finishDays, 14,0);
    let result = (finishDate - nowDate);
    let calcSecond = result / 1000;
    //alert(nowDate.getDay())

    let days = Math.floor(calcSecond / 86400);
    let hours = Math.floor(calcSecond / 3600 - days * 24);
    let minutes = Math.floor(calcSecond / 60 - (days * 24 * 60 + hours * 60));
    let second = Math.floor(calcSecond - (days * 24 * 3600 + hours * 3600 + minutes * 60));

    let daysInsp = String(days).slice(-1);
    let hoursInsp = String(hours).slice(-1);
    let minutesInsp = String(minutes).slice(-1);
    let secondInsp = String(second).slice(-1);

    let dateText = [];

    let dayText;
    let hoursText;
    let minutesText;
    let secondText;
    let textArray = ["день", "дня", "дней", "час", "часа", "часов", "минута", "минуты", "минут", "секунда", "секунды", "секунд"];
    function dateTextFunc(value, res1, res2, res3, regist) {
        let declensionCalc = [dayText, hoursText, minutesText, secondText];
        if(value < 21) {
            if (value === 1 ) {
                declensionCalc[regist] = res1;
            } else if (value > 1 && value < 5)  {
                declensionCalc[regist] = res2;
            } else if (value > 4 && value < 21) {
                declensionCalc[regist] = res3;
            } else {
                declensionCalc[regist] = res3;
            }
        } else if (value > 20) {
            if (value > 4 || value <= 9) {
                declensionCalc[regist] = res3;
            } else if (value === 1) {
                declensionCalc[regist] = res1;
            } else if (value > 1 || value < 5) {
                declensionCalc[regist] = res2;
            } else {
                declensionCalc[regist] = res3;
            }
        }
        return {
            outputDateFuncReturn () {
                dateText[regist] = declensionCalc[regist];
            }
        }
    }

    let outputDateFuncDays = dateTextFunc(daysInsp, textArray[0], textArray[1], textArray[2],0);
    let outputDateFuncHours = dateTextFunc(hoursInsp, textArray[3], textArray[4], textArray[5],1);
    let outputDateFuncMinutes = dateTextFunc(minutesInsp, textArray[6], textArray[7], textArray[8],2);
    let outputDateFuncSeconds = dateTextFunc(secondInsp, textArray[9], textArray[10], textArray[11],3);
    
    outputDateFuncDays.outputDateFuncReturn();
    outputDateFuncHours.outputDateFuncReturn();
    outputDateFuncMinutes.outputDateFuncReturn();
    outputDateFuncSeconds.outputDateFuncReturn();

    timerWindowOutput.value = days +" "+ dateText[0] +" "+ hours +" "+ dateText[1] +" "+ minutes +" "+ dateText[2] +" "+ second +" "+ dateText[3];

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

