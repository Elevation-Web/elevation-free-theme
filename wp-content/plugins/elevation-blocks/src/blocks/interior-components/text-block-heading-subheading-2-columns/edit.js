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

	const { id, anchor, preview, verticalAlignment } = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name} align-${verticalAlignment}`,
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
				title={__('Settings', 'elevation-blocks')}
				initialOpen={true}
			>
				<SelectControl
					label={__('Vertical Alignment', 'elevation-blocks')}
					value={verticalAlignment}
					options={[
						{
							label: __('Top', 'elevation-blocks'),
							value: 'flex-start',
						},
						{
							label: __('Middle', 'elevation-blocks'),
							value: 'center',
						},
						{
							label: __('Bottom', 'elevation-blocks'),
							value: 'flex-end',
						},
					]}
					onChange={(value) =>
						setAttributes({ verticalAlignment: value })
					}
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
