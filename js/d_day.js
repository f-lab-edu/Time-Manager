/*
TODO: 마우스로 날짜 선택시 클릭된다면의 조건도 넣어야 함
TODO: D-Day 저장(localStorage)
TODO: date글꼴 input custom
FIXME: D-Day 수정이 안됨 -> 마우스를 올리면 버튼이 생기게?
let changeDate = ddayInfoMsg.addEventListener(
  "mouseenter",
  (showModifyBtn) => {}
);

let showModifyBtn = () => {};
*/

const DDAY_INPUT = document.querySelector(".main-content--d-day");
const DDAY_INFO_MSG = document.querySelector(".main-content--h1");
const ENTER_KEY_CODE = 13;

DDAY_INPUT.addEventListener("keydown", (e) => {
  if (e.keyCode === ENTER_KEY_CODE) {
    countDate(e.target.value);
  }
});

const countDate = (date) => {
  const nowDate = new Date();
  //자정을 기준으로 날짜를 가져옴
  const targetDate = new Date(date).setHours(0, 0, 0, 0);
  //밀리세컨드라서 나눠줘야 함.
  const remaining = (targetDate - nowDate) / 1000;
  const remainingDate = Math.ceil(remaining / 60 / 60 / 24);

  if (isNaN(remainingDate)) {
    DDAY_INFO_MSG.innerHTML = "날짜를 다시 확인해주세요";
    DDAY_INFO_MSG.style.display = "block";
  } else if (remainingDate <= 0) {
    DDAY_INFO_MSG.innerHTML = "D-Day가 종료되었습니다";
    DDAY_INFO_MSG.style.display = "block";
  } else {
    DDAY_INFO_MSG.innerHTML = "🍅D-" + remainingDate;
    DDAY_INFO_MSG.style.fontSize = "60px";
    DDAY_INPUT.style.display = "none";
  }
};
