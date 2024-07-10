import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import json from './block.json';
import './editor.scss';

const options = [
	{
		label: 'Small',
		value: 'spacer__small',
	},
	{
		label: 'Normal',
		value: 'spacer__normal',
	},
	{
		label: 'Large',
		value: 'spacer__large',
	},
	{
		label: 'Huge',
		value: 'spacer__huge',
	},
];

const HeightSelectControl = ({ space, attributes, setAttributes }) => {
	return (
		<SelectControl
			label="Spacer Height"
			value={space}
			options={options}
			onChange={(selectedItem) => {
				console.log('selectedItem', selectedItem);
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

	const { anchor, space } = attributes;

	const blockProps = useBlockProps({
		className: `${name} ${space}`,
	});

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Spacer Settings')}>
				<HeightSelectControl
					space={space}
					attributes={attributes}
					setAttributes={setAttributes}
				/>
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
