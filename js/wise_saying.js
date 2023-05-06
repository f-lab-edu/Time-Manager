WISE_SAYING_P = document.querySelector(".main-content--text");
WISE_PERSON_CAPTION = document.querySelector(".blockquote-footer");

$.ajax({
  method: "GET",
  url: "https://api.qwer.pw/request/helpful_text",
  data: { apikey: "guest" },
  dataType: "json",
})
  .done((msg) => {
    let extractMSG = JSON.stringify(Object.values(msg[1]));
    extractMSG =
      extractMSG.split("-").length > 1
        ? extractMSG.split("-")
        : extractMSG.split("–");
    WISE_SAYING_P.innerHTML = extractMSG[0];
    WISE_SAYING_P.innerHTML = WISE_SAYING_P.innerHTML.replace('["', "");
    WISE_PERSON_CAPTION.innerHTML = extractMSG[1];
    WISE_PERSON_CAPTION.innerHTML = WISE_PERSON_CAPTION.innerHTML.replace(
      '"]',
      ""
    );
  })
  .fail(() => {
    WISE_SAYING_P.innerHTML =
      "노력을 이기는 재능은 없고, 노력을 외면하는 결과도 없다.";
    WISE_PERSON_CAPTION.innerHTML = "이창호 9단";
  });
