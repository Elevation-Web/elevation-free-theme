import initSwiper from '../../../assets/scripts/utilities/swiper';
import Swal from 'sweetalert2';

initSwiper('.team-bios-carousel-container__swiper');

const cards = document.querySelectorAll(`.team-bios-carousel .swiper-slide`);
var currentPopup;

cards.forEach((card, idx) => {
	card.addEventListener('click', (e) => {
		let contentHtml = card.querySelector('.team-bios-carousel__popup');

		if (!contentHtml) return;

		contentHtml = contentHtml.cloneNode(true);
		let id = contentHtml.getAttribute('data-modal-id');
		currentPopup = id;

		Swal.fire({
			closeButtonHtml:
				'<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.46436L8.07107 8.53542" stroke="#210044" stroke-width="1.5"/><path d="M8.07129 1.46436L1.00022 8.53542" stroke="#210044" stroke-width="1.5"/></svg><span>Close</span>',
			showCloseButton: true,
			html: contentHtml,
			showConfirmButton: false,
			closeButtonAriaLabel: `Close popup of test`,
			customClass: {
				container: `team-bios-carousel__popup-container ${id} `,
			},
			showClass: { popup: 'team-bios-carousel-show' },
		});
		const next = document.querySelector(
			`.${currentPopup} .team-bios-modal__footer__button.next`
		);
		const prev = document.querySelector(
			`.${currentPopup} .team-bios-modal__footer__button.prev`
		);

		prev.addEventListener('click', function () {
			if (idx - 1 < 0) {
				cards[cards.length - 1].click();
			} else {
				cards[idx - 1].click();
			}
		});

		next.addEventListener('click', function () {
			if (idx + 1 >= cards.length) {
				cards[0].click();
			} else {
				cards[idx + 1].click();
			}
		});
	});
});
