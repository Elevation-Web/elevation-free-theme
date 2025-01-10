import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import json from './block.json';
import { getBlockName } from '../../utils/helpers';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;

	const { id, anchor, heading, style } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name}__item`,
	});

	return (
		<>
			<div id={anchor || id} {...blockProps} {...style}>
				<button
					className="wp-block-heading has-h-6-font-size accordion__button"
					aria-controls={anchor || id}
				>
					{heading}
				</button>
				<div className="accordion__panel">
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
};

export default save;
