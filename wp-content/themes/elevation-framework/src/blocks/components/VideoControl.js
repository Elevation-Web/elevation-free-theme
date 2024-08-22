import { __ } from '@wordpress/i18n';
import { MediaPlaceholder } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { GetVideo } from '../utils/video';

const RemoveButton = ({ onRemove }) => {
	return (
		<Button isDestructive onClick={onRemove}>
			{__('Remove Video')}
		</Button>
	);
};

export const VideoControl = ({
	video,
	onSelectType,
	onChangeVideo,
	onRemoveVideo,
	onChangeVideoURL,
}) => {
	return (
		<PanelBody title={__('Video')}>
			<SelectControl
				label={__('Video Source')}
				value={video.videoType}
				options={[
					{ label: 'YouTube', value: 'youtube' },
					{ label: 'Vimeo', value: 'vimeo' },
					{ label: 'MP4', value: 'mp4' },
				]}
				onChange={onSelectType}
			/>
			<hr />
			{video.videoType === 'mp4' && video.url == false && (
				<MediaPlaceholder
					onSelect={onChangeVideo}
					allowedTypes={['video']}
					multiple={false}
					labels={{ title: 'Video' }}
				/>
			)}

			{video.videoType !== 'mp4' && (
				<TextControl
					label="Video URL"
					value={video?.url || ''}
					onChange={onChangeVideoURL}
				/>
			)}

			{video.url && (
				<>
					<GetVideo
						videoUrl={video.url}
						videoType={video.videoType}
					/>
					<RemoveButton onRemove={onRemoveVideo} />
				</>
			)}
		</PanelBody>
	);
};
