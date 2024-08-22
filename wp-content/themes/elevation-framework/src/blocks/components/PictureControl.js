import { __ } from '@wordpress/i18n';
import { PanelBody, FocalPointPicker } from '@wordpress/components';
import { RemoveImageButton, UploadMedia } from './UploadMedia';

export const PictureControl = ({
	label = 'Background Image',
	img,
	setNewFocalPoint,
	styleImg,
	onSelect,
	onRemove,
}) => {
	return (
		<>
			<PanelBody title={__(label)}>
				{img?.url ? (
					<>
						<FocalPointPicker
							url={img.url}
							value={img.focalPoint}
							onDragStart={setNewFocalPoint}
							onDrag={setNewFocalPoint}
							onChange={setNewFocalPoint}
						/>
						<div style={styleImg} />
						<RemoveImageButton onClick={onRemove} />
					</>
				) : (
					<UploadMedia onSelect={onSelect} value={img.url} />
				)}
			</PanelBody>
		</>
	);
};
