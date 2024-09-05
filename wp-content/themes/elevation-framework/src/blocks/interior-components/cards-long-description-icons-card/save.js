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

	const {
		anchor,
		id,
		icon,
		iconBackgroundColor,
		backgroundColorHover,
		hasHover,
		iconHover,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} `,
	});

	const style = {
		'background-color': iconBackgroundColor,
		'--background-color': hasHover
			? backgroundColorHover
			: iconBackgroundColor,
	};

	return (
		<div data-block-id={blockId} id={anchor || id} {...blockProps}>
			<div
				className={`${name}__icon-container ${hasHover ? 'has_icon-hover' : ''}`}
				style={style}
			>
				<ImageWithFocalPoint
					img={icon}
					className={`${name}__img`}
					selectorId={anchor || id}
				/>
				{hasHover && (
					<>
						<ImageWithFocalPoint
							img={iconHover}
							className={`${name}__img hover`}
							selectorId={anchor || id}
						/>
					</>
				)}
			</div>
			<div className={`${name}__container`}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
