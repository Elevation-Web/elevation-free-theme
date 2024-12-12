import {
	InspectorControls,
	PanelColorSettings,
	useSetting,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const { backgroundColor } = attributes;
	const colorPalette = useSetting('color.palette');

	useEffect(() => {
		getDefaultColor('backgroundColor');
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
			<PanelColorSettings
				title="Background Color"
				initialOpen={false}
				colorSettings={[
					{
						value: backgroundColor,
						onChange: (value) => {
							changeColor('backgroundColor', value);
						},
						label: 'Background Color',
					},
				]}
			/>
		</InspectorControls>
	);
};

export default Controls;
