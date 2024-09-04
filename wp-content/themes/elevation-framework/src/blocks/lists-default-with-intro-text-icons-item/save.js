import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import json from './block.json';
import { ImageWithFocalPoint } from '../components/ImageWithFocalPoint';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const { attributes } = props;
	const { anchor, id, icon } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name}`,
	});

	return (
		<div data-block-id={name} id={anchor || id} {...blockProps}>
			<div className={`${name}__container`}>
				<div className={`${name}__figure`}>
					<ImageWithFocalPoint
						img={icon}
						className={`${name}__icon `}
						selectorId={anchor || id}
					/>
				</div>
				<div className={`${name}__content`}>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
