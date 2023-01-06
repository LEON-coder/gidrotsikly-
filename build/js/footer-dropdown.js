let footerButton = document.querySelector(".footer__information_headline-block");
let footerMenu = document.querySelector(".footer__block_info--mobile");
let imgArrow = document.querySelector('.img-footer-mobile');


footerButton.addEventListener("click", function() {   
    footerMenu.classList.toggle("footer-menu-open"); 
    imgArrow.classList.toggle("img-footer-mobile--active");       
})


