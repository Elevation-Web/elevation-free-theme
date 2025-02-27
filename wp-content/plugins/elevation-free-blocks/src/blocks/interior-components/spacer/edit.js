/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import { options, lineOptions, linePositionOptions } from './options';
import json from './block.json';
import './editor.scss';

const HeightSelectControl = ({ space, setAttributes }) => {
	return (
		<SelectControl
			label="Spacer Height"
			value={space}
			options={options}
			onChange={(selectedItem) => {
				setAttributes({
					space: selectedItem,
				});
			}}
		/>
	);
};

const Edit = (props) => {
	const { attributes, setAttributes } = props;
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { anchor, space, line, lineType, linePosition, borderColor } =
		attributes;
	const blockProps = useBlockProps({
		className: `${name} ${space} line-${line ? 'enable' : 'disable'} line-type-${lineType} position-${linePosition}`,
		style: {
			'--border-color': borderColor,
		},
	});

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Spacer Settings')}>
				<HeightSelectControl
					space={space}
					setAttributes={setAttributes}
				/>
				<ToggleControl
					label="Show line division."
					checked={line}
					onChange={(newValue) => {
						setAttributes({ line: newValue });
					}}
				/>
				{line && (
					<>
						<SelectControl
							label="Type Line Division."
							value={lineType}
							options={lineOptions}
							onChange={(selectedItem) => {
								setAttributes({
									lineType: selectedItem,
								});
							}}
						/>
						<SelectControl
							label="Line Position."
							value={linePosition}
							options={linePositionOptions}
							onChange={(selectedItem) => {
								setAttributes({
									linePosition: selectedItem,
								});
							}}
						/>
					</>
				)}
			</PanelBody>
			{line && (
				<PanelColorSettings
					title="Border Color"
					initialOpen={false}
					colorSettings={[
						{
							value: borderColor,
							onChange: (value) => {
								setAttributes({ borderColor: value });
							},
							label: 'Border Color',
						},
					]}
				/>
			)}
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div
				{...blockProps}
				data-block-id={blockId}
				aria-hidden="true"
				id={anchor}
			></div>
		</>
	);
};

export default Edit;
