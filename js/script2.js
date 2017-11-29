var popUpShow = document.querySelector(".contacts-button");
var popUp = document.querySelector(".feedback-section");
var popUpClose = document.querySelector(".feedback-close");
var popUpLogin = popUp.querySelector("[id=your-name]");
var form = popUp.querySelector("form");
var popUpMail = popUp.querySelector("[id=your-mail]");
var popUpText = popUp.querySelector("[id=text]");
var storage = localStorage.getItem("popUpLogin");

popUpShow.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.remove("hidden");
    if (storage) {
        popUpLogin.value = storage;
        popUpMail.focus();
    } else {
        popUpLogin.focus();
    }
});

popUpClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.add("hidden");
    popUp.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!popUp.classList.contains(hidden)){
            popUp.classList.add("hidden");
            popUp.classList.remove("feedback-error");
        }
    }
});

form.addEventListener("submit", function (evt) {
    if (!popUpText.value) {
        evt.preventDefault();
        popUp.classList.add("modal-error");
    }
});

form.addEventListener("submit", function (evt) {
    if (popUpLogin.value) {
        localStorage.setItem("popUpLogin", popUpLogin.value);
    }
});
