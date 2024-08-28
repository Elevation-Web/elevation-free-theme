import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	URLInputButton,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalInputControl,
	FocalPointPicker,
	ToggleControl,
	ColorPalette,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSetting } from '@wordpress/block-editor';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { getImageAttributes } from '../utils/getImageAttributes';
import { RemoveImageButton, UploadMedia } from '../components/UploadMedia';
import { ImageWithFocalPoint } from '../components/ImageWithFocalPoint';
import json from './block.json';
import { allowedBlocks, template } from './template';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];
	const { clientId, attributes, setAttributes } = props;
	const colorPalette = useSetting('color.palette');

	const {
		id,
		anchor,
		preview,
		icon,
		hasIconHover,
		iconHover,
		backgroundColorHover,
		backgroundColor,
	} = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name}`,
	});

	const styleImg = {
		backgroundImage: `url(${icon.url})`,
		backgroundSize: 'cover',
		backgroundPosition: `${icon.focalPoint?.x * 100}% ${icon.focalPoint?.y * 100}%`,
	};

	const setNewFocalPoint = (key, value) => {
		setAttributes({
			[key]: {
				...attributes[key],
				focalPoint: value,
			},
		});
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
				sizes: '',
				focalPoint: {
					x: 0.5,
					y: 0.5,
				},
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

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Icon')}>
				<VStack>
					<div>
						{icon.url ? (
							<>
								<FocalPointPicker
									url={icon.url}
									value={icon.focalPoint}
									onDragStart={(newValue) => {
										setNewFocalPoint('icon', newValue);
									}}
									onDrag={(newValue) => {
										setNewFocalPoint('icon', newValue);
									}}
									onChange={(newValue) => {
										setNewFocalPoint('icon', newValue);
									}}
								/>
								<div style={styleImg} />
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
						checked={hasIconHover}
						onChange={(newValue) =>
							setAttributes({ hasIconHover: newValue })
						}
					/>
					{hasIconHover && (
						<>
							{iconHover.url ? (
								<>
									<label>Icon Hover</label>
									<FocalPointPicker
										url={iconHover.url}
										value={iconHover.focalPoint}
										onDragStart={(newValue) => {
											setNewFocalPoint(
												'iconHover',
												newValue
											);
										}}
										onDrag={(newValue) => {
											setNewFocalPoint(
												'iconHover',
												newValue
											);
										}}
										onChange={(newValue) => {
											setNewFocalPoint(
												'iconHover',
												newValue
											);
										}}
									/>
									<div style={styleImg} />
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
				</VStack>
			</PanelBody>
			<PanelBody title={__('Background Color')}>
				<ColorPalette
					value={backgroundColor}
					colors={colorPalette}
					onChange={(newColor) =>
						setAttributes({
							backgroundColor: newColor,
						})
					}
				/>
				<ColorPalette
					value={backgroundColorHover}
					colors={colorPalette}
					onChange={(color) =>
						setAttributes({
							backgroundColorHover: color,
						})
					}
				/>
			</PanelBody>
		</InspectorControls>
	);

	if (preview) {
		return (
			<div className={`${name}-preview`}>
				<img
					src={previewImage}
					alt="Preview"
					style={{
						objectFit: 'contain',
						maxHeight: '100%',
						maxWidth: '100%',
					}}
				/>
			</div>
		);
	}

	return (
		<>
			{controls}
			<div data-block-id={name} id={anchor || id} {...blockProps}>
				<div
					className={`${name}__icon-container`}
					style={{ backgroundColor: backgroundColor }}
				>
					<ImageWithFocalPoint
						img={icon}
						className={`${name}__img`}
						selectorId={anchor || id}
					/>
					{}
				</div>
				<div className={`${name}__container`}>
					<InnerBlocks
						template={template}
						allowedBlocks={allowedBlocks}
						templateLock={'all'}
					/>
				</div>
			</div>
		</>
	);
};

export default Edit;
