/* External Dependencies */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
/* Internal Dependencies */
import json from './block.json';
import { getBlockName } from '../../utils/helpers';
import { TEMPLATE, allowedBlocks, date as dyncamicDate } from './template';
import { useEffect } from 'react';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const { anchor, id, date } = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
		if (date === '') {
			setAttributes({ date: dyncamicDate[1] });
		}
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name}`,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
		allowedBlocks: allowedBlocks,
		templateLock: 'all',
	});

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Timeline Item Settings')}>
				<TextControl
					label="Date"
					value={date}
					onChange={(value) => setAttributes({ date: value })}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div id={anchor || id} {...innerBlocksProps} data-date={date} />
		</>
	);
};

export default Edit;
