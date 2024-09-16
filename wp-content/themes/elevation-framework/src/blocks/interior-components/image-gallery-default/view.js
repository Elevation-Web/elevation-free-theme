import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Swal from 'sweetalert2';

const getImages = (gallery) => {
	const imageInfos = Array.from(
		gallery.querySelectorAll('.image-gallery')
	).map((carouselItem) => {
		const img = carouselItem.getAttribute('data-image');
		const captionElement = carouselItem.querySelector('.media-caption');
		let name = '';
		let caption = '';

		if (captionElement) {
			const parts = captionElement.textContent.split('\n');
			name = parts[0];
			caption = parts[1] || '';
		}

		return {
			url: img ? img : '',
			alt: img ? img.alt : '',
			name,
			caption,
		};
	});

	return imageInfos;
};

const Galleries = document.querySelectorAll('.image-gallery-default__grid');

Galleries.forEach((gallery) => {
	const allImage = gallery.querySelectorAll('.image-gallery');

	allImage.forEach((button, index) => {
		button.addEventListener('click', (e) => {
			e.preventDefault();
			const imageInfos = getImages(gallery);

			const htmlContent = `
				<div class="popup-swiper-close">
						<button id="close-popup-swiper" class="image-gallery__close" aria-label="Close modal"></button>
					</div>
				<div class="image-gallery-default__popup-container swiper popup-swiper" id="popup-swiper">
					<div class="swiper-wrapper">
						${imageInfos
							.map(
								(info) => `
							<div class="image-gallery__carousel swiper-slide">
								<img src="${info.url}" alt="${info.alt}">
								  ${info.name ? `<p class="image-gallery__caption">${info.name}</p>` : ''}
							</div>
						`
							)
							.join('')}
					</div>
					<div class="swiper-pagination">
						<div class="swiper-button-next"></div>
						<div class="swiper-button-prev"></div>
					</div>
				</div>
			`;

			Swal.fire({
				html: htmlContent,
				showConfirmButton: false,
				width: 933,
				customClass: {
					container: 'image-gallery-default__popup',
					htmlContainer: 'image-gallery-default__popup--box',
				},

				didOpen: () => {
					setTimeout(() => {
						const swiperContainer =
							document.querySelector('#popup-swiper');
						if (swiperContainer) {
							const popupSwiper = new Swiper('#popup-swiper', {
								loop: true,
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
});

// Galleries.querySelectorAll('.image-gallery-default__grid').forEach(
// 	(button, index) => {
// 		button.addEventListener('click', (e) => {
// 			e.preventDefault();

// 			const htmlContent = `
// 			<div class="popup-swiper-close">
// 					<button id="close-popup-swiper" class="image-gallery__close" aria-label="Close modal"></button>
// 				</div>
//             <div class="image-gallery-default__popup-container swiper popup-swiper" id="popup-swiper">
//                 <div class="swiper-wrapper">
//                     ${imageInfos
// 						.map(
// 							(info) => `
//                         <div class="image-gallery__carousel swiper-slide">
//                             <img src="${info.url}" alt="${info.alt}">
//                       		${info.name ? `<p class="image-gallery__caption">${info.name}</p>` : ''}
//                         </div>
//                     `
// 						)
// 						.join('')}
//                 </div>
// 				<div class="swiper-pagination">
//         	        <div class="swiper-button-next"></div>
//             	    <div class="swiper-button-prev"></div>
// 				</div>
//             </div>
//         `;

// 			Swal.fire({
// 				html: htmlContent,
// 				showConfirmButton: false,
// 				width: 933,
// 				customClass: {
// 					container: 'image-gallery-default__popup',
// 					htmlContainer: 'image-gallery-default__popup--box',
// 				},

// 				didOpen: () => {
// 					setTimeout(() => {
// 						const swiperContainer =
// 							document.querySelector('#popup-swiper');
// 						if (swiperContainer) {
// 							const popupSwiper = new Swiper('#popup-swiper', {
// 								loop: true,
// 								navigation: {
// 									nextEl: '.swiper-button-next',
// 									prevEl: '.swiper-button-prev',
// 								},
// 							});
// 							popupSwiper.slideTo(index, 0, false);
// 						}
// 					}, 100);
// 					// Add event listener for closing the modal
// 					const closeBtn =
// 						document.getElementById('close-popup-swiper');
// 					if (closeBtn) {
// 						closeBtn.addEventListener('click', () => {
// 							Swal.close();
// 						});
// 					}
// 				},
// 			});
// 		});
// 	}
// );

// document.querySelectorAll('.image-gallery').forEach((button, index) => {
// 	button.addEventListener('click', (e) => {
// 		e.preventDefault();

// 		const htmlContent = `
// 			<div class="popup-swiper-close">
// 					<button id="close-popup-swiper" class="image-gallery__close" aria-label="Close modal"></button>
// 				</div>
//             <div class="image-gallery-default__popup-container swiper popup-swiper" id="popup-swiper">
//                 <div class="swiper-wrapper">
//                     ${imageInfos
// 						.map(
// 							(info) => `
//                         <div class="image-gallery__carousel swiper-slide">
//                             <img src="${info.url}" alt="${info.alt}">
//                       		${info.name ? `<p class="image-gallery__caption">${info.name}</p>` : ''}
//                         </div>
//                     `
// 						)
// 						.join('')}
//                 </div>
// 				<div class="swiper-pagination">
//         	        <div class="swiper-button-next"></div>
//             	    <div class="swiper-button-prev"></div>
// 				</div>
//             </div>
//         `;

// 		Swal.fire({
// 			html: htmlContent,
// 			showConfirmButton: false,
// 			width: 933,
// 			customClass: {
// 				container: 'image-gallery-default__popup',
// 				htmlContainer: 'image-gallery-default__popup--box',
// 			},

// 			didOpen: () => {
// 				setTimeout(() => {
// 					const swiperContainer =
// 						document.querySelector('#popup-swiper');
// 					if (swiperContainer) {
// 						const popupSwiper = new Swiper('#popup-swiper', {
// 							loop: true,
// 							navigation: {
// 								nextEl: '.swiper-button-next',
// 								prevEl: '.swiper-button-prev',
// 							},
// 						});
// 						popupSwiper.slideTo(index, 0, false);
// 					}
// 				}, 100);
// 				// Add event listener for closing the modal
// 				const closeBtn = document.getElementById('close-popup-swiper');
// 				if (closeBtn) {
// 					closeBtn.addEventListener('click', () => {
// 						Swal.close();
// 					});
// 				}
// 			},
// 		});
// 	});
// });
