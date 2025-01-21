/* Gutenberg Dependencies */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = (props) => {
	const { attributes } = props;
	const { anchor, id } = attributes;
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const blockProps = useBlockProps.save({
		className: `${name} alignfull`,
	});

	return (
		<div
			data-block-id={blockId}
			data-block-js="true"
			id={anchor || id}
			{...blockProps}
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
