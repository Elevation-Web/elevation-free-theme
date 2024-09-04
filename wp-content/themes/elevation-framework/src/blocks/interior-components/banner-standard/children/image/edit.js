import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = (props) => {
	const BANNER_STANDARD_IMAGE_ALLOWED_BLOCKS = ['core/image'];
	const BANNER_STANDARD_IMAGE_TEMPLATE = [
		['core/image', { url: 'https://via.placeholder.com/644/408' }],
	];

	const { attributes } = props;

	const { style } = attributes;

	const blockProps = useBlockProps({
		className: 'banner-standard__image',
	});

	return (
		<div {...blockProps} {...style}>
			<InnerBlocks
				template={BANNER_STANDARD_IMAGE_TEMPLATE}
				allowedBlocks={BANNER_STANDARD_IMAGE_ALLOWED_BLOCKS}
			/>
		</div>
	);
};

export default Edit;
