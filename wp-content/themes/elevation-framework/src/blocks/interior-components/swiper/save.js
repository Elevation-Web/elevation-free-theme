import clsx from 'clsx';
/* Gutenberg Dependencies */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
/* Block */
import swiperOptions from './swiper-options.json';
import json from './block.json';

const save = (props) => {
	const { attributes } = props;
	const { anchor, id, is_slider } = attributes;
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const blockProps = useBlockProps.save({
		className: clsx(name, [is_slider ? `${name}__swiper` : '']),
	});

	return (
		<div
			data-block-id={name}
			data-block-js="true"
			id={anchor || id}
			{...blockProps}
		>
			<div
				id={'cotainer_' + id}
				className="testimonials__swipper"
				data-swiper-options={JSON.stringify(swiperOptions)}
			>
				<div className="swiper-wrapper">
					<InnerBlocks.Content />
				</div>
				<div className="swiper__container-controls center swiper-bottom">
					<div className="swiper-button-prev"></div>
					<div className="swiper-pagination"></div>
					<div className="swiper-button-next"></div>
				</div>
			</div>
		</div>
	);
};

export default save;
