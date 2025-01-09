import initSwiper from '../../../assets/scripts/utilities/swiper';
import Swal from 'sweetalert2';
// import { closeIconGreen } from '../components/images/icons';

initSwiper('.team-bios-carousel-container__swiper');

const buttons = document.querySelectorAll(`.swiper-slide`);

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		let contentHtml = button.querySelector('.team-bios-carousel__popup');

		if (!contentHtml) return;

		Swal.fire({
			closeButtonHtml:
				'<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.46436L8.07107 8.53542" stroke="#210044" stroke-width="1.5"/><path d="M8.07129 1.46436L1.00022 8.53542" stroke="#210044" stroke-width="1.5"/></svg><span>Close</span>',
			showCloseButton: true,
			html: contentHtml,
			showConfirmButton: false,
			closeButtonAriaLabel: `Close popup of test`,
			customClass: {
				container: 'team-bios-carousel__popup-container',
			},
		});
	});
});
