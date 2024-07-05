import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	__experimentalInputControl,
} from '@wordpress/components';
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];
	const { attributes, setAttributes } = props;

	const { align, gap, style } = attributes;

	console.log('attributes', attributes);

	const blockProps = useBlockProps({
		className: name + ' container',
	});

	const BUTTONS_TEMPLATE = [['elevation/button']];

	return (
		<>
			<div data-block-id={name} {...blockProps} {...style}>
				<InnerBlocks template={BUTTONS_TEMPLATE} />
			</div>
		</>
	);
};

export default Edit;
