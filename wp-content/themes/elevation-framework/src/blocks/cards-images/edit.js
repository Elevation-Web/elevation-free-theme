import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalInputControl,
	FocalPointPicker,
} from '@wordpress/components';
import json from './block.json';
import './editor.scss';
import previewImage from './preview.webp';
import { ImageWithFocalPoint } from '../components/ImageWithFocalPoint';
import { RemoveImageButton, UploadMedia } from '../components/UploadMedia';
import { getImageAttributes } from '../utils/getImageAttributes';
import { useEffect } from '@wordpress/element';

const Edit = (props) => {
	const CARDS_ALLOWED_BLOCKS = [
		'elevation/image-with-srcset',
		'core/heading',
		'core/paragraph',
		'elevation/buttons',
	];
	const CARDS_TEMPLATE = [
		[
			'elevation/image-with-srcset',
			{
				img: {
					url: `/wp-content/themes/elevation-framework/src/blocks/cards-images/images/icon-1.webp`,
				},
			},
		],
		[
			'core/heading',
			{
				level: 6,
				content:
					'H6. Heading lorem ipsum maecenas sed enim ut sem viverra aliquet eget',
			},
		],
		[
			'core/paragraph',
			{
				content:
					'Maximum 10 words. Tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur.',
			},
		],
		[
			'elevation/buttons',
			{},
			[
				[
					'elevation/button',
					{
						btnStyle: 'primary-inverse',
					},
				],
			],
		],
	];

	const { name: blockName } = json;
	const name = blockName.split('/')[1];
	const { clientId, attributes, setAttributes } = props;

	const { id, anchor, preview, img } = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name} swiper-slide`,
	});

	const styleImg = {
		backgroundImage: `url(${img.url})`,
		backgroundSize: 'cover',
		backgroundPosition: `${img.focalPoint.x * 100}% ${img.focalPoint.y * 100}%`,
	};

	const setNewFocalPoint = (value) => {
		setAttributes({
			img: {
				...img,
				focalPoint: value,
			},
		});
	};

	const removeImage = () => {
		setAttributes({
			img: {
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

	const addMedia = (media) => {
		const { fullSize, srcset, sizes, alt, id } = getImageAttributes(media);

		setAttributes({
			img: {
				...img,
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
			<PanelBody title={__('Background Image')}>
				{img.url ? (
					<>
						<FocalPointPicker
							url={img.url}
							value={img.focalPoint}
							onDragStart={setNewFocalPoint}
							onDrag={setNewFocalPoint}
							onChange={setNewFocalPoint}
						/>
						<div style={styleImg} />
						<RemoveImageButton onClick={removeImage} />
					</>
				) : (
					<UploadMedia value={img.url} onSelect={addMedia} />
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
			<div data-block-id={name} id={anchor || id} {...blockProps}>
				<ImageWithFocalPoint
					img={img}
					className={`${name}__img`}
					selectorId={anchor || id}
				/>

				<div className={`${name}__container`}>
					<InnerBlocks
						template={CARDS_TEMPLATE}
						allowedBlocks={CARDS_ALLOWED_BLOCKS}
						templateLock={'all'}
					/>
				</div>
			</div>
		</>
	);
};

export default Edit;
