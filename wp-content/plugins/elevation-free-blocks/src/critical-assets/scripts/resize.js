// Debounce function to delay the execution of the callback
function debounce(callback, delay) {
	let timeout;
	return function () {
		clearTimeout(timeout);
		timeout = setTimeout(callback, delay);
	};
}

// Function to observe resize event with debounce
export function observeResize(callback) {
	window.addEventListener('resize', debounce(callback, 1000));
}
