/* External Dependencies */
/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

/* Internal Dependencies */
import { RemoveImageButton, UploadMedia } from '../components/UploadMedia';
import { getImageAttributes } from '../utils/getImageAttributes';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const { icon } = attributes;

	const removeImage = (key) => {
		setAttributes({
			[key]: {
				url: '',
				alt: '',
				id: 0,
				srcset: '',
				width: 0,
				height: 0,
			},
		});
	};

	const addMedia = (key, media) => {
		const { fullSize, srcset, sizes, alt, id } = getImageAttributes(media);

		setAttributes({
			[key]: {
				...attributes[key],
				url: fullSize.url,
				alt,
				id,
				srcset,
				width: fullSize.width,
				height: fullSize.height,
				sizes,
			},
		});
	};

	return (
		<InspectorControls>
			<PanelBody title={__('Icon Settings', 'elevation')}>
				<div className="cards-long-description-icons-card__control-icon">
					{icon.url ? (
						<>
							<div className="cards-long-description-icons-card__control-icon-picker">
								<img src={icon.url} />
							</div>
							<RemoveImageButton
								onClick={() => {
									removeImage('icon');
								}}
							/>
						</>
					) : (
						<UploadMedia
							value={icon.url}
							onSelect={(newValue) => {
								addMedia('icon', newValue);
							}}
						/>
					)}
				</div>
			</PanelBody>
		</InspectorControls>
	);
};
