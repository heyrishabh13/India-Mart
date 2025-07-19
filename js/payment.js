document.querySelector("#payment").addEventListener("click", pay);
function pay() {
  var cvv = document.querySelector("#password").value;
  var card = document.querySelector("#card_number").value;
  var years = document.querySelector("#years").value;
  years = Number(years);
  console.log(typeof years);

  let flag = 1;
  if (cvv.length != 3) {
    document.querySelector("#in_pass").textContent = "*Invalid Credential";
    flag = 0;
  }
  if (card.length != 16) {
    document.querySelector("#in_nm").textContent = "*Invalid Card Number";
    flag = 0;
  }
  if (years > 2025) {
    document.querySelector("#exp").textContent = "*Date Expired for this card";
    flag = 0;
  }

  if (flag) {
    window.location.href = "payment-done.html";
  }
}
