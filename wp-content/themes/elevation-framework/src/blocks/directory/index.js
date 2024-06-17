import './style.scss';
import './editor.scss';
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */
const moveModals = document.querySelectorAll('.filter__modal');
if (moveModals) {
	moveModals.forEach((moveModal) => {
		document.querySelector('body').append(moveModal);
	});
}
