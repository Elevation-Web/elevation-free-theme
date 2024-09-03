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
	];
	const exclusionSelectors = [
		'.cards-background-images-plus-icons p',
		'.accordion-item__item p',
		'.banner-full-img img',
		'.cards-background-images-plus-icons img',
		'.video-full-screen-pop-up img',
		'.accordion-item__item img',
		'.callout-full-screen-img__image img',
		'.cards-background-images-plus-icons .cta',
		'.accordion-item__item .cta',
		'img.home-ways-to-support__background',
		'.home-ways-to-support-box img',
		'.sb-wall img',
		'.sb-wall p',
		'.sb-wall .cta',
		'.home-programs-box img',
		'.programs-tabs img',
		'.programs-tabs p',
		'.programs-tabs .cta',
		'.programs-tabs li',
		'.programs-tabs h1',
		'.programs-tabs h2',
		'.programs-tabs h3',
		'.programs-tabs h4',
		'.programs-tabs h5',
		'.programs-tabs h6',
		'.orange-county-banner img',
		'.programs-banner-top .media-image',
		'.donate-banner__container .media-image',
		'img.donate-banner__background',
		'.home-banner .media-image',
		'.home-impact__bottom-image',
		'.team-bios-with-pop-up .title',
		'.team-bios-with-pop-up img',
		'.team-bios-with-pop-up p',
		'.team-bios-with-pop-up .cta',
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
