WISE_SAYING = document.querySelector(".main-content__text");

$.ajax({
  method: "GET",
  url: "https://api.qwer.pw/request/helpful_text",
  data: { apikey: "guest" },
}).done((msg) => {
  let extractMSG = msg.split('respond":"');
  WISE_SAYING.innerHTML = extractMSG[1].replace('"}]', "");
  WISE_SAYING.innerHTML = WISE_SAYING.innerHTML.replace("-", "<br /> - ");
  WISE_SAYING.innerHTML = WISE_SAYING.innerHTML.replace("–", "<br /> - ");
});
