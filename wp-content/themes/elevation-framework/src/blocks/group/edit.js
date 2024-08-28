import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	__experimentalInputControl,
} from '@wordpress/components';
import { URLInputCustom, Button } from '@wordpress/block-editor';
// import customContainerOptions from './customContainerOptions';
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];
	const { attributes, setAttributes } = props;

	const { containerWidth } = attributes;

	const blockProps = useBlockProps({
		className: `${name} custom-group--${containerWidth}`,
	});

	return (
		<>
			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
};

export default Edit;
