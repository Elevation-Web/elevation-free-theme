/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import json from './block.json';
import { ImageWithFocalPoint } from '../../components/ImageWithFocalPoint';
import { getBlockName } from '../../utils/helpers';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;

	const { anchor, id, img } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} swiper-slide`,
	});

	return (
		<div data-block-id={blockId} id={anchor || id} {...blockProps}>
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
