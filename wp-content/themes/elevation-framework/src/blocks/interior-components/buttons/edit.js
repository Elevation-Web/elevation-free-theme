/* Gutenberg Dependencies */
import clsx from 'clsx';
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const BUTTONS_TEMPLATE = [['elevation/interior-components--button']];

	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

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
