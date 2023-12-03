
let form = document.querySelector(".footer__describe-area-block");
let inputEmail = document.querySelector(".js-input-email");

form.onsubmit = function (event) {
	event.preventDefault();
	let emailVal = inputEmail.value

	if (emailVal === '') {
		inputEmail.classList.add('error');
	}
	return false;
}