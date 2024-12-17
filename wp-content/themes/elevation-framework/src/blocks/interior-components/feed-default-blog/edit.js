/* External Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';

/* Internal Dependencies */
import './editor.scss';
import json from './block.json';
import { getBlockName } from '../../utils/helpers';
import { Controls } from './controls';

const Edit = (props) => {
	const { clientId, attributes, setAttributes } = props;
	const { id, anchor, } = attributes;

	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	// useEffect(() => {
	// 	setAttributes({ id: `${name}-${clientId}` });
	// }, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name}`,
	});

	return (
		<>
			<Controls {...props} />
			<div id={anchor || id} data-block-id={name} {...blockProps}>
				{/* <ServerSideRender
					block={blockName}
					attributes={attributes}
					loadingResponsePlaceholder={Spinner}
				/> */}
			</div>
		</>
	);
};

export default Edit;
