import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import json from './block.json';
import { getBlockName } from '../../utils/helpers';

const save = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { attributes } = props;

	const { anchor, id } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} swiper-slide`,
	});

	return (
		<div id={anchor || id} {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
