/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { PanelBody, __experimentalInputControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import './editor.scss';
import json from './block.json';
import previewImage from './preview.webp';
import { TEMPLATE, allowedBlocks } from './template';

const Edit = (props) => {
	const { clientId, attributes, setAttributes } = props;

	const { anchor, id, preview } = attributes;

	const { name: blockName } = json;
	const { blockId, name } = getBlockName(blockName);

	const blockProps = useBlockProps({
		className: `${name} alignfull`,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
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
