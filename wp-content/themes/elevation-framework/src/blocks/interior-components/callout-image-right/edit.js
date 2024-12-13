/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	FocalPointPicker,
	ToggleControl,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

/* Internal Dependencies */
import BackgroundPicture from '../../components/BackgroundPicture';
import { RemoveImageButton, UploadMedia } from '../../components/UploadMedia';
import { getBlockName } from '../../utils/helpers';
import { getImageAttributes } from '../../utils/getImageAttributes';
import { template, allowedBlocks } from './template';

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
		isRowReverse,
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
			<PanelBody title={__('Row Reverse')}>
				<ToggleControl
					label={__('Enable Row Reverse')}
					checked={isRowReverse}
					onChange={(value) => setAttributes({ isRowReverse: value })}
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

	const wrapperClass = isRowReverse ? 'row-reverse' : 'row';

	return (
		<>
			{controls}
			<div data-block-id={blockId} {...blockProps} {...style}>
				<div className={`${withContainer}${name}__container`}>
					<div className={`${name}__wrapper ${wrapperClass}`}>
						<InnerBlocks
							template={template}
							allowedBlocks={allowedBlocks}
						/>
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
