import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, FocalPointPicker } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import json from './block.json';
import './editor.scss';
import BackgroundPicture from '../components/BackgroundPicture';
import { RemoveImageButton, UploadMedia } from '../components/UploadMedia';

import previewImage from './preview.webp';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const BANNER_FULL_IMAGE_TEMPLATE = [
		['core/heading', { level: 1 }],
		['core/paragraph', { placeholder: 'Type description here' }],
	];

	const { attributes, setAttributes } = props;

	const {
		preview,
		imgMobile,
		imgTablet,
		imgDesktop,
		imgAlt,
		style,
		focalPointDesktop,
	} = attributes;

	const blockProps = useBlockProps({
		className: name,
	});

	const [withContainer, setWithContainer] = useState('');

	useEffect(() => {
		setWithContainer(() => {
			return blockProps.className.includes('alignfull')
				? 'container '
				: '';
		});
	}, [props]);

	const [newFocalPointDesktop, setNewFocalPointDesktop] = useState({
		x: focalPointDesktop.x,
		y: focalPointDesktop.y,
	});

	const styleImgDesktop = {
		backgroundImage: `url(${attributes.imgDesktop})`,
		backgroundSize: 'cover',
		backgroundPosition: `${newFocalPointDesktop.x * 100}% ${newFocalPointDesktop.y * 100}%`,
	};

	useEffect(() => {
		setAttributes({
			focalPointDesktop: newFocalPointDesktop,
		});
	}, [newFocalPointDesktop]);

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Background Image Desktop')}>
				{attributes?.imgDesktop ? (
					<>
						<FocalPointPicker
							url={attributes.imgDesktop}
							value={focalPointDesktop}
							onDragStart={setNewFocalPointDesktop}
							onDrag={setNewFocalPointDesktop}
							onChange={setNewFocalPointDesktop}
						/>
						<div style={styleImgDesktop} />
						<RemoveImageButton
							attributes={attributes}
							setAttributes={setAttributes}
							attrId={'imgDesktop'}
						/>
					</>
				) : (
					<UploadMedia
						attributes={attributes}
						setAttributes={setAttributes}
						attrId={'imgDesktop'}
					/>
				)}
			</PanelBody>
			<PanelBody title={__('Background Image Tablet')}>
				{attributes?.imgTablet ? (
					<>
						<img src={attributes.imgTablet} />
						<RemoveImageButton
							attributes={attributes}
							setAttributes={setAttributes}
							attrId={'imgTablet'}
						/>
					</>
				) : (
					<UploadMedia
						attributes={attributes}
						setAttributes={setAttributes}
						attrId={'imgTablet'}
					/>
				)}
			</PanelBody>
			<PanelBody title={__('Background Image Mobile')}>
				{attributes?.imgMobile ? (
					<>
						<img src={attributes.imgMobile} />
						<RemoveImageButton
							attributes={attributes}
							setAttributes={setAttributes}
							attrId={'imgMobile'}
						/>
					</>
				) : (
					<UploadMedia
						attributes={attributes}
						setAttributes={setAttributes}
						attrId={'imgMobile'}
					/>
				)}
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
			<div data-block-id={name} {...blockProps} {...style}>
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
					<div className={`${name}__wrapper`}>
						<InnerBlocks
							template={BANNER_FULL_IMAGE_TEMPLATE}
							allowedBlocks={[
								'core/heading',
								'core/paragraph',
								'elevation/buttons',
							]}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
