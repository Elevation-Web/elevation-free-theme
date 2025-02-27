import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BackgroundPicture from '../../components/BackgroundPicture';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { blockId, name } = getBlockName(blockName);

	const { attributes } = props;

	const { text, url, btnStyle, ariaLabel, target } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} cta cta--${btnStyle}`,
	});

	const ariaLabelText = !!ariaLabel ? ariaLabel : text;
	const actualTarget = target ? { target: '_blank' } : {};
	const rel = target ? { rel: 'noopener noreferrer' } : {};

	return (
		<a
			{...blockProps}
			href={url}
			aria-label={ariaLabelText}
			{...actualTarget}
			{...rel}
		>
			{text}
		</a>
	);
};

export default save;
