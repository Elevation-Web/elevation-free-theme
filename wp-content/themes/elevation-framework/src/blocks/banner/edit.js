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

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const BANNER_TEMPLATE = [
		['core/heading', { placeholder: 'Banner Title' }],
		['core/paragraph', { placeholder: 'Banner Description' }],
		['elevation/buttons'],
	];

	const { attributes, setAttributes } = props;

	const { imgMobile, imgTablet, imgDesktop, imgAlt, style } = attributes;

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

	const [focalPointDesktop, setFocalPointDesktop] = useState({
		x: 0.5,
		y: 0.5,
	});

	const styleImgDesktop = {
		backgroundImage: `url(${attributes.imgDesktop})`,
		backgroundSize: 'cover',
		backgroundPosition: `${focalPointDesktop.x * 100}% ${focalPointDesktop.y * 100}%`,
	};

	useEffect(() => {
		setAttributes({
			focalPointDesktop,
		});
	}, [focalPointDesktop]);

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Background Image Desktop')}>
				{attributes?.imgDesktop ? (
					<>
						<FocalPointPicker
							url={attributes.imgDesktop}
							value={focalPointDesktop}
							onDragStart={setFocalPointDesktop}
							onDrag={setFocalPointDesktop}
							onChange={setFocalPointDesktop}
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
							allowedBlocks={BANNER_TEMPLATE}
							template={BANNER_TEMPLATE}
							prioritizedInserterBlocks={BANNER_TEMPLATE}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
