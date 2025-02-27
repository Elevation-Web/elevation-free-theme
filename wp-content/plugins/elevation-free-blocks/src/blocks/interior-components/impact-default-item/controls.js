/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import {
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
/* Internal Dependencies */

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const { value, remove_comma, title_size } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__('Impact Settings', 'elevation-free-blocks')}>
				<TextControl
					label={__('Value', 'elevation-free-blocks')}
					value={value}
					onChange={(newValue) => setAttributes({ value: newValue })}
				/>
				<ToggleControl
					label={__('Remove Comma', 'elevation-free-blocks')}
					checked={remove_comma}
					help={'This applies only to frontpage.'}
					onChange={(newValue) =>
						setAttributes({ remove_comma: newValue })
					}
				/>
				<SelectControl
					label={__('Title Size', 'elevation-free-blocks')}
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
		</InspectorControls>
	);
};
