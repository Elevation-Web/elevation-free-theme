import clsx from 'clsx';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import json from './block.json';

const save = (props) => {
	const { attributes } = props;
	const { anchor, id, is_slider } = attributes;
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const blockProps = useBlockProps.save({
		className: clsx(name, [is_slider ? `${name}__swiper` : '']),
	});

	return (
		<div
			data-block-id={name}
			data-block-js="true"
			id={anchor || id}
			{...blockProps}
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
