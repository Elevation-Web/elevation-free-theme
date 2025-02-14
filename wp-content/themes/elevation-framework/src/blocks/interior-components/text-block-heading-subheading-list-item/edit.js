import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { ColorPicker } from '../../components/ColorPicker';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { allowedBlocks, template } from './template';
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const { id, anchor, preview, borderColor } = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name}`,
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

	const style = borderColor ? { borderLeftColor: borderColor } : {};

	const controls = (
		<InspectorControls>
			<PanelBody
				title={__('List Item Settings', 'elevation')}
				initialOpen={true}
			>
				<ColorPicker
					label={__('Border Color', 'elevation')}
					color={borderColor}
					onChange={(color) => setAttributes({ borderColor: color })}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div id={anchor || id} {...blockProps} style={style}>
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
