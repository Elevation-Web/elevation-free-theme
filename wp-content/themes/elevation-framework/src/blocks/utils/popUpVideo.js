import Swal from 'sweetalert2';
import { getVideo } from './video';
import { closeIcon } from '../components/images/icons';

export const popUpVideo = (videoId, videoUrl, videoType, customClass) => {
	const button = document.querySelector(
		`#${videoId} .${customClass}__button`
	);

	if (button) {
		button.addEventListener('click', () => {
			Swal.fire({
				showCloseButton: true,
				html: getVideo(videoUrl, videoType),
				showConfirmButton: false,
				closeButtonHtml: closeIcon,
				closeButtonAriaLabel: 'Close video',
				customClass: {
					container: customClass + '__popup',
				},
			});
		});
	}
};
