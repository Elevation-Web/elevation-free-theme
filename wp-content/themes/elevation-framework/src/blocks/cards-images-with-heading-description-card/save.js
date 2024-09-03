import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import json from './block.json';
import { ImageWithFocalPoint } from '../components/ImageWithFocalPoint';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const { attributes } = props;

	const { anchor, id, img } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} swiper-slide`,
	});

	return (
		<div data-block-id={name} id={anchor || id} {...blockProps}>
			<ImageWithFocalPoint
				img={img}
				className={`${name}__img`}
				selectorId={anchor || id}
			/>
			<div className={`${name}__container`}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
