const accordions = document.querySelectorAll('.accordion__button');

accordions.forEach((accordion) => {
	accordion.addEventListener('click', () => {
		accordion.classList.toggle('active');
		accordion.setAttribute(
			'aria-expanded',
			accordion.classList.contains('active')
		);

		const panel = accordion.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
});
