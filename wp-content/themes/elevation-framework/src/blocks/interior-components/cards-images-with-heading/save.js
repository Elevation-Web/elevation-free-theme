import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import json from './block.json';
import { getBlockName } from '../../utils/helpers';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);
	/*  */
	const { attributes } = props;
	const { anchor, id, grid_column } = attributes;
	const blockProps = useBlockProps.save({
		className: `${name} alignfull row-${grid_column}`,
	});

	return (
		<div
			data-block-id={blockId}
			data-block-js="false"
			id={anchor || id}
			{...blockProps}
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
