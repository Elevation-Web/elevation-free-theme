import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useSetting,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { allowedBlocks, template } from './template';
import { getBlockName } from '../../utils/helpers';
import './editor.scss';
import { ColorPicker } from '../../components/ColorPicker';

/* Block */
import json from './block.json';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const colorPalette = useSetting('color.palette');

	const { id, anchor, preview, borderColor } = attributes;

	useEffect(() => {
		getDefaultColor('borderColor');
	}, []);

	const getDefaultColor = (key) => {
		if (!attributes[key].includes('#')) {
			const colorDefault = colorPalette.reduce((acc, curr) =>
				curr.slug == attributes[key] ? curr.color : acc
			);
			if (!!colorDefault) {
				setAttributes({
					[key]: colorDefault?.color || colorDefault,
				});
			}
		}
	};

	const changeColor = (key, newValue) => {
		if (!newValue) {
			setAttributes({ [key]: '#000' });
		} else {
			setAttributes({ [key]: newValue });
		}
	};

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

	const style = borderColor ? { '--border-color': borderColor } : {};

	const controls = (
		<InspectorControls>
			<PanelBody
				title={__('List Item Settings', 'elevation-blocks')}
				initialOpen={true}
			>
				<ColorPicker
					label={__('Border Color', 'elevation-blocks')}
					color={borderColor}
					onChange={(color) => changeColor('borderColor', color)}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div
				id={anchor || id}
				data-block-id={blockId}
				{...blockProps}
				style={style}
			>
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
