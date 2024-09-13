// import './style.scss';
// import './editor.scss';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
// import initCustomSwiper from '../../assets/scripts/utilities/customSwiper';
// import Swal from 'sweetalert2';

// initCustomSwiper('.exhibitions-gallery-block__swiper');

const imageInfos = Array.from(
	document.querySelectorAll('.exhibitions-gallery-block__carousel .carousel')
).map((carouselItem) => {
	const img = carouselItem.querySelector('img');
	const captionElement = carouselItem.querySelector('.carousel__caption p');
	let name = '';
	let caption = '';

	if (captionElement) {
		const parts = captionElement.textContent.split('\n');
		name = parts[0];
		caption = parts[1] || '';
	}

	return {
		url: img ? img.src : '',
		alt: img.getAttribute('alt'),
		name,
		caption,
	};
});

document
	.querySelectorAll('.exhibitions-gallery-block__carousel .stretched-link')
	.forEach((button, index) => {
		button.addEventListener('click', (e) => {
			e.preventDefault();

			const htmlContent = `
			<div class="popup-swiper-close">
					<button id="close-popup-swiper" aria-label="Close modal"></button>
				</div>
            <div class="swiper popup-swiper" id="popup-swiper">
                <div class="swiper-wrapper">
                    ${imageInfos
						.map(
							(info) => `
                        <div class="popup-carousel swiper-slide">
                            <img src="${info.url}" alt="${info.alt}">
                      		${info.name ? `<p>${info.name}</p>` : ''}
							${info.caption ? `<p>${info.caption}</p>` : ''}
                        </div>
                    `
						)
						.join('')}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        `;

			Swal.fire({
				html: htmlContent,
				showConfirmButton: false,
				width: 933,
				didOpen: () => {
					setTimeout(() => {
						const swiperContainer =
							document.querySelector('#popup-swiper');
						if (swiperContainer) {
							const popupSwiper = new Swiper('#popup-swiper', {
								loop: false,
								navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev',
								},
							});
							popupSwiper.slideTo(index, 0, false);
						}
					}, 100);
					// Add event listener for closing the modal
					const closeBtn =
						document.getElementById('close-popup-swiper');
					if (closeBtn) {
						closeBtn.addEventListener('click', () => {
							Swal.close();
						});
					}
				},
			});
		});
	});
