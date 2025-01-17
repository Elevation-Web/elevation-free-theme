/* Gutenberg Dependencies */
import { useBlockProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import json from './block.json';
import { ImageWithFocalPoint } from '../../components/ImageWithFocalPoint';
import { getBlockName } from '../../utils/helpers';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;
	const { anchor, id, img, link, tagName } = attributes;
	const { url, text, target, ariaLabel } = link;

	const blockProps = useBlockProps.save({
		className: `${name} `,
	});

	const ariaLabelText = !!ariaLabel ? ariaLabel : text;
	const actualTarget = target ? { target: '_blank' } : {};
	const rel = target ? { rel: 'noopener noreferrer' } : {};

	return (
		<div id={anchor || id} {...blockProps}>
			<ImageWithFocalPoint
				img={img}
				className={`${name}__img no-animate`}
				selectorId={anchor || id}
			/>
			<div className={`${name}__container`}>
				<a
					className={`stretched-link wp-block-heading has-h-${tagName}-font-size`}
					href={url}
					aria-label={ariaLabelText}
					{...actualTarget}
					{...rel}
				>
					{text}
				</a>
			</div>
		</div>
	);
};

export default save;
