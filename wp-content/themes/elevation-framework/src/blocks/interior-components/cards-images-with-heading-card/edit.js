import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	URLInputButton,
	RichText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalInputControl,
	FocalPointPicker,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { getImageAttributes } from '../../utils/getImageAttributes';
import { RemoveImageButton, UploadMedia } from '../../components/UploadMedia';
import { ImageWithFocalPoint } from '../../components/ImageWithFocalPoint';
import './editor.scss';
import json from './block.json';
import { getBlockName } from '../../utils/helpers';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);
	/*  */
	const { clientId, attributes, setAttributes } = props;
	const { id, anchor, preview, img, link, tagName } = attributes;
	const { url, text, target, ariaLabel } = link;

	// Set Block name
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
			<PanelBody title={__('Heading Options', 'elevation')}>
				<SelectControl
					label="Heading Size"
					value={tagName}
					options={headingOptions}
					onChange={(newValue) => {
						setAttributes({
							tagName: newValue,
						});
					}}
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
			<div id={anchor || id} {...blockProps}>
				<ImageWithFocalPoint
					img={img}
					className={`${name}__img`}
					selectorId={anchor || id}
				/>
				<div className={`${name}__container`}>
					<RichText
						style={{
							maxWidth: '100%',
							textWrap: 'wrap',
							marginBottom: '0px',
						}}
						tagName={'h' + tagName}
						value={text}
						allowedFormats={[]}
						onChange={(newValue) => {
							setAttributes({
								link: {
									...link,
									text: newValue,
								},
							});
						}}
						placeholder={__('Heading...')}
					/>
				</div>
			</div>
		</>
	);
};

export default Edit;
