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
import { getImageAttributes } from '../../utils/getImageAttributes';
import { RemoveImageButton, UploadMedia } from '../../components/UploadMedia';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const colorPalette = useSetting('color.palette');
	const {
		before_value,
		value,
		after_value,
		remove_comma,
		title_size,
		icon,
		borderColor,
		backgroundColor,
	} = attributes;

	const removeImage = (key) => {
		setAttributes({
			[key]: {
				url: '',
				alt: '',
				id: 0,
				srcset: '',
				width: 0,
				height: 0,
			},
		});
	};

	useEffect(() => {
		getDefaultColor('borderColor');
		getDefaultColor('backgroundColor');
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

	const changeColor = (key, newValue) => {
		if (!newValue) {
			setAttributes({ [key]: '#000' });
		} else {
			setAttributes({ [key]: newValue });
		}
	};

	const addMedia = (key, media) => {
		const { fullSize, srcset, sizes, alt, id } = getImageAttributes(media);

		setAttributes({
			[key]: {
				...attributes[key],
				url: fullSize.url,
				alt,
				id,
				srcset,
				width: fullSize.width,
				height: fullSize.height,
				sizes,
			},
		});
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
			<PanelBody title={__('Icon')}>
				<div className="cards-long-description-icons-card__control-icon">
					{icon.url ? (
						<>
							<div className="cards-long-description-icons-card__control-icon-picker">
								<img src={icon.url} />
							</div>
							<RemoveImageButton
								onClick={() => {
									removeImage('icon');
								}}
							/>
						</>
					) : (
						<UploadMedia
							value={icon.url}
							onSelect={(newValue) => {
								addMedia('icon', newValue);
							}}
						/>
					)}
				</div>
			</PanelBody>

			<PanelColorSettings
				title="Colors Options"
				initialOpen={false}
				colorSettings={[
					{
						value: backgroundColor,
						onChange: (value) => {
							changeColor('backgroundColor', value);
						},
						label: 'Background Color',
					},
					{
						value: borderColor,
						onChange: (value) => {
							changeColor('borderColor', value);
						},
						label: 'Border Color',
					},
				]}
			/>
		</InspectorControls>
	);
};
