let lastScroll = 0;
const defaultOffset = 150;
const burgerMenu = document.querySelector(".mobile-menu");


const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => burgerMenu.classList.contains("mobile-menu_open");


window.addEventListener("scroll", () => {

    if(scrollPosition() > lastScroll && containHide() && scrollPosition() > defaultOffset) {
        burgerMenu.classList.remove("mobile-menu_open");
        console.log("down");
    } else if(scrollPosition() < lastScroll && containHide()) {
        burgerMenu.classList.add("mobile-menu_open");
        console.log("up");
    }
    lastScroll = scrollPosition();
})

const burgerBtn = document.querySelector(".burger-btn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 150) {
        burgerBtn.classList.add("active");
    } else {
        burgerBtn.classList.remove("active");
    }
})