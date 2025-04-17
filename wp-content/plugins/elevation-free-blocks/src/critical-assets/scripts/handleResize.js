/**
 *
 * @param {string} breakpoint
 * @param {function} cbUp
 * @param {function} cbDown
 */

export const handleResize = (breakpoint, cbDown, cbUp) => {
	const resizeHanlder = () => {
		const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

		if (mediaQuery.matches) {
			cbUp();
		} else {
			cbDown();
		}
	};

	window.addEventListener('resize', resizeHanlder);

	resizeHanlder();
};
