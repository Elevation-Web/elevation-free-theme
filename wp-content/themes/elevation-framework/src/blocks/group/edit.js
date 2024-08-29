import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __experimentalInputControl } from '@wordpress/components';
// import customContainerOptions from './customContainerOptions';
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];

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
