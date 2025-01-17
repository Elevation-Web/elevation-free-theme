// Get all .timeline-vertical-year elements
const years = document.querySelectorAll('.timeline-vertical-year');

if (years?.length > 0) {
	// Initialize a flag to track if we should invert the position
	let invert = false;

	years.forEach((year) => {
		// Get the .timeline-vertical-item elements in this year
		const items = year.querySelectorAll('.timeline-vertical-item');

		// If the current year needs to be inverted, add the class
		if (invert) {
			year.classList.add('timeline-vertical-year__invert-position');
		} else {
			year.classList.remove('timeline-vertical-year__invert-position');
		}

		// Update the invert flag for the next year
		invert = items.length % 2 !== 0 ? !invert : invert;
	});
}
