var body = document.querySelector("body");
var link = document.querySelector(".modal-open-button");
var popup = document.querySelector(".modal-search");
var form = popup.querySelector("form");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adultNumber = popup.querySelector("[name=adult-number]");
var childrenNumber = popup.querySelector("[name=children-number]");

var isStorageSupport = true;
var adultNumberStorage = "";
var childrenNumberStorage = "";

body.classList.remove("no-js");

try {
	adultNumberStorage = localStorage.setItem("adult-number");
	childrenNumberStorage = localStorage.setItem("children-number");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	form.classList.remove("modal-error");
	arrivalDate.focus();

	if (adultNumberStorage) {
		adultNumber.value = adultNumberStorage;
	} else if (childrenNumberStorage) {
		childrenNumber.value = childrenNumberStorage;
	} else {
		arrivalDate.focus();
	}
});

form.addEventListener("submit", function (evt) {
	if (!arrivalDate.value || !departureDate.value || !adultNumber.value || !childrenNumber.value) {
		evt.preventDefault();
		form.classList.add("modal-error");
		console.log("Нужно заполнить все поля");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("adult-number", adultNumber.value);
			localStorage.setItem("children-number", childrenNumber.value);
		}
	}
});
