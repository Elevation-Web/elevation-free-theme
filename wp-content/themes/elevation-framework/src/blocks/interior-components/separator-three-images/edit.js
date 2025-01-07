/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { SelectControl, PanelBody } from '@wordpress/components';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import './editor.scss';
import json from './block.json';
import previewImage from './preview.webp';
import { TEMPLATE } from './template';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;
	const { anchor, id, imagesRatio, preview } = attributes;

	const setRatio = (newRatio) => {
		setAttributes({ imagesRatio: newRatio });
	};

	const blockProps = useBlockProps({
		className: `${name} alignfull ratio-${imagesRatio}`,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
		templateInsertUpdatesSelection: true,
		allowedBlocks: [],
		orientation: 'horizontal',
		templateLock: true,
	});

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const ratioOptions = [
		{ label: 'Square - 1:1', value: '1-1' },
		{ label: 'Classic - 3:2', value: '3-2' },
		{ label: 'Standard - 4:3', value: '4-3' },
		{ label: 'Studio - 5:4', value: '5-4' },
		{ label: 'Wide - 16:9', value: '16-9' },
	];

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Images Ratio')}>
				<SelectControl
					label="Image Ratio"
					value={imagesRatio}
					options={ratioOptions}
					onChange={(newRatio) => setRatio(newRatio)}
					__nextHasNoMarginBottom
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
				data-block-js="false"
				id={anchor || id}
				{...innerBlocksProps}
			/>
		</>
	);
};

export default Edit;
