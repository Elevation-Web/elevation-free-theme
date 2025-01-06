/* Gutenberg Dependencies */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;
	const { anchor, id, backgroundColor } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} counter alignfull`,
		style: {
			'--background-color': backgroundColor,
		},
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
