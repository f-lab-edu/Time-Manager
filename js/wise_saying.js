WISE_SAYING = document.querySelector(".main-content__text");
WISE_PERSON = document.querySelector(".blockquote-footer");

$.ajax({
  method: "GET",
  url: "https://api.qwer.pw/request/helpful_text",
  data: { apikey: "guest" },
  dataType: "json",
})
  .done((msg) => {
    let extractMSG = JSON.stringify(Object.values(msg[1]));
    extractMSG =
      extractMSG.split("-") ||
      extractMSG.split("-") ||
      extractMSG.split("-") ||
      extractMSG.split("-");
    WISE_SAYING.innerHTML = extractMSG[0];
    WISE_SAYING.innerHTML = WISE_SAYING.innerHTML.replace('["', "");
    WISE_PERSON.innerHTML = extractMSG[1];
    WISE_PERSON.innerHTML = WISE_PERSON.innerHTML.replace('"]', "");
  })
  .fail(() => {
    WISE_SAYING.innerHTML =
      "노력을 이기는 재능은 없고, 노력을 외면하는 결과도 없다.";
    WISE_PERSON.innerHTML = "이창호 9단";
  });
