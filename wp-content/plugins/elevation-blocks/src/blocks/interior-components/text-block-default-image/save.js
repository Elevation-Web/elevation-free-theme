/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);
	const { attributes } = props;
	const {
		anchor,
		id,
		imageSize,
		columnsDirection,
		verticalAlignment,
		cropImage,
		withBorder,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} image-${imageSize} columns-${columnsDirection} align-${verticalAlignment}${cropImage ? ' crop-image' : ''}${withBorder ? ' with-border' : ''}`,
	});

	return (
		<div id={anchor || id} data-block-id={blockId} {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
