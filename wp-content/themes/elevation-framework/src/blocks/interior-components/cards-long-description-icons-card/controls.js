/* External Dependencies */
/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	__experimentalInputControl,
	ToggleControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { useSetting, InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import { getImageAttributes } from '../../utils/getImageAttributes';
import { RemoveImageButton, UploadMedia } from '../../components/UploadMedia';
import { ColorPicker } from '../../components/ColorPicker';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const colorPalette = useSetting('color.palette');

	const {
		icon,
		hasIconHover,
		iconHover,
		iconBackgroundColor,
		backgroundColorHover,
	} = attributes;

	useEffect(() => {
		getDefaultColor('iconBackgroundColor');
		getDefaultColor('backgroundColorHover');
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
			<PanelBody title={__('Icon')}>
				<div className="cards-long-description-icons-card__control-icon">
					{icon.url ? (
						<>
							<div
								className="cards-long-description-icons-card__control-icon-picker"
								style={{
									backgroundColor: iconBackgroundColor,
								}}
							>
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
								<div
									className="cards-long-description-icons-card__control-icon-picker"
									style={{
										backgroundColor: backgroundColorHover,
									}}
								>
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
				<VStack
					justify="flex-start"
					className={'cards-icons__control-icon__colors'}
				>
					<ColorPicker
						color={iconBackgroundColor}
						label={'Background Color'}
						onChange={(newValue) =>
							changeColor('iconBackgroundColor', newValue)
						}
					/>
					<ColorPicker
						color={backgroundColorHover}
						label={'Background Color [Hover]'}
						onChange={(newValue) =>
							changeColor('backgroundColorHover', newValue)
						}
					/>
				</VStack>
			</PanelBody>
		</InspectorControls>
	);
};
