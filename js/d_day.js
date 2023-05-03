localStorage.getItem("dday");

const DDAY_INPUT = document.querySelector(".main-content--d-day");
const DDAY_INFO_MSG = document.querySelector(".main-content--h1");
const RE_DDAY = document.querySelector(".btn-outline-primary");
const SAVED_DDAY = localStorage.getItem("dday");

const countDate = (date) => {
  const nowDate = new Date();
  //자정을 기준으로 날짜를 가져옴
  const targetDate = new Date(date).setHours(0, 0, 0, 0);
  //밀리세컨드라서 나눠줘야 함.
  const remaining = (targetDate - nowDate) / 1000;
  const remainingDate = Math.ceil(remaining / 60 / 60 / 24);

  if (remainingDate <= 0) {
    DDAY_INFO_MSG.innerHTML = "D-Day가 종료되었습니다";
    DDAY_INFO_MSG.style.display = "block";
  } else {
    DDAY_INFO_MSG.innerHTML = "🍅D-" + remainingDate;
    DDAY_INFO_MSG.className = "display-4";
    DDAY_INPUT.style.display = "none";
    RE_DDAY.classList.replace("d-none", "d-block");
  }
};

$("#datePicker").datepicker({
  format: "yyyy-mm-dd",
  autoClose: true,
  todayHighlight: true,
  language: "ko",
  onSelect: function (date) {
    localStorage.setItem("dday", date);
    countDate(date);
  },
});

RE_DDAY.addEventListener("click", (e) => {
  localStorage.removeItem("dday");
  location.reload();
});

if (SAVED_DDAY) {
  countDate(SAVED_DDAY);
}
