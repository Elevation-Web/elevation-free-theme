import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import json from './block.json';
import { ImageWithFocalPoint } from '../components/ImageWithFocalPoint';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const { attributes } = props;

	const { anchor, id, img, url, ariaLabel, target } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} `,
	});
	const ariaLabelText = !!ariaLabel ? ariaLabel : '';
	const actualTarget = target ? { target: '_blank' } : {};
	const rel = target ? { rel: 'noopener noreferrer' } : {};

	return (
		<div data-block-id={name} id={anchor || id} {...blockProps}>
			<div className={`${name}__figure`}>
				<ImageWithFocalPoint
					img={img}
					className={`${name}__img`}
					selectorId={anchor || id}
				/>
			</div>
			<div className={`${name}__container`}>
				<InnerBlocks.Content />
			</div>
			<a
				className="stretched-link"
				href={url}
				aria-label={ariaLabelText}
				{...actualTarget}
				{...rel}
			></a>
		</div>
	);
};

export default save;
