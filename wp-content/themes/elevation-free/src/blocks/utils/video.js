const youtubePatterns = [
	/^https?:\/\/((m|www)\.)?youtube\.com\/watch\?v=([^&]+)/i,
	/^https?:\/\/youtu\.be\/([^?&]+)/i,
];

export function getYoutubeVideoId(url) {
	for (const pattern of youtubePatterns) {
		const match = url.match(pattern);
		if (match) {
			return match[3] || match[1];
		}
	}
	return null; // Return null if no match is found
}

const vimeoPattern = /^https?:\/\/(www\.)?vimeo\.com\/(\d+)/i;

export function getVimeoVideoId(url) {
	const match = url.match(vimeoPattern);
	if (match) {
		return match[2]; // The video ID is in the second capturing group
	}
	return null; // Return null if no match is found
}

export const getVideo = (videoUrl, videoType) => {
	let url = videoUrl;

	if (videoType === 'youtube') {
		const youtubeId = getYoutubeVideoId(videoUrl);
		url = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
	}
	if (videoType === 'vimeo') {
		const vimeoId = getVimeoVideoId(videoUrl);
		url = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
	}

	let html = `
        <iframe width="100%" height="100%" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;

	if (videoType === 'mp4') {
		html = `
            <video width="100%" height="100%" controls autoplay>
                <source src="${url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            `;
	}
	return html;
};

export const GetVideo = ({ videoUrl, videoType }) => {
	if (videoType === 'youtube') {
		const youtubeId = getYoutubeVideoId(videoUrl);
		return (
			<iframe
				width="100%"
				height="100%"
				src={`https://www.youtube.com/embed/${youtubeId}`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		);
	}
	if (videoType === 'vimeo') {
		const vimeoId = getVimeoVideoId(videoUrl);
		return (
			<iframe
				width="100%"
				height="100%"
				src={`https://player.vimeo.com/video/${vimeoId}`}
				allow="autoplay; fullscreen; picture-in-picture"
				allowFullScreen
			/>
		);
	}
	if (videoType === 'mp4') {
		return (
			<video width="100%" height="100%" controls>
				<source src={videoUrl} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		);
	}
	return null;
};
