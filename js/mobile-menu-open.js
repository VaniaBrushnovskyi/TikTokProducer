const menuBtn = document.querySelector(".header__burger_btn");
const menuMobile = document.querySelector(".mobile-menu");

menuBtn.onclick = function() {
    menuMobile.classList.add("mobile-menu_open");
}
menuBtn.onclick = function() {
    menuMobile.classList.toggle("mobile-menu_open");
}
