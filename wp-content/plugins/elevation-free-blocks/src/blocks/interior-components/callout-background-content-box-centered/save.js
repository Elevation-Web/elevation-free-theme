/* Gutenberg Dependencies */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import BackgroundPicture from '../../components/BackgroundPicture';
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;

	const {
		imgMobile,
		imgTablet,
		imgDesktop,
		imgAlt,
		style,
		focalPointDesktop,
		boxBgColor,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: name,
	});

	const withContainer = blockProps.className.includes('alignfull')
		? 'container '
		: '';

	const boxStyle = boxBgColor ? { backgroundColor: boxBgColor } : {};

	return (
		<div data-block-id={blockId} {...blockProps} {...style}>
			<BackgroundPicture
				imgMobile={imgMobile}
				imgTablet={imgTablet}
				imgDesktop={imgDesktop}
				imgAlt={imgAlt}
				className={`${name}__background`}
				width="1920"
				height="1080"
				focalPointDesktop={focalPointDesktop}
			/>
			<div className={`${withContainer}${name}__container`}>
				<div className={`${name}__wrapper`} style={boxStyle}>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default save;
