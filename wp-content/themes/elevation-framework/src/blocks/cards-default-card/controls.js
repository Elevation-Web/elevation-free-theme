/* External Dependencies */
/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	__experimentalInputControl,
	__experimentalVStack as VStack,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import {
	useSetting,
	InspectorControls,
	URLInputButton,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import { ColorPicker } from '../components/ColorPicker';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const {
		link,
		tagName,
		backgroundColorHover,
		textColorHover,
		headingColor,
	} = attributes;
	const { url, target, ariaLabel } = link;
	const colorPalette = useSetting('color.palette');

	useEffect(() => {
		getDefaultColor('backgroundColorHover');
		getDefaultColor('textColorHover');
		getDefaultColor('headingColor');
	}, []);

	/* This function set the rgba color based in custom vars 
       with the key set the attribute 
    */
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

	const headingOptions = [
		{
			label: 'h1',
			value: '1',
		},
		{
			label: 'h2',
			value: '2',
		},
		{
			label: 'h3',
			value: '3',
		},
		{
			label: 'h4',
			value: '4',
		},
		{
			label: 'h5',
			value: '5',
		},
		{
			label: 'h6',
			value: '6',
		},
	];

	const changeColor = (key, newValue) => {
		if (!newValue) {
			setAttributes({ [key]: '#000' });
		} else {
			setAttributes({ [key]: newValue });
		}
	};

	return (
		<InspectorControls>
			<PanelBody title={__('Card Link', 'elevation')}>
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
							placeholder={__('Card Link URL...', 'elevation')}
							onChange={(newValue) =>
								setAttributes({
									link: {
										...link,
										url: newValue,
									},
								})
							}
						/>
					</div>
					<ToggleControl
						label="Open in new tab"
						checked={target}
						onChange={(newValue) => {
							setAttributes({
								link: {
									...link,
									target: newValue,
								},
							});
						}}
					/>
				</>
				<__experimentalInputControl
					value={ariaLabel}
					placeholder="Button Aria Label..."
					onChange={(newValue) => {
						setAttributes({
							link: {
								...link,
								ariaLabel: newValue,
							},
						});
					}}
				/>
			</PanelBody>
			<PanelBody title={__('Heading Options', 'elevation')}>
				<SelectControl
					label="Heading Size"
					value={tagName}
					options={headingOptions}
					onChange={(newValue) => {
						setAttributes({
							tagName: newValue,
						});
					}}
				/>
				<ColorPicker
					color={headingColor}
					label={'Heading Color'}
					onChange={(newValue) => {
						changeColor('headingColor', newValue);
					}}
				/>
			</PanelBody>
			<PanelBody title={__('Hover Options', 'elevation')}>
				<VStack
					justify="flex-start"
					className={'cards-default__control-icon__colors'}
				>
					<ColorPicker
						color={backgroundColorHover}
						label={'Background Color [Hover]'}
						onChange={(newValue) => {
							changeColor('backgroundColorHover', newValue);
						}}
					/>
					<ColorPicker
						color={textColorHover}
						label={'Text Color [Hover]'}
						onChange={(newValue) => {
							changeColor('textColorHover', newValue);
						}}
					/>
				</VStack>
			</PanelBody>
		</InspectorControls>
	);
};
