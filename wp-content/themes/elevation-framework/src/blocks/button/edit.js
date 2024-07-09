import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	__experimentalInputControl,
} from '@wordpress/components';
import { URLInputButton } from '@wordpress/block-editor';
import buttonOptions from './buttonOptions';
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];
	const { attributes, setAttributes } = props;

	const { text, url, btnStyle, ariaLabel, target } = attributes;

	// console.log('attributes', attributes);

	const blockProps = useBlockProps({
		className: `${name} cta cta--${btnStyle}`,
	});

	// Process options from buttonOptions.js
	const buttonOptionsArray = Object.values(buttonOptions.buttonOptions).map(
		(entry) => {
			return {
				label: __(entry.label, 'elevation'),
				value: entry.value,
			};
		}
	);

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Button Styles', 'elevation')}>
				<SelectControl
					label={__('Button Style', 'elevation')}
					value={btnStyle}
					options={buttonOptionsArray}
					onChange={(value) =>
						setAttributes({ ...attributes, btnStyle: value })
					}
				/>
			</PanelBody>
			<PanelBody title={__('Button Link', 'elevation')}>
				<>
					{url && (
						<a
							href={url}
							target="_blank"
							style={{ display: 'block', marginBottom: '20px' }}
						>
							{url}
						</a>
					)}
					<div style={{ marginBottom: '20px' }}>
						<URLInputButton
							url={url}
							placeholder={__('Button URL...', 'elevation')}
							onChange={(value) =>
								setAttributes({ ...attributes, url: value })
							}
						/>
					</div>
					<ToggleControl
						label="Open in new tab"
						checked={target}
						onChange={(newValue) => {
							setAttributes({ ...attributes, target: newValue });
						}}
					/>
				</>
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
