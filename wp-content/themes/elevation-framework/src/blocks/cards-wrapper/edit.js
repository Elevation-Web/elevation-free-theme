import clsx from 'clsx';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalInputControl,
	ToggleControl,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import json from './block.json';
import './editor.scss';
import previewImage from './preview.webp';

const Edit = (props) => {
	const { clientId, attributes, setAttributes } = props;

	const { anchor, id, is_slider, preview } = attributes;

	const CARDS_WRAPPER_TEMPLATE = [
		['elevation/cards-background-images-plus-icons'],
		['elevation/cards-background-images-plus-icons'],
		['elevation/cards-background-images-plus-icons'],
	];

	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const blockProps = useBlockProps({
		className: clsx(name, [is_slider ? `${name}__swiper` : '']),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: CARDS_WRAPPER_TEMPLATE,
		templateInsertUpdatesSelection: true,
		orientation: 'horizontal',
	});

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Cards options')}>
				<ToggleControl
					label="Layout slider"
					checked={is_slider}
					onChange={(newValue) => {
						setAttributes({ is_slider: newValue });
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
				data-block-id={name}
				data-block-js="true"
				id={anchor || id}
				{...innerBlocksProps}
			/>
		</>
	);
};

export default Edit;
