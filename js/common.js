let burger_btn = document.querySelector('.nav-btn');
let nav = document.querySelector('.burger-menu');
let header_top = document.querySelector('.header-top');


burger_btn.addEventListener('click', function () {
	nav.classList.toggle('show');
	header_top.classList.toggle('bgc');
	burger_btn.classList.toggle('close-burger');

});