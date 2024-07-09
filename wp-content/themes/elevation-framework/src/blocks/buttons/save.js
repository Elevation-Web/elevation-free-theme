import clsx from 'clsx';

import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const blockProps = useBlockProps.save({
		className: clsx(name),
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlocksProps} />;
};

export default save;
