"use strict";

var menuButton = document.querySelector("#menu"),
    menu = document.querySelector("ul.menu");

menuButton.addEventListener("click", function (event) {
    menu.classList.toggle("show-menu");
}, false);