/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = ({ attributes }) => {
	const { name: blockName } = json;

	const { tagName } = attributes;

	const { name } = getBlockName(blockName);

	const blockProps = useBlockProps.save({
		className: `${name} wp-block-group is-layout-flow wp-block-group-is-layout-flow`,
	});

	const CustomTag = `${tagName}`;

	return (
		<CustomTag {...blockProps}>
			<InnerBlocks.Content />
		</CustomTag>
	);
};

export default save;
