import * as flsFunctions from "./modules/functions.js";
// import './modules/parallax.min.js';
import './components.js';
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

flsFunctions.isWebp();


import Swiper, { Navigation, Pagination, Autoplay, Mousewheel} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel]);
const swiper = new Swiper();


// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav-list');
// const menu = document.querySelector('#overlay');
const btn_close = document.querySelector('.header__menu-burger-close');
const bodyEl = document.querySelector('body');

const toggleMenu = function() {
	menu.classList.toggle('open');	
}
btnMenu.addEventListener('click', function(e) {
	e.stopPropagation();
	toggleMenu();		
	bodyEl.style.overflow="hidden";
});	
// btn_close.addEventListener('click', function() {
// 	menu.classList.toggle('open');
// 	bodyEl.style.overflow="unset";
// });

// Menu show
document.addEventListener('click', function(e) {
	const target = e.target;
	const its_menu = target == menu || menu.contains(target);	
	// const its_sidebar = target == sidebarEl || sidebarEl.contains(target);
	const menu_is_active = menu.classList.contains('open');
	// const sidebar_is_active = sidebarEl.classList.contains('active');
	if (!its_menu && menu_is_active) {
			toggleMenu();
			bodyEl.style.overflow="unset";
		}
});

// Инициализация слайдера REVIEWS
const productsSlider = document.querySelector('.products__slider');
let mySwiperProducts = new Swiper(productsSlider, { 
	slidesPerView: 4, 	
	spaceBetween: 10,
  autoplay: false,
  speed: 555,
	mousewheel: true,
	navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
	scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
	breakpoints: {  
		0: {
			slidesPerView: 1,
		
		},  
		576: {
			slidesPerView: 1,
		
		},  
		768: {
			slidesPerView: 2,
		
		},     
		992: {
			slidesPerView: 2,
		
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 10, 	
		}
	}
});

// Sticky header
const header = document.querySelector('.header');
const first = document.querySelector('.first');
const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
	} else {
		header.classList.add('header--fixed');
		first.style.marginTop = `${headerHeight}px`;
	}

	if (scrollDistance === 0) {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
	}

	lastScrollTop = scrollDistance;
});


//  Paralax
const scene = document.getElementById('scene');
const scene1 = document.getElementById('scene1');


var parallaxInstance = new Parallax(scene, {
	hoverOnly: true,
	relativeInput: true,
});
var parallaxInstance = new Parallax(scene1, {
	hoverOnly: true,
	relativeInput: true,
});