/*
FIXME: 클릭하면 멈춤
FIXME: play아이콘이 올라오지 않음
FIXME: 인터넷으로 다른 것을 하면 ctx.stroke가 촘촘히 그려지지 않음
TODO: 일시정지 버튼 추가?
*/

let minutesSpan = document.querySelector(".main-content--minutes");
let secondsSpan = document.querySelector(".main-content--seconds");
const pomodoroCanvas = document.querySelector(
  ".main-content--pomodoro-timer-canvas"
);
const ctx = pomodoroCanvas.getContext("2d");
const radius = pomodoroCanvas.height / 2;
ctx.translate(radius, radius);

//뽀모도로 시작 시간
let startedTime;
//뽀모도로 25분 설정
let pomodoroMinutes = 25;
//휴식시간 5분 설정
let breakMinutes = 5;
//0초 설정
let seconds = "00";
//setInterval Id값 저장
let pomodoroIntervId = "";
let breakIntervId = "";
let drawPomodoroIntervId = "";
let drawBreakPomodoroIntervId = "";
//여러번 눌리는 버튼 이벤트 막기(버튼이 눌렸으면 false)
let chkPomodoroBTN = true;

window.onload = () => {
  minutesSpan.innerHTML = pomodoroMinutes;
  secondsSpan.innerHTML = seconds;
  drawFace(ctx, radius);
};

const startPomodoro = () => {
  if (pomodoroMinutes > 0 && seconds == 0) {
    minutesSpan.innerHTML = --pomodoroMinutes;
    seconds = 59;
    secondsSpan.innerHTML = seconds;
  } else {
    secondsSpan.innerHTML = --seconds;
  }
  if (seconds < 10) {
    secondsSpan.innerHTML = "0" + seconds;
  }
  if (pomodoroMinutes == 0 && seconds == 0) {
    clearInterval(pomodoroIntervId);
    clearInterval(drawPomodoroIntervId);

    breakIntervId = setInterval(startBreak, 1000);
    drawFace(ctx, radius);

    //쉬는시간 시작 시간 체크
    startedTime = new Date();
    drawBreakPomodoroIntervId = setInterval(drawPomodoro, 200);
  }
};

const startBreak = () => {
  if (breakMinutes > 0 && seconds == 0) {
    minutesSpan.innerHTML = --breakMinutes;
    seconds = 59;
    secondsSpan.innerHTML = seconds;
  } else {
    secondsSpan.innerHTML = --seconds;
  }
  if (seconds < 10) {
    secondsSpan.innerHTML = "0" + seconds;
  }
  if (breakMinutes == 0 && seconds == 0) {
    clearInterval(breakIntervId);
    clearInterval(drawPomodoroIntervId);
  }
};

pomodoroCanvas.addEventListener("click", () => {
  clearInterval(pomodoroIntervId);
  clearInterval(breakIntervId);
  clearInterval(drawPomodoroIntervId);
  clearInterval(drawBreakPomodoroIntervId);

  //여러번 눌리는 버튼 이벤트 막기(버튼이 눌렸으면 false)
  if (chkPomodoroBTN) {
    chkPomodoroBTN = false;

    pomodoroIntervId = setInterval(startPomodoro, 1000);

    //뽀모도로 시작 시간 체크
    startedTime = new Date();
    drawPomodoroIntervId = setInterval(drawPomodoro, 200);
  }
});

function drawPomodoro() {
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  if (!pomodoroIntervId) {
    ctx.fillStyle = "rgba(255, 51, 51)";
  } else {
    ctx.fillStyle = "#8a8a8a";
  }
  ctx.fill();
}

function drawTime(ctx, radius) {
  const currentTime = new Date();
  let second = (currentTime - startedTime) / 1000;
  if (pomodoroIntervId) {
    second = (second * Math.PI) / 30 / 25;
  } else {
    second = (second * Math.PI) / 30 / 5;
  }

  drawHand(ctx, second, radius * 0.98, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.moveTo(0, 0);
  ctx.rotate(-pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(pos);
}
