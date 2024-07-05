import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const RemoveImageButton = ({ attributes, setAttributes, attrId }) => {
	return (
		<Button
			isDestructive
			onClick={() => {
				setAttributes({
					...attributes,
					[attrId]: '',
				});
			}}
		>
			{__('Remove Image', 'text-domain')}
		</Button>
	);
};

export const UploadMedia = ({ attributes, setAttributes, attrId }) => {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={(media) => {
					console.log(media);

					const newAttrs =
						attrId === 'imgDesktop'
							? {
									...attributes,
									[attrId]: media.url,
									imgAlt: media.alt,
								}
							: { ...attributes, [attrId]: media.url };

					setAttributes(newAttrs);
				}}
				allowedTypes={['image']}
				value={attributes[attrId]}
				render={({ open }) => (
					<Button onClick={open} primary isLarge>
						{__('Select Background Image', 'text-domain')}
					</Button>
				)}
			/>
		</MediaUploadCheck>
	);
};
