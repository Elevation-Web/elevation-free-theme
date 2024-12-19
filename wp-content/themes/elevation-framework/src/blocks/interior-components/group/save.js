/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = ({ attributes }) => {
	const { name: blockName } = json;

	const { tagName, type } = attributes;

	const { name, blockId } = getBlockName(blockName);

	const blockProps = useBlockProps.save({
		className: `${name} elevation-interior-components--group wp-block-group is-layout-flow wp-block-group-is-layout-flow ${type}`,
	});

	const CustomTag = `${tagName}`;

	return (
		<CustomTag
			data-block-id={blockId}
			data-block-js="false"
			{...blockProps}
		>
			<InnerBlocks.Content />
		</CustomTag>
	);
};

export default save;
