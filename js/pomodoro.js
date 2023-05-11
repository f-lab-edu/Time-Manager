/*
FIXME: 클릭하면 멈추는 문제
FIXME: play icon 원 안으로 안들어감
FIXME: animation 위로 올라가게 수정, 선이 아닌 원 자체로 동작하게 수정, css stroke-dashoffset
FIXME: 코드 반복되는 부분 수정
TODO: 일시정지 버튼 추가
*/

let minutesSpan = document.querySelector(".main-content--minutes");
let secondsSpan = document.querySelector(".main-content--seconds");
const pomodoroBTN = document.querySelector(".main-content--pomodoro-timer");

let setMinutes = 25;
let setBreak = 5;
let setSeconds = "00";
let intervId = "";
let intervId2 = "";

window.onload = () => {
  minutesSpan.innerHTML = setMinutes;
  secondsSpan.innerHTML = setSeconds;
};

const startPomodoro = () => {
  if (setMinutes > 0 && setSeconds == 0) {
    minutesSpan.innerHTML = --setMinutes;
    secondsSpan.innerHTML = setSeconds = 59;
  } else {
    secondsSpan.innerHTML = --setSeconds;
  }
  if (setSeconds < 10) {
    secondsSpan.innerHTML = "0" + setSeconds;
  }
  if (setMinutes == 0 && setSeconds == 0) {
    clearInterval(intervId);
    intervId2 = setInterval("startBreak()", 1000);
  }
};

const startBreak = () => {
  if (setBreak > 0 && setSeconds == 0) {
    minutesSpan.innerHTML = --setBreak;
    secondsSpan.innerHTML = setSeconds = 59;
  } else {
    secondsSpan.innerHTML = --setSeconds;
  }
  if (setSeconds < 10) {
    secondsSpan.innerHTML = "0" + setSeconds;
  }
  if (setBreak == 0 && setSeconds == 0) {
    clearInterval(intervId2);
  }
};

pomodoroBTN.addEventListener("click", () => {
  clearInterval(intervId);
  clearInterval(intervId2);
  intervId = setInterval("startPomodoro()", 1000);
});
