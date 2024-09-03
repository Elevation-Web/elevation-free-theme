/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

/* Internal Dependencies */
import json from './block.json';
import './editor.scss';
import { options, lineOptions, linePositionOptions } from './options';

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

	const name = json.name.split('/')[1];

	const { anchor, space, line, lineType, linePosition } = attributes;

	const blockProps = useBlockProps({
		className: `${name} ${space} line-${line ? 'enable' : 'disable'} line-type-${lineType} position-${linePosition}`,
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
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div
				id={anchor}
				{...blockProps}
				aria-hidden="true"
				data-block-id={name}
			></div>
		</>
	);
};

export default Edit;
