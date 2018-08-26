"use stict";
var popupShow = document.querySelector(".hotel-search_btn");
var popupBlock = document.querySelector(".hotel-search_modal");
var startDay = document.querySelector("#start-day"); 
var jsWork = document.querySelector(".no-js");
jsWork.classList.replace("no-js", "js")
popupShow.addEventListener("click", function(evn) {
    evn.preventDefault();
    popupBlock.classList.toggle("modal-block__show");
    startDay.focus();
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        
        if (popupBlock.classList.contains("modal-block__show")) {
            popupBlock.classList.remove("modal-block__show");
        }
    } 
});
                        