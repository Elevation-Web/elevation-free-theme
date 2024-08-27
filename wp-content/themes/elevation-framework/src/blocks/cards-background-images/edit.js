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
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { getImageAttributes } from '../utils/getImageAttributes';
import { RemoveImageButton, UploadMedia } from '../components/UploadMedia';
import { ImageWithFocalPoint } from '../components/ImageWithFocalPoint';
import './editor.scss';
import json from './block.json';
import { allowedBlocks, template } from './template';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];
	const { clientId, attributes, setAttributes } = props;

	const { id, anchor, preview, img, url, target, ariaLabel } = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name}`,
	});

	const styleImg = {
		backgroundImage: `url(${img.url})`,
		backgroundSize: 'cover',
		backgroundPosition: `${img.focalPoint?.x * 100}% ${img.focalPoint?.y * 100}%`,
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
							onChange={(value) => setAttributes({ url: value })}
						/>
					</div>
					<ToggleControl
						label="Open in new tab"
						checked={target}
						onChange={(newValue) => {
							setAttributes({ target: newValue });
						}}
					/>
				</>
			</PanelBody>
			<PanelBody title={__('Card Link Aria Label', 'elevation')}>
				<__experimentalInputControl
					value={ariaLabel}
					placeholder="Button Aria Label..."
					onChange={(value) => setAttributes({ ariaLabel: value })}
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
				<div className={`${name}__figure`}>
					<ImageWithFocalPoint
						img={img}
						className={`${name}__img`}
						selectorId={anchor || id}
					/>
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
