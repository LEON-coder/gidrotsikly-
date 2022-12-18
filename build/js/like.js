/*
let likeIcon = document.querySelector('.like');
likeIcon.addEventListener('click', likeChange);
function likeChange() {
  likeIcon.classList.toggle('like--active');  
}
*/
$(document).ready(function(){

      $('.like').on('click', function() {
        $(this).toggleClass('like--active');
      });
	});
  




