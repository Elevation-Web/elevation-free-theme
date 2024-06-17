import './style.scss';
import './editor.scss';
import Swiper from 'swiper/bundle';

// import Swiper JS

const carousels = document.querySelectorAll('.swiper__timeline');
if (carousels) {
	carousels.forEach((carousel) => {
		const id = carousel.id;
		if (id) {
			const nextButton = carousel.querySelector(
				`#${id} .swiper-button-next`
			);
			const prevButton = carousel.querySelector(
				`#${id} .swiper-button-prev`
			);

			const swiperA = new Swiper(`#${id} .swiper__container--thumb`, {
				// Optional parameters
				centeredSlides: true,
				freeMode: true,
				slideToClickedSlide: true,
				slidesPerView: 'auto',
			});

			const swiperB = new Swiper(`#${id} .swiper__container--timeline`, {
				// Optional parameters
				centeredSlides: true,
				grabCursor: true,
				loop: false,
				mousewheel: false,
				slidesPerView: 1,
				spaceBetween: 15,
				// Navigation arrows
				navigation: {
					nextEl: nextButton,
					prevEl: prevButton,
				},
			});

			swiperB.controller.control = swiperA;
			swiperA.controller.control = swiperB;
		}
	});
}
