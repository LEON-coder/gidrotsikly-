let btnMenu = document.querySelector(".mobile_icon-burger");
let BurgerMenu = document.querySelector(".mobile-menu");
let CloseBurger = document.getElementsByTagName("body");

btnMenu.addEventListener("click",function () {
    BurgerMenu.classList.toggle("show-menu");
    function animation() {
        document.getElementsByClassName('mobile-menu').className = 'show-menu'
    }
    btnMenu.classList.toggle("burger--active");
    CloseBurger.classList.remove("burger--active");
})