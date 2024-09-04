/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { attributes } = props;
	const { containerWidth } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} custom-container--${containerWidth}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
