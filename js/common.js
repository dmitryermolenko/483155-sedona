"use strict";
var link = document.querySelector(".booking-btn");
var popup = document.querySelector("form.booking-form");
var form = popup.querySelector("form");
var grown = popup.querySelector("[name=grown]");
var children = popup.querySelector("[name=children]");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
popup.classList.remove("booking-form-on");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("form-error");
    popup.classList.toggle("booking-show");
});
popup.addEventListener("submit", function (evt) {
    if (!grown.value || !children.value || !arrival.value || !departure.value) {
        evt.preventDefault();
        popup.classList.add("form-error");

        console.log("Все поля должны быть заполнены");
    }
});