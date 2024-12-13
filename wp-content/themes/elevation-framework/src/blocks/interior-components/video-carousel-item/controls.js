import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/* Internal Dependencies */
import { VideoControl } from '../../components/VideoControl';
import { PictureControl } from '../../components/PictureControl';

export default function Controls(props) {
	const { attributes, setAttributes } = props;

	const { imgDesktop, imgTablet, imgMobile, video, buttonLabel } = attributes;

	const styleImgDesktop = {
		backgroundImage: `url(${imgDesktop.url})`,
		backgroundSize: 'cover',
		backgroundPosition: `${imgDesktop.focalPoint.x * 100}% ${imgDesktop.focalPoint.y * 100}%`,
	};

	const styleImgTablet = {
		backgroundImage: `url(${imgTablet.url})`,
		backgroundSize: 'cover',
		backgroundPosition: `${imgTablet.focalPoint.x * 100}% ${imgTablet.focalPoint.y * 100}%`,
	};

	const styleImgMobile = {
		backgroundImage: `url(${imgMobile.url})`,
		backgroundSize: 'cover',
		backgroundPosition: `${imgMobile.focalPoint.x * 100}% ${imgMobile.focalPoint.y * 100}%`,
	};

	const setNewFocalPointDesktop = (value) => {
		setAttributes({
			imgDesktop: {
				...imgDesktop,
				focalPoint: value,
			},
		});
	};

	const setNewFocalPointTablet = (value) => {
		setAttributes({
			imgTablet: {
				...imgTablet,
				focalPoint: value,
			},
		});
	};

	const setNewFocalPointMobile = (value) => {
		setAttributes({
			imgMobile: {
				...imgMobile,
				focalPoint: value,
			},
		});
	};

	return (
		<InspectorControls>
			<PictureControl
				label={'Background Image Desktop'}
				img={imgDesktop}
				setNewFocalPoint={setNewFocalPointDesktop}
				styleImg={styleImgDesktop}
				onSelect={(media) => {
					const { url, alt, height, width } = media;
					setAttributes({
						imgDesktop: {
							focalPoint: { ...imgDesktop.focalPoint },
							url,
							alt,
							height,
							width,
						},
					});
				}}
				onRemove={() => {
					setAttributes({
						imgDesktop: {
							url: '',
							alt: '',
							height: '',
							width: '',
							focalPoint: {
								x: 0.5,
								y: 0.5,
							},
						},
					});
				}}
			/>
			<PictureControl
				label={'Background Image Tablet'}
				img={imgTablet}
				setNewFocalPoint={setNewFocalPointTablet}
				styleImg={styleImgTablet}
				onSelect={(media) => {
					const { url, alt, height, width } = media;
					setAttributes({
						imgTablet: {
							focalPoint: { ...imgTablet.focalPoint },
							url,
							alt,
							height,
							width,
						},
					});
				}}
				onRemove={() => {
					setAttributes({
						imgTablet: {
							url: '',
							alt: '',
							height: '',
							width: '',
							focalPoint: {
								x: 0.5,
								y: 0.5,
							},
						},
					});
				}}
			/>
			<PictureControl
				label={'Background Image Mobile'}
				img={imgMobile}
				setNewFocalPoint={setNewFocalPointMobile}
				styleImg={styleImgMobile}
				onSelect={(media) => {
					const { url, alt, height, width } = media;
					setAttributes({
						imgMobile: {
							focalPoint: { ...imgMobile.focalPoint },
							url,
							alt,
							height,
							width,
						},
					});
				}}
				onRemove={() => {
					setAttributes({
						imgMobile: {
							url: '',
							alt: '',
							height: '',
							width: '',
							focalPoint: {
								x: 0.5,
								y: 0.5,
							},
						},
					});
				}}
			/>
			<VideoControl
				video={video}
				onSelectType={(type) => {
					setAttributes({
						video: {
							url: '',
							videoType: type,
						},
					});
				}}
				onChangeVideo={(media) => {
					const { url } = media;
					setAttributes({
						video: {
							...video,
							url: url,
						},
					});
				}}
				onChangeVideoURL={(url) => {
					setAttributes({
						video: {
							...video,
							url: url,
						},
					});
				}}
				onRemoveVideo={() => {
					setAttributes({
						video: {
							...video,
							url: '',
						},
					});
				}}
			/>
			<PanelBody title={__('Button Label')}>
				<TextControl
					value={buttonLabel}
					onChange={(buttonLabel) => setAttributes({ buttonLabel })}
				/>
			</PanelBody>
		</InspectorControls>
	);
}
