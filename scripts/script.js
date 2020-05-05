"use strict"

function timer() {
    let timerForWork = document.querySelector( '.assist-nav--timer');
    let timerWindow = document.querySelector('.timer-work');
    let timerWindowClose = document.querySelector('.timer-work--close');
    let timerWindowOutput = document.querySelector('.timer-work__input');
    let timerDateOut = document.querySelector('.timer-work--last-date');

//Работа с датами
    function calcDate() {
        let nowDate = new Date();
        let finishDate = new Date(2020, 3, 0, 14,0);

        if (nowDate.getDate() >= 5 && nowDate.getDate() <= 10) {
            //alert(1);
            if (nowDate.getDay() === 6) {
                finishDate.setDate(17);
            } else if (nowDate.getDay() === 0) {
                finishDate.setDate(16);
            } else {
                finishDate.setDate(15);
            }
            timerDateOut.innerHTML = finishDate;
        } else if (nowDate.getDate() >= 15 && nowDate.getDate() <= 17) {
            alert(2);
            if (nowDate.getDay() === 6) {
                finishDate.setDate(24);
            } else if (nowDate.getDay() === 0) {
                finishDate.setDate(23);
            } else {
                finishDate.setDate(25);
            }
            timerDateOut.innerHTML = finishDate;
        } else if (nowDate.getDate() >= 23 && nowDate.getDate() <= 25) {
            alert(3);
            finishDate.setMonth(nowDate.getMonth() + 1);
            if (nowDate.getDate() === 6) {
                finishDate.setDate(9);
            } else if (nowDate.getDate() === 0) {
                finishDate.setDate(8);
            } else {
                finishDate.setDate(10);
            }
            if (nowDate.getMonth() === 11) {
                finishDate.setFullYear(finishDate.getFullYear() + 1);
            }
            timerDateOut.innerHTML = finishDate;
        }

        let result = (finishDate - nowDate);
        let calcSecond = result / 1000;

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
        timerWindow.classList.toggle('hide-block'); 
        calcDate();
    }

    function closeTimerWindow() {
        timerWindow.style.display="none";
    }
    timerForWork.addEventListener("click", openTimerWindow);

    timerWindowClose.addEventListener("click", closeTimerWindow);
}
timer();

function scroll() {
    let scrollUp = document.querySelector( '.assist-nav--up');
    let scrollDown = document.querySelector( '.assist-nav--down');
    function scrollUpMove() {
        window.scrollTo(pageXOffset, 0)
    };
    function scrollDownMove() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        window.scrollTo(pageXOffset, scrollHeight)
    };
    scrollUp.addEventListener("click", scrollUpMove);

    scrollDown.addEventListener("click", scrollDownMove);

}
scroll();