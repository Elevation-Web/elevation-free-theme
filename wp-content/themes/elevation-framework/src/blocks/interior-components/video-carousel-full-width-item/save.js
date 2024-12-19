import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BackgroundPicture from '../../components/BackgroundPicture';
import json from './block.json';
import { getBlockName } from '../../utils/helpers';

const save = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { attributes } = props;

	const { anchor, imgMobile, imgTablet, imgDesktop, id, buttonLabel, video } =
		attributes;

	const { url, videoType } = video;

	const blockProps = useBlockProps.save({
		className: `${name} swiper-slide no-animate`,
	});

	return (
		<div
			id={anchor || id}
			data-block-id={name}
			data-block-js="true"
			data-video-url={url}
			data-video-type={videoType}
			{...blockProps}
		>
			<BackgroundPicture
				imgMobile={imgMobile ? imgMobile.url : null}
				imgTablet={imgTablet ? imgTablet.url : null}
				imgDesktop={imgDesktop}
				imgAlt={imgDesktop.alt}
				className={`${name}__background`}
				width={imgDesktop.width}
				height={imgDesktop.height}
				selectorId={anchor || id}
				lazyload={true}
			/>
			<div className={`${name}__container`}>
				<InnerBlocks.Content />
				<button className={`${name}__button`}>{buttonLabel}</button>
				<span className={`${name}__button-label`}>{buttonLabel}</span>
			</div>
		</div>
	);
};

export default save;
