"use stict";
var popupShow = document.querySelector(".hotel-search_btn");
var popupBlock = document.querySelector(".hotel-search_modal");
var startDay = document.querySelector("#start-day");


popupShow.addEventListener("click", function(evn) {
    evn.preventDefault();
    popupBlock.classList.toggle("modal-block__show");
    startDay.focus();
});