import Swiper from 'swiper/bundle';

/**
 * Initialize the Swiper carousel
 * @param {string} swiperSelector
 */

const getSwiperParams = (dataset) => {
	if (!dataset) return;

	const dataSet = JSON.parse(dataset);

	const loop = dataSet?.loop && dataSet.loop !== '0' ? true : false;
	const centeredSlides =
		dataSet?.centeredSlides && dataSet.centeredSlides !== '0'
			? true
			: false;
	const grabCursor =
		dataSet?.grabCursor && dataSet.grabCursor !== '0' ? true : false;
	const spaceBetween = dataSet?.spaceBetween || 30;
	const slidesPerView = dataSet?.slidesPerView || 1;
	const spaceBetweenSm = dataSet?.spaceBetweenSm || spaceBetween;
	const slidesPerViewSm = dataSet?.slidesPerViewSm || slidesPerView;
	const spaceBetweenMd = dataSet?.spaceBetweenMd || spaceBetweenSm;
	const slidesPerViewMd = dataSet?.slidesPerViewMd || slidesPerViewSm;
	const spaceBetweenLg = dataSet?.spaceBetweenLg || spaceBetweenMd;
	const slidesPerViewLg = dataSet?.slidesPerViewLg || slidesPerViewMd;
	const spaceBetweenXl = dataSet?.spaceBetweenXl || spaceBetweenLg;
	const slidesPerViewXl = dataSet?.slidesPerViewXl || slidesPerViewLg;
	const spaceBetweenXxl = dataSet?.spaceBetweenXxl || spaceBetweenXl;
	const slidesPerViewXxl = dataSet?.slidesPerViewXxl || slidesPerViewXl;

	const dynamicBullets =
		dataSet?.dynamicBullets !== undefined &&
		dataSet?.dynamicBullets === false
			? false
			: true;

	const perviewSlider = dataSet?.perview || 1;

	const slideToClickedSlide =
		dataSet?.slideToClickedSlide && dataSet.slideToClickedSlide !== '0'
			? true
			: false;
	const delay = dataSet?.delay || 7000;
	const disableOnInteraction = dataSet?.disableOnInteraction ? true : false;

	const loopAdditionalSlides = dataSet?.loopAdditionalSlides || undefined;

	return {
		loop,
		loopAdditionalSlides,
		centeredSlides,
		grabCursor,
		spaceBetween,
		slidesPerView,
		slideToClickedSlide,
		delay,
		disableOnInteraction,
		dynamicBullets,
		breakpoints: {
			576: {
				spaceBetween: spaceBetweenSm,
				slidesPerView: slidesPerViewSm,
			},
			768: {
				spaceBetween: spaceBetweenMd,
				slidesPerView: slidesPerViewMd,
			},
			992: {
				spaceBetween: spaceBetweenLg,
				slidesPerView: slidesPerViewLg,
			},
			1200: {
				spaceBetween: spaceBetweenXl,
				slidesPerView: slidesPerViewXl || perviewSlider,
			},
			1400: {
				spaceBetween: spaceBetweenXxl,
				slidesPerView: slidesPerViewXxl || perviewSlider,
			},
		},
	};
};

function getLargestSlidesPerView(breakpoints) {
	let largestSlidesPerView = null;

	for (const key in breakpoints) {
		const slidesPerView = breakpoints[key].slidesPerView;

		if (slidesPerView === 'auto') {
			largestSlidesPerView = 'auto';
		} else if (
			largestSlidesPerView !== 'auto' &&
			(largestSlidesPerView === null ||
				slidesPerView > largestSlidesPerView)
		) {
			largestSlidesPerView = slidesPerView;
		}
	}

	return largestSlidesPerView;
}

const toggleControls = (swiper, action) => {
	const carousel = swiper?.wrapperEl;
	const bottom = carousel?.parentElement.querySelector('.swiper-bottom');
	if (bottom) {
		if (action === 'hide') {
			bottom.style.display = 'none';
		} else {
			bottom.style.display = '';
		}
	}
};

export default function initSwiper(swiperSelector) {
	// Do not run if swiperSelector is not present
	if (!swiperSelector) return;

	const carousels = document.querySelectorAll(swiperSelector);
	if (carousels) {
		carousels.forEach((carousel) => {
			// Get the id of the carousel
			const id = carousel.id;

			// If the id is present, initialize the carousel
			if (id) {
				const nextButton = carousel.querySelector(
					'.swiper-button-next'
				);
				const prevButton = carousel.querySelector(
					'.swiper-button-prev'
				);

				const scrollBar = carousel.querySelector('.swiper-scrollbar');

				const paginator = carousel.querySelector('.swiper-pagination');

				const {
					loop,
					loopAdditionalSlides,
					centeredSlides,
					grabCursor,
					spaceBetween,
					slidesPerView,
					slideToClickedSlide,
					breakpoints,
					delay,
					disableOnInteraction,
					dynamicBullets,
				} = getSwiperParams(
					carousel.getAttribute('data-swiper-options')
				);
				const slides = carousel.querySelectorAll('.swiper-slide');
				const numberOfSlides = slides.length;
				let rewind = false;

				if (
					getLargestSlidesPerView(breakpoints) === 'auto' ||
					slidesPerView > numberOfSlides
				) {
					rewind = true;
				}

				const swiperCarousel = new Swiper(`#${id}`, {
					// Optional parameters
					loop: true,
					// loopAdditionalSlides,
					// rewind,
					centeredSlides,
					grabCursor,
					spaceBetween,
					slidesPerView,
					slideToClickedSlide,
					breakpoints: {
						576: breakpoints[576],
						768: breakpoints[768],
						992: breakpoints[992],
						1200: breakpoints[1200],
						1400: breakpoints[1400],
					},
					// Rotation
					autoplay: {
						delay,
						disableOnInteraction,
					},

					keyboard: {
						enabled: true,
					},

					// Navigation arrows
					navigation: {
						nextEl: nextButton,
						prevEl: prevButton,
					},

					// And if we need scrollbar
					scrollbar: {
						el: scrollBar,
						draggable: true,
					},

					pagination: {
						el: paginator,
						clickable: true,
						dynamicBullets:
							window.innerWidth <= 768 ? dynamicBullets : false,
						dynamicMainBullets: 1,
					},

					on: {
						init: function () {
							if (this.isLocked) {
								toggleControls(this, 'hide');
							}
						},
						lock: function () {
							toggleControls(this, 'hide');
						},
						unlock: function () {
							toggleControls(this, 'show');
						},
					},
				});

				swiperCarousel.autoplay.stop();

				const playPauseButton = carousel.querySelector(
					'.swiper-button-play-pause'
				);

				if (playPauseButton) {
					swiperCarousel.on('resize', function () {
						if (swiperCarousel.snapGrid.length > 1) {
							playPauseButton.style.display = 'block';
						} else {
							playPauseButton.style.display = 'none';
						}
					});
					playPauseButton.addEventListener('click', function (e) {
						const arialLabel =
							playPauseButton.getAttribute('aria-label');
						if (arialLabel == 'play') {
							swiperCarousel.autoplay.start();
							playPauseButton.setAttribute('aria-label', 'pause');
						} else {
							swiperCarousel.autoplay.pause();
							playPauseButton.setAttribute('aria-label', 'play');
						}
					});
				}
			}
		});
	}
}
