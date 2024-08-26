import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const RemoveImageButton = ({ onClick }) => {
	return (
		<Button isDestructive variant={'secondary'} onClick={onClick}>
			{__('Remove Image')}
		</Button>
	);
};

export const UploadMedia = ({ value, onSelect }) => {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={onSelect}
				allowedTypes={['image']}
				value={value}
				render={({ open }) => (
					<Button onClick={open} variant="secondary">
						{__('Select Image')}
					</Button>
				)}
			/>
		</MediaUploadCheck>
	);
};
