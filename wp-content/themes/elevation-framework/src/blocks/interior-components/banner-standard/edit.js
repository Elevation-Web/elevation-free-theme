/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';

/* Interior Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';
import './editor.scss';
import previewImage from './preview.webp';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const BANNER_STANDARD_ALLOWED_BLOCKS = [
		'elevation/banner-standard-info',
		'elevation/banner-standard-image',
	];

	const BANNER_STANDARD_TEMPLATE = [
		['elevation/banner-standard-info'],
		['elevation/banner-standard-image'],
	];

	const { attributes } = props;
	const { preview, style } = attributes;

	const blockProps = useBlockProps({
		className: name,
	});

	const [withContainer, setWithContainer] = useState('');

	useEffect(() => {
		setWithContainer(() => {
			return blockProps.className.includes('alignfull')
				? 'container '
				: '';
		});
	}, [props]);

	if (preview) {
		return (
			<div className={`${name}-preview`}>
				<img
					src={previewImage}
					alt="Preview"
					style={{
						objectFit: 'contain',
						maxHeight: '100%',
						maxWidth: '100%',
					}}
				/>
			</div>
		);
	}

	return (
		<>
			<div data-block-id={blockId} {...blockProps} {...style}>
				<div className={`${withContainer}${name}__container`}>
					<div className={`${name}__wrapper`}>
						<InnerBlocks
							template={BANNER_STANDARD_TEMPLATE}
							allowedBlocks={BANNER_STANDARD_ALLOWED_BLOCKS}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
