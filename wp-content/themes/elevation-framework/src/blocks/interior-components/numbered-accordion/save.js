import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import json from './block.json';
import { getBlockName } from '../../utils/helpers';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;

	const { style } = attributes;

	const blockProps = useBlockProps.save({
		className: name,
	});

	return (
		<ul
			data-block-id={blockId}
			{...blockProps}
			{...style}
			data-block-js="true"
		>
			<InnerBlocks.Content />
		</ul>
	);
};

export default save;
