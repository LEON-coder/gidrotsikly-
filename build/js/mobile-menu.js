let btnMenu = document.querySelector(".mobile_icon-burger");
let BurgerMenu = document.querySelector(".mobile-menu");

btnMenu.addEventListener("click", function() {   
    BurgerMenu.classList.toggle("show-menu");
    function animation() {
        document.getElementsByClassName('mobile-menu').className = 'show-menu'
    }
    btnMenu.classList.toggle("burger--active");
})