/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);
	const { attributes } = props;
	const { anchor, id } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} `,
	});

	return (
		<div id={anchor || id} {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
