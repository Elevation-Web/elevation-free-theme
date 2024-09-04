/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	__experimentalInputControl,
} from '@wordpress/components';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import './editor.scss';
import customContainerOptions from './customContainerOptions';
import json from './block.json';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { attributes, setAttributes } = props;
	const { containerWidth } = attributes;

	const blockProps = useBlockProps({
		className: `${name} custom-container--${containerWidth}`,
	});

	// Process options from customContainerOptions.js
	const customContainerOptionsArray = Object.values(
		customContainerOptions.customContainerOptions
	).map((entry) => {
		return {
			label: __(entry.label),
			value: entry.value,
		};
	});

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Custom Container Styles')}>
				<SelectControl
					label={__('Custom Container Style')}
					value={containerWidth}
					options={customContainerOptionsArray}
					onChange={(value) =>
						setAttributes({ ...attributes, containerWidth: value })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
};

export default Edit;
