/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);
	const { attributes } = props;
	const { anchor, id, borderColor } = attributes;

	const style = borderColor ? { '--border-color': borderColor } : {};

	const blockProps = useBlockProps.save({
		className: `${name}`,
	});

	return (
		<div
			id={anchor || id}
			data-block-id={blockId}
			{...blockProps}
			style={style}
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
