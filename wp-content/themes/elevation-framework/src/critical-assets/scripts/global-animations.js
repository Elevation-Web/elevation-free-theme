import { observeResize } from '../../blocks/utils/resize';

export const globalAnimations = () => {
	const baseSelectors = [
		'#primary p',
		'#primary img',
		'#primary .cta',
		'#primary li',
		'#primary h1',
		'#primary h2',
		'#primary h3',
		'#primary h4',
		'#primary h5',
		'#primary h6',
		'.fade-in-bottom',
		'.timeline-vertical-item',
	];
	const exclusionSelectors = [
		'.accordion-item__item p',
		'.banner-full-img img',
		'.video-full-screen-pop-up img',
		'.accordion-item__item img',
		'.accordion-item__item .cta',
		'.team-bios-with-pop-up .title',
		'.team-bios-with-pop-up img',
		'.team-bios-with-pop-up p',
		'.team-bios-with-pop-up .cta',
		'.no-animate *',
		'.no-animate',
		'.logos-descriptions-item img',
		'.logos-carousel-item img',
		'.testimonial-carousel-item__image img',
		'.testimonial-single-item__image img',
		'.timeline-vertical-item *',
		'.timeline-horizontal-item img',
		'.team-bios-modal li',
	];

	function combineSelectors(base, exclusions) {
		return base
			.map((baseSelector) => {
				const exclusionString = exclusions
					.map((exclusion) => `:not(${exclusion})`)
					.join('');
				return `${baseSelector}${exclusionString}`;
			})
			.join(',\n');
	}

	const selectors = combineSelectors(baseSelectors, exclusionSelectors);

	const elements = document.querySelectorAll(selectors);

	elements.forEach((element) => {
		element.classList.add('fade-in-bottom');
	});

	const observerOptions = {
		root: null, // Use the viewport as the root
		rootMargin: '0px',
		threshold: 0.1, // Trigger when 10% of the element is visible
	};

	// Check if the user has "Reduce Motion" enabled
	const prefersReducedMotion = window.matchMedia(
		'(prefers-reduced-motion: reduce)'
	).matches;

	if (!prefersReducedMotion) {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = entry.target;

					// Add the fade-in from bottom animation class
					element.classList.add('animate');

					// Stop observing once the animation starts
					observer.unobserve(element);
				}
			});
		}, observerOptions);

		elements.forEach((element) => {
			observer.observe(element);
		});
	}
};
