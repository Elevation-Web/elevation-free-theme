import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BackgroundPicture from '../../components/BackgroundPicture';
import json from './block.json';
import { getBlockName } from '../../utils/helpers';

const save = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { attributes } = props;

	const {
		anchor,
		imgMobile,
		imgTablet,
		imgDesktop,
		style,
		id,
		buttonLabel,
		video,
	} = attributes;

	const { url, videoType } = video;

	const blockProps = useBlockProps.save({
		className: `${name} swiper-slide no-animate`,
	});

	const withContainer = blockProps.className.includes('alignfull')
		? 'container '
		: '';

	return (
		<div
			id={anchor || id}
			data-block-id={name}
			data-block-js="true"
			data-video-url={url}
			data-video-type={videoType}
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
					<InnerBlocks.Content />
					<button className={`${name}__button`}>{buttonLabel}</button>
				</div>
			</div>
		</div>
	);
};

export default save;
