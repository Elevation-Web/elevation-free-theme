import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import BackgroundPicture from '../../components/BackgroundPicture';
import json from './block.json';
import { getBlockName } from '../../utils/helpers';

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
		isRowReverse,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: name,
	});

	const withContainer = blockProps.className.includes('alignfull')
		? 'container '
		: '';

	const wrapperClass = isRowReverse ? 'row-reverse' : 'row';

	return (
		<div data-block-id={blockId} {...blockProps} {...style}>
			<div className={`${withContainer}${name}__container`}>
				<div className={`${name}__wrapper ${wrapperClass}`}>
					<InnerBlocks.Content />
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
				</div>
			</div>
		</div>
	);
};

export default save;
