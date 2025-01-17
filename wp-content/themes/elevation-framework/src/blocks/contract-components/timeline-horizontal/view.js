const timelines = document.querySelectorAll('.timeline-horizontal');

if (timelines?.length > 0) {
	timelines.forEach((timeline) => {
		const slides = timeline.querySelectorAll('.timeline-horizontal-item');

		// Create the main container
		const swiperContainer = document.createElement('div');
		swiperContainer.className = 'timeline-horizontal__swiper--thumb';

		// Create the swiper-wrapper div
		const swiperWrapper = document.createElement('div');
		swiperWrapper.className = 'swiper-wrapper';

		slides.forEach((slide) => {
			const swiperSlide = document.createElement('div');
			swiperSlide.className = `swiper-slide`;

			const tooltipDate = document.createElement('span');
			tooltipDate.className = 'tooltip-date has-h-5-font-size';
			tooltipDate.textContent = slide.getAttribute('data-date');

			const dotDate = document.createElement('span');
			dotDate.className = 'dot-date';
			dotDate.ariaHidden = true;

			swiperSlide.appendChild(tooltipDate);
			swiperSlide.appendChild(dotDate);
			swiperWrapper.appendChild(swiperSlide);
		});

		// Create the navigation buttons
		const buttonPrev = document.createElement('div');
		buttonPrev.className = 'swiper-button-prev';

		const buttonNext = document.createElement('div');
		buttonNext.className = 'swiper-button-next';

		// Assemble the elements
		swiperContainer.appendChild(swiperWrapper);
		swiperContainer.appendChild(buttonPrev);
		swiperContainer.appendChild(buttonNext);

		// Append the swiperContainer to the body or a specific container
		timeline
			.querySelector('.swiper__container-wrapper')
			?.prepend(swiperContainer);
	});
}
