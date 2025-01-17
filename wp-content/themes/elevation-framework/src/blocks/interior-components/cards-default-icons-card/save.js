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
		backgroundColorHover,
		tagName,
		link,
		textColorHover,
		icon,
		hasIconHover,
		iconHover,
		headingColor,
		hasColorHover,
	} = attributes;

	const { url, text, target, ariaLabel } = link;

	const style = {
		'--card-default-background-hover': backgroundColorHover,
		'--card-default-color-hover': textColorHover,
		'--card-default-color-heading': headingColor,
	};
	const blockProps = useBlockProps.save({
		className: `${name} ${hasColorHover ? 'has-hover' : ''} `,
	});

	const ariaLabelText = !!ariaLabel ? ariaLabel : text;
	const actualTarget = target ? { target: '_blank' } : {};
	const rel = target ? { rel: 'noopener noreferrer' } : {};

	return (
		<div id={anchor || id} {...blockProps} style={style}>
			<div
				className={`${name}__container ${hasIconHover ? 'has-icon-hover' : ''}`}
			>
				<ImageWithFocalPoint
					img={icon}
					className={`${name}__icon `}
					selectorId={anchor || id}
				/>
				{hasIconHover && (
					<>
						<ImageWithFocalPoint
							img={iconHover}
							className={`${name}__icon hover`}
							selectorId={anchor || id}
						/>
					</>
				)}
				<a
					className={`stretched-link wp-block-heading has-h-${tagName}-font-size`}
					href={url}
					aria-label={ariaLabelText}
					{...actualTarget}
					{...rel}
				>
					{text}
				</a>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
