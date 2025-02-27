/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, FocalPointPicker } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

/* Internal Dependencies */
import BackgroundPicture from '../../components/BackgroundPicture';
import { RemoveImageButton, UploadMedia } from '../../components/UploadMedia';
import { getBlockName } from '../../utils/helpers';
import { getImageAttributes } from '../../utils/getImageAttributes';
import { template, allowedBlocks } from './template';
import { ColorPicker } from '../../components/ColorPicker';

/* Blocks */
import json from './block.json';
import './editor.scss';
import previewImage from './preview.webp';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes, setAttributes } = props;

	const {
		preview,
		imgMobile,
		imgTablet,
		imgDesktop,
		imgAlt,
		style,
		focalPointDesktop,
		boxBgColor,
	} = attributes;

	const blockProps = useBlockProps({
		className: name,
	});

	const [withContainer, setWithContainer] = useState('');

	useEffect(() => {
		setWithContainer(() => {
			return blockProps.className.includes('alignfull') ? '' : 'contain ';
		});
	}, [blockProps.className]);

	const styleImgDesktop = {
		backgroundImage: `url(${imgDesktop.url})`,
		backgroundSize: 'cover',
		backgroundPosition: `${imgDesktop.focalPoint?.x * 100}% ${imgDesktop.focalPoint?.y * 100}%`,
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
			<PanelBody title={__('Background Image Desktop')}>
				{imgDesktop.url ? (
					<>
						<FocalPointPicker
							url={imgDesktop.url}
							value={imgDesktop.focalPoint}
							onDragStart={(newValue) => {
								setNewFocalPoint('imgDesktop', newValue);
							}}
							onDrag={(newValue) => {
								setNewFocalPoint('imgDesktop', newValue);
							}}
							onChange={(newValue) => {
								setNewFocalPoint('imgDesktop', newValue);
							}}
						/>
						<div style={styleImgDesktop} />
						<RemoveImageButton
							onClick={(newValue) => {
								removeImage('imgDesktop', newValue);
							}}
						/>
					</>
				) : (
					<UploadMedia
						value={imgDesktop.url}
						onSelect={(newValue) => {
							addMedia('imgDesktop', newValue);
						}}
					/>
				)}
			</PanelBody>
			<PanelBody title={__('Background Image Tablet')}>
				{imgTablet ? (
					<>
						<img src={imgTablet} />
						<RemoveImageButton
							onClick={() => {
								setAttributes({ imgTablet: '' });
							}}
							attrId={'imgTablet'}
						/>
					</>
				) : (
					<UploadMedia
						value={imgTablet}
						onSelect={({ url }) => {
							setAttributes({ imgTablet: url });
						}}
						attrId={'imgTablet'}
					/>
				)}
			</PanelBody>
			<PanelBody title={__('Background Image Mobile')}>
				{imgMobile ? (
					<>
						<img src={imgMobile} />
						<RemoveImageButton
							onClick={() => {
								setAttributes({ imgMobile: '' });
							}}
							attrId={'imgMobile'}
						/>
					</>
				) : (
					<UploadMedia
						value={imgMobile}
						onSelect={({ url }) => {
							setAttributes({ imgMobile: url });
						}}
						attrId={'imgMobile'}
					/>
				)}
			</PanelBody>
			<PanelBody title={__('Box Background Color')}>
				<ColorPicker
					onChange={(color) => setAttributes({ boxBgColor: color })}
					color={boxBgColor}
					label="Box Background Color"
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

	const boxStyle = boxBgColor ? { backgroundColor: boxBgColor } : {};

	return (
		<>
			{controls}
			<div data-block-id={blockId} {...blockProps} {...style}>
				<BackgroundPicture
					imgMobile={imgMobile}
					imgTablet={imgTablet}
					imgDesktop={imgDesktop}
					imgAlt={imgAlt}
					className={`${name}__background`}
					width="1920"
					height="1080"
					focalPointDesktop={focalPointDesktop}
				/>
				<div className={`${withContainer}${name}__container`}>
					<div className={`${name}__wrapper`} style={boxStyle}>
						<InnerBlocks
							template={template}
							allowedBlocks={allowedBlocks}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
