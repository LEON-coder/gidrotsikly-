let sale = document.querySelector(".link__sale");
let New = document.querySelector(".NEW");
let hit = document.querySelector(".HIT");
let diler = document.querySelector(".diler");


sale.addEventListener('click',function () {
	this.classList.toggle("sale__back-color")
});
New.addEventListener('click',function () {
	this.classList.toggle("NEW__back-color")
});
hit.addEventListener('click',function () {
	this.classList.toggle("NEW__back-color")
});
diler.addEventListener('click',function () {
	this.classList.toggle("diler__back-color")
});

