/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import './editor.scss';
import json from './block.json';
import previewImage from './preview.webp';
import { TEMPLATE, TEMPLATE_ALT, allowedBlocks } from './template';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;
	const { anchor, id, grid_column, preview, altTemplate } = attributes;

	const blockProps = useBlockProps({
		className: `${name} row-${grid_column}`,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: altTemplate ? TEMPLATE_ALT : TEMPLATE,
		templateInsertUpdatesSelection: true,
		allowedBlocks: allowedBlocks,
		orientation: 'horizontal',
	});

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

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
			<div
				data-block-id={blockId}
				data-block-js="true"
				id={anchor || id}
				{...innerBlocksProps}
			/>
		</>
	);
};

export default Edit;
