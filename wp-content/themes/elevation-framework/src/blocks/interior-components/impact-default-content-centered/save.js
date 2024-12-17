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
	const { anchor, id, backgroundColor, borderColor } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} counter alignfull`,
		style: {
			backgroundColor: backgroundColor,
			'--border-color-impact-default': borderColor,
		},
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
