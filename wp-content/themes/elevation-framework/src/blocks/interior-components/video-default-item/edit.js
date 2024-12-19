/* External Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import Swal from 'sweetalert2';

/* Internal Dependencies */
import { closeIcon } from '../../components/images/icons';
import { getVideo } from '../../utils/video';
import Controls from './controls';
import json from './block.json';
import BackgroundPicture from '../../components/BackgroundPicture';
import previewImage from './preview.webp';
import './editor.scss';
import { getBlockName } from '../../utils/helpers';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const {
		anchor,
		preview,
		imgMobile,
		imgTablet,
		imgDesktop,
		id,
		buttonLabel,
		video,
	} = attributes;

	setAttributes({ id: `${name}-${clientId}` });

	const blockProps = useBlockProps({
		className: `${name} swiper-slide`,
	});

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
			<Controls {...props} />
			<div
				id={anchor || id}
				data-block-id={name}
				data-block-js="true"
				data-video-url={video.url}
				data-video-type={video.videoType}
				{...blockProps}
			>
				{imgDesktop.url ? (
					<BackgroundPicture
						imgMobile={imgMobile}
						imgTablet={imgTablet}
						imgDesktop={imgDesktop}
						imgAlt={imgDesktop.alt}
						className={`${name}__background`}
						width={imgDesktop.width}
						height={imgDesktop.height}
						selectorId={anchor || id}
						lazyload={true}
					/>
				) : (
					<MediaPlaceholder
						onSelect={(media) => {
							setAttributes({
								imgDesktop: {
									focalPoint: { x: 0.5, y: 0.5 },
									url: media.url,
									alt: media.alt,
									height: media.height,
									width: media.width,
								},
							});
						}}
						allowedTypes={['image']}
						multiple={false}
						labels={{ title: 'Image' }}
					/>
				)}
				<div className={`${name}__container`}>
					{imgDesktop.url && (
						<button
							onClick={() => {
								Swal.fire({
									showCloseButton: true,
									html: getVideo(video.url, video.videoType),
									showConfirmButton: false,
									closeButtonHtml: closeIcon,
									closeButtonAriaLabel: 'Close video',
									customClass: {
										container: 'video-default-item__popup',
									},
								});
							}}
							className={`${name}__button`}
						>
							{buttonLabel}
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default Edit;
