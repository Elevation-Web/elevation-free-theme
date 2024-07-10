import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const save = (props) => {
	const { attributes } = props;

	const { style } = attributes;

	const blockProps = useBlockProps.save({
		className: 'banner-standard__info',
	});

	return (
		<div {...blockProps} {...style}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
