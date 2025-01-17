/* External Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import json from './block.json';
import { getBlockName } from '../../utils/helpers';
import { TEMPLATE, allowedBlocks } from './template';
import { useEffect } from 'react';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const { anchor, id } = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name}`,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
		allowedBlocks: allowedBlocks,
	});
	return (
		<>
			<div id={anchor || id} {...innerBlocksProps} />
		</>
	);
};

export default Edit;
