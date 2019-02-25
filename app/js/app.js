document.addEventListener('DOMContentLoaded', function() {
	var mySwiper = new Swiper ('#second-slider', {
	    direction: 'horizontal',
	    loop: true,
	    speed: 500,
	    pagination: {
	      el: '.main__pagination',
	      clickable: true
	    },
		  effect: 'fade',
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    }
	  });
	var mySecondSwiper = new Swiper ('#main-slider', {
      direction: 'vertical',
      speed: 300,
      autoHeight: true,
      slidesPerView: 1,
      pagination: {
        el: '.big-slider__pagination',
        clickable: true,
      },
      mousewheel: true
	  });
	const textarea = document.querySelector('#form-input-3');
	const initialHeight = 60;

	const resize = () => {
		textarea.style.height = `${initialHeight}px`;
		const height = textarea.scrollHeight;
		textarea.style.height = `${height + initialHeight}px`;
	};
	resize();

	textarea.addEventListener('input', resize);

	let menuButton = document.querySelector('.mobile-menu__hamburger-btn');
	let mobileMenu = document.querySelector('.mobile-menu');
	menuButton.addEventListener('click', function(){
		menuButton.classList.toggle('active');
		mobileMenu.classList.toggle('active');
	})
})
$(document).ready(function(){
  $("#mobile-slider").owlCarousel({
  	loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
  });
});

