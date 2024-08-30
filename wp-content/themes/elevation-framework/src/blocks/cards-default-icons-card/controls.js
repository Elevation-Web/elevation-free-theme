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
import { RemoveImageButton, UploadMedia } from '../components/UploadMedia';
import { getImageAttributes } from '../utils/getImageAttributes';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const {
		link,
		tagName,
		icon,
		hasIconHover,
		iconHover,
		backgroundColorHover,
		headingColor,
		textColorHover,
		hasColorHover,
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

	const changeColor = (key, newValue) => {
		if (!newValue) {
			setAttributes({ [key]: '#000' });
		} else {
			setAttributes({ [key]: newValue });
		}
	};

	return (
		<InspectorControls>
			<PanelBody title={__('Link Settings', 'elevation')}>
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
			<PanelBody title={__('Heading Settings', 'elevation')}>
				<SelectControl
					label="label options"
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
			<PanelBody title={__('Icon Settings', 'elevation')}>
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
				<ToggleControl
					label="Has Icon Hover"
					help={hasIconHover ? 'Icon Hover in enable' : ''}
					checked={hasIconHover}
					onChange={(newValue) =>
						setAttributes({ hasIconHover: newValue })
					}
				/>
				{hasIconHover && (
					<>
						{iconHover.url ? (
							<>
								<div className="cards-long-description-icons-card__control-icon-picker">
									<img src={iconHover.url} />
								</div>
								<RemoveImageButton
									onClick={() => {
										removeImage('iconHover');
									}}
								/>
							</>
						) : (
							<UploadMedia
								value={iconHover.url}
								onSelect={(newValue) => {
									addMedia('iconHover', newValue);
								}}
							/>
						)}
					</>
				)}
			</PanelBody>
			<PanelBody title={__('Hover Settings', 'elevation')}>
				<VStack
					justify="flex-start"
					className={'cards-default__control-icon__colors'}
				>
					<ToggleControl
						label="has Colors Hover"
						help={hasColorHover ? 'has Colors Hover' : ''}
						checked={hasColorHover}
						onChange={(newValue) =>
							setAttributes({ hasColorHover: newValue })
						}
					/>
					{hasColorHover && (
						<>
							<ColorPicker
								color={backgroundColorHover}
								label={'Background Color [Hover]'}
								onChange={(newValue) => {
									changeColor(
										'backgroundColorHover',
										newValue
									);
								}}
							/>
							<ColorPicker
								color={textColorHover}
								label={'Text Color [Hover]'}
								onChange={(newValue) => {
									changeColor('textColorHover', newValue);
								}}
							/>
						</>
					)}
				</VStack>
			</PanelBody>
		</InspectorControls>
	);
};
