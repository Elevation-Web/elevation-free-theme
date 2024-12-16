import { popUpVideo } from '../../utils/popUpVideo';

const videosPopUp = document.querySelectorAll('.video-default-item');

if (videosPopUp && videosPopUp.length > 0) {
	videosPopUp.forEach((video) => {
		const videoId = video.getAttribute('id');
		const videoUrl = video.getAttribute('data-video-url');
		const videoType = video.getAttribute('data-video-type');

		popUpVideo(videoId, videoUrl, videoType, 'video-default-item');
	});
}
