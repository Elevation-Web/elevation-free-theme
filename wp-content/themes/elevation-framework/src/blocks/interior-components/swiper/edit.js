/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { __experimentalInputControl, Button } from '@wordpress/components';
import { useRef, useEffect } from '@wordpress/element';

/* Internal Dependencies */
import Slider from '../../components/slider';

/* Block */
import './editor.scss';
import json from './block.json';

const Edit = (props) => {
	const ref = useRef();

	const { name: blockName } = json;
	const name = blockName.split('/')[1];
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
				data-block-id={name}
				data-block-js="true"
				id={anchor || id}
				{...blockProps}
			>
				<Slider ref={ref} attributes={props.attributes} {...props}>
					<InnerBlocks {...wrapperProps} />
				</Slider>
				<div className="testiominals-controls__container">
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
