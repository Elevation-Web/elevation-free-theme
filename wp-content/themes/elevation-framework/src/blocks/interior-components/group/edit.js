/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __experimentalInputControl } from '@wordpress/components';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const blockProps = useBlockProps({
		className: `${name} wp-block-group is-layout-flow wp-block-group-is-layout-flow`,
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
