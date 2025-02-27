import apiFetch from '@wordpress/api-fetch';

const getSiteUrl = async () => {
	try {
		const response = await apiFetch({ path: '/wp/v2/settings' });
		return response.url;
	} catch (error) {
		console.error('Error fetching site URL:', error);
		return null;
	}
};

export default getSiteUrl;
