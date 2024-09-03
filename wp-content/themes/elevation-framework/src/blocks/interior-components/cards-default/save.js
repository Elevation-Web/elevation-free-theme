import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import json from './block.json';

const save = (props) => {
	const { attributes } = props;
	const { anchor, id, grid_column } = attributes;
	const { name: blockName } = json;
	const name = 'interior-components/' + blockName.split('/')[1];

	const blockProps = useBlockProps.save({
		className: `${name} alignfull row-${grid_column}`,
	});

	return (
		<div
			data-block-id={name}
			data-block-js="false"
			id={anchor || id}
			{...blockProps}
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
