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

	const { style } = attributes;

	const blockProps = useBlockProps.save({
		className: name,
	});

	const withContainer = blockProps.className.includes('alignfull')
		? 'container '
		: '';

	return (
		<div data-block-id={blockId} {...blockProps} {...style}>
			<div className={`${withContainer}${name}__container`}>
				<div className={`${name}__wrapper`}>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
