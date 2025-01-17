/* Gutenberg Dependencies */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';
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
		headingColor,
	} = attributes;

	const { url, text, target, ariaLabel } = link;

	const style = {
		'--card-default-background-color': backgroundColorHover,
		'--card-default-color-hover': textColorHover,
		'--card-heading-default-color': headingColor,
	};
	const blockProps = useBlockProps.save({
		className: `${name} `,
	});

	const ariaLabelText = !!ariaLabel ? ariaLabel : text;
	const actualTarget = target ? { target: '_blank' } : {};
	const rel = target ? { rel: 'noopener noreferrer' } : {};

	return (
		<div id={anchor || id} {...blockProps} style={style}>
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
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
