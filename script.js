const span = document.getElementById('lang-list');
const ul = span.nextSibling.nextSibling;

span.onclick = function() {
    ul.classList.toggle("lang_menu_show");
}

const menu = document.querySelector(".center_menu");
const menuItems = document.querySelectorAll(".center_menu-items");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {

    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");

    } else {
        menu.classList.add("showMenu");

    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
);

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});