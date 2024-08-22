export const animateNumbers = (selector) => {
	const elements = document.querySelectorAll(selector);

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
					const text = element.innerText;
					const targetNumber = parseFloat(
						text.replace(/[^0-9.]/g, '')
					);
					const prefix = text.match(/^[^\d]+/)?.[0] || '';
					const suffix = text.match(/[^\d]+$/)?.[0] || '';

					animateNumber(element, targetNumber, prefix, suffix);
					observer.unobserve(element); // Stop observing once the animation starts
				}
			});
		}, observerOptions);

		elements.forEach((element) => {
			observer.observe(element);
		});
	}

	function animateNumber(element, target, prefix, suffix) {
		let start = 0;
		const duration = 1500;
		const stepTime = Math.abs(Math.floor(duration / target));
		const startTime = new Date().getTime();
		const endTime = startTime + duration;

		function run() {
			const now = new Date().getTime();
			const remaining = Math.max((endTime - now) / duration, 0);
			const value = Math.round(target - remaining * target);

			element.innerText = formatNumber(value, prefix, suffix);

			if (value < target) {
				requestAnimationFrame(run);
			}
		}

		requestAnimationFrame(run);
	}

	function formatNumber(number, prefix, suffix) {
		let formattedNumber = number.toLocaleString();
		return `${prefix}${formattedNumber}${suffix}`;
	}
};
