/* Gutenberg Dependencies */
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

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import buttonOptions from './buttonOptions';
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const { blockId, name } = getBlockName(blockName);

	const { attributes, setAttributes } = props;

	const { text, url, btnStyle, ariaLabel, target } = attributes;

	const blockProps = useBlockProps({
		className: `${name} cta cta--${btnStyle}`,
	});

	// Process options from buttonOptions.js
	const buttonOptionsArray = Object.values(buttonOptions.buttonOptions).map(
		(entry) => {
			return {
				label: __(entry.label, 'elevation-blocks'),
				value: entry.value,
			};
		}
	);

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Button Styles', 'elevation-blocks')}>
				<SelectControl
					label={__('Button Style', 'elevation-blocks')}
					value={btnStyle}
					options={buttonOptionsArray}
					onChange={(value) =>
						setAttributes({ ...attributes, btnStyle: value })
					}
				/>
			</PanelBody>
			<PanelBody title={__('Button Link', 'elevation-blocks')}>
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
							placeholder={__(
								'Button URL...',
								'elevation-blocks'
							)}
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
			<PanelBody title={__('Button Aria Label', 'elevation-blocks')}>
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
					placeholder={__('Button text...', 'elevation-blocks')}
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
