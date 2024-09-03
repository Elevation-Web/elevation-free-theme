import clsx from 'clsx';
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	__experimentalInputControl,
} from '@wordpress/components';
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const BUTTONS_TEMPLATE = [['elevation/button']];

	const { name: blockName } = json;
	const name = blockName.split('/')[1];

	const blockProps = useBlockProps({
		className: clsx(name),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		// defaultBlock: DEFAULT_BLOCK,
		// This check should be handled by the `Inserter` internally to be consistent across all blocks that use it.
		template: BUTTONS_TEMPLATE,
		templateInsertUpdatesSelection: true,
		// orientation: layout?.orientation ?? 'horizontal',
	});

	return <div {...innerBlocksProps} />;
};

export default Edit;
