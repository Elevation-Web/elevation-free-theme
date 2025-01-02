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
	const {
		anchor,
		id,
		value,
		remove_comma,
		title_size,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `${name}`,
	});

	return (
		<div
			data-block-id={blockId}
			data-block-js="false"
			id={anchor || id}
			{...blockProps}
		>
			<div className={`${name}__header`}>
				<h2 className={`${name}__value has-${title_size}-font-size`}>
					{remove_comma ? (
						<span
							className={`${name}__value-value numscrolleryears`}
							data-num={value}
						>
							{value}
						</span>
					) : (
						<span
							className={`${name}__value-value numscroller`}
							data-num={value}
						>
							{value}
						</span>
					)}
				</h2>
			</div>
			<div className={`${name}__content`}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
