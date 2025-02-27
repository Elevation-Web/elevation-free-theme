import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { allowedBlocks, template } from './template';
import { getBlockName } from '../../utils/helpers';
import './editor.scss';

/* Block */
import json from './block.json';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const {
		id,
		anchor,
		preview,
		imageSize,
		columnsDirection,
		verticalAlignment,
		cropImage,
		withBorder,
	} = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name} image-${imageSize} columns-${columnsDirection} align-${verticalAlignment}${cropImage ? ' crop-image' : ''}${withBorder ? ' with-border' : ''}`,
	});

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

	const controls = (
		<InspectorControls>
			<PanelBody
				title={__('Settings', 'elevation-free-blocks')}
				initialOpen={true}
			>
				<SelectControl
					label={__('Image Size', 'elevation-free-blocks')}
					value={imageSize}
					options={[
						{
							label: __('Small', 'elevation-free-blocks'),
							value: 'small',
						},
						{
							label: __('Medium', 'elevation-free-blocks'),
							value: 'medium',
						},
						{
							label: __('Large', 'elevation-free-blocks'),
							value: 'large',
						},
					]}
					onChange={(value) => setAttributes({ imageSize: value })}
				/>
				<SelectControl
					label={__('Image Position', 'elevation-free-blocks')}
					value={columnsDirection}
					options={[
						{
							label: __('Left', 'elevation-free-blocks'),
							value: 'default',
						},
						{
							label: __('Right', 'elevation-free-blocks'),
							value: 'inverse',
						},
					]}
					onChange={(value) =>
						setAttributes({ columnsDirection: value })
					}
				/>
				{!cropImage && (
					<SelectControl
						label={__(
							'Vertical Alignment',
							'elevation-free-blocks'
						)}
						value={verticalAlignment}
						options={[
							{
								label: __('Top', 'elevation-free-blocks'),
								value: 'flex-start',
							},
							{
								label: __('Middle', 'elevation-free-blocks'),
								value: 'center',
							},
							{
								label: __('Bottom', 'elevation-free-blocks'),
								value: 'flex-end',
							},
						]}
						onChange={(value) =>
							setAttributes({ verticalAlignment: value })
						}
					/>
				)}
				<ToggleControl
					label="Crop Image to Fit Content"
					help={
						cropImage
							? 'Image will be cropped to fit content.'
							: 'Image will not be cropped.'
					}
					checked={cropImage}
					onChange={(newValue) => {
						setAttributes({ cropImage: newValue });
					}}
				/>
				<ToggleControl
					label="Border"
					help={
						withBorder
							? 'Border will be added.'
							: 'Border will not be added.'
					}
					checked={withBorder}
					onChange={(newValue) => {
						setAttributes({ withBorder: newValue });
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div id={anchor || id} data-block-id={blockId} {...blockProps}>
				<InnerBlocks
					template={template}
					allowedBlocks={allowedBlocks}
					templateLock={false}
				/>
			</div>
		</>
	);
};

export default Edit;
