let btnMenu = document.querySelector(".mobile_icon-burger");
let BurgerMenu = document.querySelector(".header__list_mobile-background");



btnMenu.addEventListener("click",function () {
    BurgerMenu.classList.toggle("show-menu");
    function animation() {
        document.BurgerMenu.className = 'show-menu'
    }
    btnMenu.classList.toggle("burger--active");

});

BurgerMenu.addEventListener("click",function () {
    this.classList.remove("show-menu");
    btnMenu.classList.add("burger--active");
})





