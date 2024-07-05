import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	__experimentalInputControl,
} from '@wordpress/components';
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];
	const { attributes, setAttributes } = props;

	const { text, url, btnStyle, ariaLabel } = attributes;

	console.log('attributes', attributes);

	const blockProps = useBlockProps({
		className: `${name} cta cta--${btnStyle}`,
	});

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Button Styles', 'elevation')}>
				<SelectControl
					label={__('Button Style', 'elevation')}
					value={btnStyle}
					options={[
						{
							label: __('Primary', 'elevation'),
							value: 'primary',
						},
						{
							label: __('Secondary', 'elevation'),
							value: 'secondary',
						},
					]}
					onChange={(value) =>
						setAttributes({ ...attributes, btnStyle: value })
					}
				/>
				<__experimentalInputControl
					value={url}
					placeholder={__('Button URL...', 'elevation')}
					onChange={(value) =>
						setAttributes({ ...attributes, url: value })
					}
				/>
			</PanelBody>
			<PanelBody title={__('Button Aria Label', 'elevation')}>
				<__experimentalInputControl
					value={ariaLabel}
					placeholder="Button Aria Label..."
					onChange={(value) =>
						setAttributes({ ...attributes, ariaLabel: value })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div {...blockProps}>
				<TextControl
					placeholder={__('Button text...', 'elevation')}
					value={text}
					onChange={(value) =>
						setAttributes({ ...attributes, text: value })
					}
				/>
			</div>
		</>
	);
};

export default Edit;
