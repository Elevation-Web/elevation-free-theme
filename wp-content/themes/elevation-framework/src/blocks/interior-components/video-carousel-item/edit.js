/* External Dependencies */
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import Swal from 'sweetalert2';

/* Internal Dependencies */
import { template, allowedBlocks } from './template';
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
		style,
		id,
		buttonLabel,
		video,
	} = attributes;

	setAttributes({ id: `video-full-screen-pop-up-${clientId}` });

	const blockProps = useBlockProps({
		className: `${name} swiper-slide`,
	});

	const [withContainer, setWithContainer] = useState('');

	useEffect(() => {
		setWithContainer(() => {
			return blockProps.className.includes('alignfull')
				? 'container '
				: '';
		});
	}, [props]);


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
				{...style}
			>
				<BackgroundPicture
					imgMobile={imgMobile.url}
					imgTablet={imgTablet.url}
					imgDesktop={imgDesktop.url}
					imgAlt={imgDesktop.alt}
					className={`${name}__background`}
					width={imgDesktop.width}
					height={imgDesktop.height}
					focalPointDesktop={imgDesktop.focalPoint}
					focalPointTablet={imgTablet.focalPoint}
					focalPointMobile={imgMobile.focalPoint}
					selectorId={anchor || id}
					lazyload={true}
				/>
				<div className={`${withContainer}${name}__container`}>
					<div className={`${name}__wrapper`}>
						<InnerBlocks
							template={template}
							allowedBlocks={allowedBlocks}
						/>
						<button
							onClick={() => {
								Swal.fire({
									showCloseButton: true,
									html: getVideo(video.url, video.videoType),
									showConfirmButton: false,
									closeButtonHtml: closeIcon,
									closeButtonAriaLabel: 'Close video',
									customClass: {
										container:
											'video-full-screen-pop-up__popup',
									},
								});
							}}
							className={`${name}__button`}
						>
							{buttonLabel}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
