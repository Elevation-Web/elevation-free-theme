import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = (props) => {
	const BANNER_STANDARD_INFO_ALLOWED_BLOCKS = [
		'core/heading',
		'core/paragraph',
		'elevation/interior-components--buttons',
	];
	const BANNER_STANDARD_INFO_TEMPLATE = [
		['core/heading', { level: 1 }],
		['core/paragraph', { placeholder: 'Type description here' }],
	];

	const { attributes } = props;

	const { style } = attributes;

	const blockProps = useBlockProps({
		className: 'banner-standard__info',
	});

	return (
		<div {...blockProps} {...style}>
			<InnerBlocks
				template={BANNER_STANDARD_INFO_TEMPLATE}
				allowedBlocks={BANNER_STANDARD_INFO_ALLOWED_BLOCKS}
			/>
		</div>
	);
};

export default Edit;
