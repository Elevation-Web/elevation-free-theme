import Swiper from 'swiper';
import { Component } from '@wordpress/element';
// import initSwiper from '../../assets/scripts/utilities/swiper';

class SliderLayout extends Component {
	constructor() {
		super(...arguments);
		this.slider = false;
		this.initialSlide = 0;
		this.sliderMoving = false;
		this.btnNext = null;
		this.btnPrev = null;
	}

	initializeSwiper(options) {
		const i = Swiper.prototype.init;

		Swiper.prototype.init = function () {
			this.touchEventsData.formElements = '*';
			i.call(this);
		};

		this.sliderWrapper.classList.add('swiper-wrapper');

		this.btnPrev =
			this.sliderWrapper.parentNode.parentNode.querySelector(
				'.prev-step'
			);
		this.btnNext =
			this.sliderWrapper.parentNode.parentNode.querySelector(
				'.next-step'
			);

		console.log(options);

		this.slider = new Swiper(this.sliderWrapper.parentNode, {
			...options,
			initialSlide: this.initialSlide,
			spaceBetween: 30,
			direction: 'horizontal',
			allowTouchMove: false,
			loopPreventsSlide: false,
			slideToClickedSlide: true,
			observeSlideChildren: true,
			resizeObserver: false,
			observer: true,
			loop: false,
		});

		this.slider.on('sliderMove slideChangeTransitionStart', (e) => {
			if (!this.sliderMoving) {
				this.sliderWrapper.classList.add('sliderMoving');
				this.sliderMoving = true;
			}
		});

		this.slider.on('slideChange', (e) => {
			this.initialSlide = this.slider.activeIndex;
		});

		this.slider.on('touchEnd slideChangeTransitionEnd', (e) => {
			if (this.sliderMoving) {
				this.sliderWrapper.classList.remove('sliderMoving');
				this.sliderMoving = false;
			}
		});

		this.btnPrev.addEventListener('click', (e) => {
			this.slider.slideTo(this.slider.activeIndex - 1);
		});

		this.btnNext.addEventListener('click', (e) => {
			this.slider.slideTo(this.slider.activeIndex + 1);
		});
	}

	initializeSlider(force) {
		const { options, forwardedRef } = this.props;

		this.sliderWrapper = forwardedRef && forwardedRef.current;

		if (this.sliderWrapper && (!this.slider || force)) {
			this.initializeSwiper(options);
		}
	}

	destroySlider() {
		if (this.slider) {
			this.slider.destroy(true, true);
			this.slider = false;
		}
	}

	// goToSlide(slide) {
	// 	if (this.slider && slide) {
	// 		if (this.slider.snapIndex != slide) {
	// 			setTimeout(() => {
	// 				this.slider.slideTo(parseInt(slide));
	// 			}, 250);
	// 		}
	// 	}
	// }

	goToLastSlide() {
		let slides = this.slider?.slides?.length;
		if (this.slider && slides) {
			//this.goToSlide(slides);
		}
	}

	componentDidUpdate(prevProps) {
		const { options, selectedSlide, activeIndex } = this.props;
		if (!this.slider) {
			this.initializeSlider();
		}
	}

	componentWillUnmount() {
		this.destroySlider();
	}

	render() {
		const { children } = this.props;

		return <>{children}</>;
	}
}

export default SliderLayout;
