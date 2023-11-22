let btnMenu = document.querySelector(".mobile_icon-burger");
let BurgerMenu = document.querySelector(".mobile-menu");
let CloseBurger = document.getElementsByTagName("body");

btnMenu.addEventListener("click",function () {
    BurgerMenu.classList.add("show-menu");
    function animation() {
        document.getElementsByClassName('mobile-menu').className = 'show-menu'
    }
    btnMenu.classList.toggle("burger--active");

});
CloseBurger.addEventListener("click",function () {
    BurgerMenu.classList.remove("show-menu");
    function animation() {
        document.getElementsByClassName('mobile-menu').className = 'show-menu'
    }
    btnMenu.classList.remove("burger--active");

});


