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
			<li data-block-id={blockId} {...blockProps} {...style}>
				<div className="numbered-accordion__item-body">
					<button
						className="wp-block-heading has-h-6-font-size numbered-accordion__button"
						aria-controls={anchor || id}
					>
						{heading}
					</button>
					<div
						id={anchor || id}
						className="numbered-accordion__panel"
					>
						<InnerBlocks.Content />
					</div>
				</div>
			</li>
		</>
	);
};

export default save;
