/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import {
	InspectorControls,
	useSetting,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const {
		before_value,
		value,
		after_value,
		remove_comma,
		title_size,
		color,
	} = attributes;

	const colorPalette = useSetting('color.palette');

	useEffect(() => {
		getDefaultColor('color');
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

	return (
		<InspectorControls>
			<PanelBody title={__('Impact Settings', 'elevation')}>
				<TextControl
					label={__('Before Value', 'elevation')}
					value={before_value}
					onChange={(newValue) =>
						setAttributes({ before_value: newValue })
					}
				/>
				<TextControl
					label={__('Value', 'elevation')}
					value={value}
					onChange={(newValue) => setAttributes({ value: newValue })}
				/>

				<TextControl
					label={__('After Value', 'elevation')}
					value={after_value}
					onChange={(newValue) =>
						setAttributes({ after_value: newValue })
					}
				/>
				<ToggleControl
					label={__('Remove Comma', 'elevation')}
					checked={remove_comma}
					onChange={(newValue) =>
						setAttributes({ remove_comma: newValue })
					}
				/>
				<SelectControl
					label={__('Title Size', 'elevation')}
					value={title_size}
					options={[
						{ label: 'h1', value: 'h-1' },
						{ label: 'h2', value: 'h-2' },
						{ label: 'h3', value: 'h-3' },
						{ label: 'h4', value: 'h-4' },
						{ label: 'h5', value: 'h-5' },
						{ label: 'h6', value: 'h-6' },
					]}
					onChange={(newValue) =>
						setAttributes({ title_size: newValue })
					}
				/>
			</PanelBody>

			<PanelColorSettings
				title="Color Settings"
				initialOpen={false}
				colorSettings={[
					{
						value: color,
						onChange: (value) => {
							changeColor('color', value);
						},
						label: 'Text Color',
					},
				]}
			/>
		</InspectorControls>
	);
};
