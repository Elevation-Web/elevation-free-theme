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
	const { attributes } = props;
	const { type, allowedBlocks } = attributes;
	const { name } = getBlockName(blockName);

	const blockProps = useBlockProps({
		className: `elevation-interior-components--group ${name} ${type}`,
	});

	const newAllowedBlocks =
		allowedBlocks?.length > 0 ? allowedBlocks : undefined;

	return (
		<>
			<div {...blockProps}>
				<InnerBlocks allowedBlocks={newAllowedBlocks} />
			</div>
		</>
	);
};

export default Edit;
