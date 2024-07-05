import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const { attributes } = props;

	const { align, gap, style } = attributes;

	const blockProps = useBlockProps.save({
		className: name + ' container',
	});

	return (
		<div data-block-id={name} {...blockProps} {...style}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
