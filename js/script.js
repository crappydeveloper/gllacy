var popUpShow = document.querySelector(".contacts-button");
var popUp = document.querySelector(".feedback-section");
var popUpClose = document.querySelector(".feedback-close");
var popUpLogin = popUp.querySelector("[id=your-name]");
var popUpMail = popUp.querySelector("[id=your-mail]");
var popUpText = popUp.querySelector("[id=text]");
var form = popUp.querySelector("form");

popUpShow.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.remove("hidden");
    popUpLogin.focus();
});

popUpClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.add("hidden");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log(popUpLogin.value);
});
