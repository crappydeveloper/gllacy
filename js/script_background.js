var control_1 = document.querySelector(".control_1");
var control_2 = document.querySelector(".control_2");
var control_3 = document.querySelector(".control_3");
var body = document.querySelector("body");
var slider_lettering_1 = document.querySelector(".slider-lettering-first");
var slider_lettering_2 = document.querySelector(".slider-lettering-second");
var slider_lettering_3 = document.querySelector(".slider-lettering-third");


control_1.addEventListener("click", function(evt) {
    evt.preventDefault();
    body.classList.add("slider-frame-first");
    body.classList.remove("slider-frame-second");
    body.classList.remove("slider-frame-third");
    control_1.classList.add("current-control");
    control_2.classList.remove("current-control");
    control_3.classList.remove("current-control");
    slider_lettering_1.style.display = "inline-flex";
    slider_lettering_2.style.display = "none";
    slider_lettering_3.style.display = "none";
});

control_2.addEventListener("click", function(evt) {
    evt.preventDefault();
    body.classList.add("slider-frame-second");
    body.classList.remove("slider-frame-first");
    body.classList.remove("slider-frame-third");
    control_2.classList.add("current-control");
    control_1.classList.remove("current-control");
    control_3.classList.remove("current-control");
    slider_lettering_2.style.display = "inline-flex";
    slider_lettering_1.style.display = "none";
    slider_lettering_3.style.display = "none";
});

control_3.addEventListener("click", function(evt) {
    evt.preventDefault();
    body.classList.add("slider-frame-third");
    body.classList.remove("slider-frame-second");
    body.classList.remove("slider-frame-first");
    control_3.classList.add("current-control");
    control_2.classList.remove("current-control");
    control_1.classList.remove("current-control");
    slider_lettering_3.style.display = "inline-flex";
    slider_lettering_2.style.display = "none";
    slider_lettering_1.style.display = "none";
});
