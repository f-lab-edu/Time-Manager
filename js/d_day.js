const DDAY_INPUT = document.querySelector(".main-content--d-day");
const DDAY_INFO_H1 = document.querySelector(".main-content--h1");
const RESET_DDAY_BTN = document.querySelector(".btn-outline-primary");
let savedDday = "";

const countDate = (date) => {
  const nowDate = new Date();
  //자정을 기준으로 날짜를 가져옴
  const targetDate = new Date(date).setHours(0, 0, 0, 0);
  //밀리세컨드라서 나눠줘야 함.
  const remaining = (targetDate - nowDate) / 1000;
  const remainingDate = Math.ceil(remaining / 60 / 60 / 24);

  if (remainingDate <= 0) {
    DDAY_INFO_H1.innerHTML = "D-Day가 종료되었습니다";
    DDAY_INFO_H1.style.display = "block";
  } else {
    DDAY_INFO_H1.innerHTML = "🍅D-" + remainingDate;
    DDAY_INFO_H1.className = "display-4";
    DDAY_INPUT.style.display = "none";
    RESET_DDAY_BTN.classList.replace("d-none", "d-block");
  }
};

$("#datePicker").datepicker({
  format: "yyyy-mm-dd",
  autoClose: true,
  todayHighlight: true,
  language: "ko",
  onSelect: function (date) {
    setLocalStorage("dday", date);
    countDate(date);
  },
});

const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.log("setLocalStorage", e);
  }
};

const getLocalStorage = () => {
  savedDday = localStorage.getItem("dday");
  return savedDday;
};

const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

RESET_DDAY_BTN.addEventListener("click", (e) => {
  removeLocalStorage("dday");
  location.reload();
});

if (getLocalStorage()) {
  countDate(savedDday);
} else {
  DDAY_INFO_H1.innerHTML = "D-Day를 입력해주세요";
}
