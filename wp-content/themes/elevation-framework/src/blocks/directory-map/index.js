import './style.scss';
import './editor.scss';
import 'sticky-sidebar/dist/sticky-sidebar.min.js';

/*
 *	 This move the modals to before </body>
 */
const moveModals = document.querySelectorAll('.modal');
if (moveModals) {
	moveModals.forEach((moveModal) => {
		document.querySelector('body').append(moveModal);
	});
}
if (window.matchMedia('(min-width: 1199px)').matches) {
	var sidebar = new StickySidebar('#sidebar', {
		containerSelector: '#data-container-directory',
		innerWrapperSelector: '.innerWrapSelector',
		topSpacing: 100,
		bottomSpacing: 0,
	});
}
