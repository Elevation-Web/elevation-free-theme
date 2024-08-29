import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const blockProps = useBlockProps.save({
		className: `${name} wp-block-group is-layout-flow wp-block-group-is-layout-flow`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
