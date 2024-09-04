/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalInputControl,
	SelectControl,
} from '@wordpress/components';
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
	const { anchor, id, grid_column, preview } = attributes;
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const blockProps = useBlockProps({
		className: `${name} alignfull row-${grid_column}`,
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

	const optionsGridLayout = [
		{
			label: '2',
			value: 'cards-2',
		},
		{
			label: '3',
			value: 'cards-3',
		},
	];

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Cards options')}>
				<SelectControl
					label="Grid Layout"
					value={grid_column}
					options={optionsGridLayout}
					onChange={(selectedGridLayout) => {
						setAttributes({
							grid_column: selectedGridLayout,
						});
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);

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
			{controls}
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
