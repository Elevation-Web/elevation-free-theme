import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BackgroundPicture from '../components/BackgroundPicture';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const { attributes } = props;

	const { text, url, btnStyle, ariaLabel } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} cta cta--${btnStyle}`,
	});

	const ariaLabelText = !!ariaLabel ? ariaLabel : text;

	return (
		<a {...blockProps} href={url} aria-label={ariaLabelText}>
			{text}
		</a>
	);
};

export default save;
