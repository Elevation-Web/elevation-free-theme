/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { ImageWithFocalPoint } from '../../components/ImageWithFocalPoint';
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;
	const { anchor, id, icon } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name}`,
	});

	return (
		<li data-block-id={blockId} id={anchor || id} {...blockProps}>
			<div className={`${name}__container`}>
				<ImageWithFocalPoint
					img={icon}
					className={`${name}__icon `}
					selectorId={anchor || id}
				/>
				<InnerBlocks.Content />
			</div>
		</li>
	);
};

export default save;
