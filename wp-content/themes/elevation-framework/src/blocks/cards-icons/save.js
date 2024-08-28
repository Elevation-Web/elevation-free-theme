import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import json from './block.json';
import { ImageWithFocalPoint } from '../components/ImageWithFocalPoint';

const save = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const { attributes } = props;

	const { anchor, id, icon, backgroundColor, backgroundColorHover } =
		attributes;

	const blockProps = useBlockProps.save({
		className: `${name} `,
	});
	const style = {
		'background-color': backgroundColor,
	};
	return (
		<div data-block-id={name} id={anchor || id} {...blockProps}>
			<div className={`${name}__icon-container`} style={style}>
				<ImageWithFocalPoint
					img={icon}
					className={`${name}__img`}
					selectorId={anchor || id}
				/>
			</div>
			<div className={`${name}__container`}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
