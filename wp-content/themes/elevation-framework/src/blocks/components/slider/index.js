import { forwardRef } from '@wordpress/element';
import SliderLayout from './layout';

function Slider(props, ref) {
	const { children, attributes } = props;

	const {
		speed,
		pagination,
		navigation,
		scrollbar,
		keyboard,
		mousewheel,
		slidesPerViewXl,
		slidesPerView,
	} = attributes;

	const options = {
		slidesPerView: slidesPerViewXl
			? String(slidesPerViewXl)
			: String(slidesPerView),
		speed: 1,
		navigation: navigation == 'yes',
		scrollbar: scrollbar == 'yes',
		pagination: pagination == 'yes',
		keyboard: keyboard == 'yes' && {
			enabled: keyboard == 'yes',
			onlyInViewport: true,
		},
		mousewheel: mousewheel == 'yes',
		slideClass: 'swiper-slide',
	};

	const selectedSlide = 1;

	return (
		<SliderLayout
			{...props}
			options={options}
			forwardedRef={ref}
			selectedSlide={selectedSlide - 1}
			activeIndex={1}
		>
			{children}
		</SliderLayout>
	);
}

export default forwardRef(Slider);
