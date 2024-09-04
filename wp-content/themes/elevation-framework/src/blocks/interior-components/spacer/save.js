/* Gutenberg Dependencies */
import { useBlockProps } from '@wordpress/block-editor';

/* Internal Depencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { blockId, name } = getBlockName(blockName);

	const { attributes } = props;

	const { anchor, space, line, lineType, linePosition } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} ${space} line-${line ? 'enable' : 'disable'} line-type-${lineType} position-${linePosition}`,
	});

	return (
		<div
			id={anchor}
			data-block-id={blockId}
			aria-hidden="true"
			{...blockProps}
		/>
	);
};

export default save;
