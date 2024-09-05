/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;
	const { anchor, id, lineColor } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name}`,
	});

	const style = {
		'border-color': lineColor,
	};

	return (
		<div data-block-id={blockId} id={anchor || id} {...blockProps}>
			<div className={`${name}__container`}>
				<div className={`${name}__content`} style={style}>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
