import clsx from 'clsx';
/* Gutenberg Dependencies */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import options from './swiper-options.json';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;
	const {
		anchor,
		id,
		loop,
		spaceBetween,
		slidesPerView,
		centeredSlides,
		grabCursor,
		slideToClickSlide,
		disableOnInteraction,
		dynamicBullets,
		slidesPerViewSm,
		slidesPerViewMd,
		slidesPerViewLg,
		slidesPerViewXl,
		slidesPerViewXxl,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: clsx(name),
	});

	const swiperOptions = {
		...options,
		spaceBetween,
		slidesPerView,
		centeredSlides,
		grabCursor,
		slideToClickSlide,
		disableOnInteraction,
		dynamicBullets,
		slidesPerViewSm,
		slidesPerViewMd,
		slidesPerViewLg,
		slidesPerViewXl,
		slidesPerViewXxl,
	};

	return (
		<div
			id={anchor || id}
			data-block-id={blockId}
			data-block-js="true"
			{...blockProps}
		>
			<div
				id={'cotainer_' + id}
				className={`${name}__container testimonials__swipper container`}
				data-swiper-options={JSON.stringify(swiperOptions)}
			>
				<div className="swiper-wrapper">
					<InnerBlocks.Content />
				</div>
				<div className="swiper__container-actions">
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div>
				<div className="swiper__container-controls">
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</div>
	);
};

export default save;
