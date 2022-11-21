let slideContent = document.querySelector('slide-content');
slideContent.addEventListener('click', function(event) {
	if (event.target.closest('.like')) {
		event.target.classList.remove('like');
	}
})

