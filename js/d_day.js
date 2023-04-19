let ddayInput = document.querySelector(".main-content--d-day");
let ddayInfoMsg = document.querySelector(".main-content--h1");

let ddayFormat = () => {
  if (window.event.keyCode == "13") {
    countDate(ddayInput.value);
  }
};

let countDate = (date) => {
  let nowDate = new Date();
  //자정을 기준으로 날짜를 가져옴
  let targetDate = new Date(date).setHours(0, 0, 0, 0);
  //밀리세컨드라서 나눠줘야 함.
  let remaining = (targetDate - nowDate) / 1000;
  let remainingDate = Math.ceil(remaining / 60 / 60 / 24);

  if (remainingDate <= 0) {
    ddayInfoMsg.innerHTML = "D-Day가 종료되었습니다";
    ddayInfoMsg.style.display = "block";
  } else if (isNaN(remainingDate)) {
    ddayInfoMsg.innerHTML = "날짜를 다시 확인해주세요";
    ddayInfoMsg.style.display = "block";
  } else {
    ddayInfoMsg.innerHTML = "🍅D-" + remainingDate;
    ddayInput.style.display = "none";
  }
};

/*
해야할 것
마우스로 날짜 선택시 클릭된다면의 조건도 넣어야 함
D-Day 저장(localStorage)
date글꼴
D-Day 수정이 안됨 -> 마우스를 올리면 버튼이 생기게?
let changeDate = ddayInfoMsg.addEventListener(
  "mouseenter",
  (showModifyBtn) => {}
);

let showModifyBtn = () => {};
*/
