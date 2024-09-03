import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const { attributes } = props;

	const { containerWidth } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} custom-container--${containerWidth}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
