import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BackgroundPicture from '../components/BackgroundPicture';
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const { attributes } = props;

	const { style } = attributes;

	const blockProps = useBlockProps.save({
		className: name,
	});

	const withContainer = blockProps.className.includes('alignfull')
		? 'container '
		: '';

	return (
		<div data-block-id={name} {...blockProps} {...style}>
			<div className={`${withContainer}${name}__container`}>
				<div className={`${name}__wrapper`}>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
