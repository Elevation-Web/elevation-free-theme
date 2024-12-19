import clsx from 'clsx';
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import './editor.scss';
import previewImage from './preview.webp';
import { allowedBlocks, TEMPLATE } from './template';
import { getBlockName } from '../../utils/helpers';
import json from './block.json';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const { id, anchor, preview } = attributes;

	const blockProps = useBlockProps({
		className: clsx(name),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
		templateInsertUpdatesSelection: true,
		allowedBlocks: allowedBlocks,
		orientation: 'vertical',
		attributes: { itemNumber: 0 },
	});

	useEffect(() => {
		setAttributes({ id: anchor || `${name}-${clientId}` });
	}, [clientId, setAttributes, anchor]);

	if (preview) {
		return (
			<div className={`${name}-preview`}>
				<img
					src={previewImage}
					alt="Preview"
					style={{
						objectFit: 'contain',
						maxHeight: '100%',
						maxWidth: '100%',
					}}
				/>
			</div>
		);
	}

	return (
		<>
			<ul
				data-block-id={blockId}
				data-block-js="true"
				id={anchor || id}
				{...innerBlocksProps}
			/>
		</>
	);
};

export default Edit;
