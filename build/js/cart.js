const cardAddArr = Array.from(document.querySelectorAll(".card__add"));
const cartNum = document.querySelector("#cart_num");
const cart = document.querySelector("#cart");


function toNum(str) {
	const num = Number(str.replace(/ /g, ""));
	return num;
}


function toCurrency(num) {
	const format = new Intl.NumberFormat("ru-RU", {
		style: "currency",
		currency: "RUB",
		minimumFractionDigits: 0,
	}).format(num);
	return format;
}


cart.addEventListener("click", (e) => {
	e.preventDefault();

})

class Product {
	imageSrc;
	name;
	price;
	priceDiscount;
	constructor(card) {
		this.imageSrc = card.querySelector(".slider_block--pic").children[0].src;
		this.name = card.querySelector(".popular-goods__slider_describe").innerText;
		this.price = card.querySelector(".price").innerText;

	}
};

class Cart {
	products;
	constructor() {
		this.products = [];
	}
	get count() {
		return this.products.length;
	}
	addProduct(product) {
		this.products.push(product);
	}

	removeProduct(index) {
		this.products.slice(index, 1);
	}

	get cost() {
		const prices = this.products.map((product) => {
			return toNum(product.price);
		});
		const sum = prices.reduce((acc, num) => {
			return acc + num;
		}, 0);
		return sum;
	}


	get costDiscount() {
		const prices = this.products.map((product) => {
			return toNum(product.priceDiscount);
		});
		const sum = prices.reduce((acc, num) => {
			return acc + num;
		}, 0);
		return sum;
	}
	get discount() {
		return this.cost - this.costDiscount
	}
}