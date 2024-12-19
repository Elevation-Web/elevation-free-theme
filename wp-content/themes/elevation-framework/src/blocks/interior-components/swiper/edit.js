/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __experimentalInputControl, Button } from '@wordpress/components';
import { useRef, useEffect } from '@wordpress/element';

/* Internal Dependencies */
import Slider from '../../components/slider';
import { getBlockName } from '../../utils/helpers';

/* Block */
import './editor.scss';
import json from './block.json';

const Edit = (props) => {
	const ref = useRef();
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const { id, anchor } = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name} slider-layout`,
	});

	const wrapperProps = {
		className: `slider-wrapper`,
		ref: ref,
	};

	return (
		<>
			<div
				data-block-id={blockId}
				data-block-js="true"
				id={anchor || id}
				{...blockProps}
			>
				<Slider ref={ref} attributes={props.attributes} {...props}>
					<InnerBlocks
						templateLock={false}
						allowedBlocks={[
							'elevation/interior-components--image-carousel',
							'elevation/interior-components--video-carousel-item',
						]}
						{...wrapperProps}
					/>
				</Slider>
				<div className="swiper-controls__container">
					<Button variant="secondary" className="prev-step">
						Prev
					</Button>
					<Button variant="secondary" className="next-step">
						Next
					</Button>
				</div>
			</div>
		</>
	);
};

export default Edit;
