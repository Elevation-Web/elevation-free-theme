import { useBlockProps } from '@wordpress/block-editor';
import json from './block.json';

const save = (props) => {
	const name = json.name.split('/')[1];

	const { attributes } = props;

	const { anchor, space } = attributes;

	const blockProps = useBlockProps.save({
		className: `${name} ${space}`,
	});

	return (
		<div
			id={anchor}
			data-block-id={name}
			aria-hidden="true"
			{...blockProps}
		/>
	);
};

export default save;
