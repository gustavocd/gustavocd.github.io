const menuButton = document.querySelector("#menu"),
    menu = document.querySelector("ul.menu")

    menuButton.addEventListener("click", (event) => {
        menu.classList.toggle("show-menu")
    }, false)