import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';

const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const { backgroundColor } = attributes;

	return (
		<InspectorControls>
			<PanelColorSettings
				title="Background Color"
				initialOpen={false}
				colorSettings={[
					{
						value: backgroundColor,
						onChange: (value) => {
							setAttributes({ backgroundColor: value });
						},
						label: 'Background Color',
					},
				]}
			/>
		</InspectorControls>
	);
};

export default Controls;
