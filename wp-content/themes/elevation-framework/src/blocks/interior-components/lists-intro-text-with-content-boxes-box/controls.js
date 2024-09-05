/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { InspectorControls, useSetting } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import { ColorPicker } from '../../components/ColorPicker';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const { lineColor } = attributes;
	const colorPalette = useSetting('color.palette');

	useEffect(() => {
		getDefaultColor();
	}, []);

	/* This function set the rgba color based in custom vars 
       with the key set the attribute 
    */
	const getDefaultColor = (key) => {
		if (!lineColor.includes('#')) {
			const colorDefault = colorPalette.reduce((acc, curr) =>
				curr.slug == lineColor ? curr.color : acc
			);
			if (!!colorDefault) {
				setAttributes({
					lineColor: colorDefault?.color || colorDefault,
				});
			}
		}
	};

	return (
		<InspectorControls>
			<PanelBody title={__('Border Color', 'elevation')}>
				<VStack
					justify="flex-start"
					className={'cards-icons__control-icon__colors'}
				>
					<ColorPicker
						color={lineColor}
						label={'Line Color'}
						onChange={(newValue) => {
							if (!newValue) {
								setAttributes({ lineColor: '#000' });
							} else {
								setAttributes({ lineColor: newValue });
							}
						}}
					/>
				</VStack>
			</PanelBody>
		</InspectorControls>
	);
};
