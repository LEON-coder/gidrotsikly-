let footerShopDelivery = document.querySelector('.shop-id');
let footerMenuDelivery = document.querySelector(".delivery--mobile");
let imgArrowShop = document.querySelector('.img-footer-mobile-2');


footerShopDelivery.addEventListener("click", function() {
    footerMenuDelivery.classList.toggle("footer__delivery_open-mobile");
    imgArrowShop.classList.toggle("img-footer-mobile--active-2")    
})