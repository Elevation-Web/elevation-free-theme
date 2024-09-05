/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';
import previewImage from './preview.webp';
import { allowedBlocks, template } from './template';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;
	const { id, anchor, preview } = attributes;

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name}`,
	});

	if (preview) {
		return (
			<div className={`${name}-preview`}>
				<img
					src={previewImage}
					alt="Preview"
					style={{
						objectFit: 'contain',
						maxHeight: '100%',
						maxWidth: '100%',
					}}
				/>
			</div>
		);
	}

	return (
		<>
			<div data-block-id={blockId} id={anchor || id} {...blockProps}>
				<div className={`${name}__container`}>
					<InnerBlocks
						template={template}
						allowedBlocks={allowedBlocks}
						templateLock={'all'}
					/>
				</div>
			</div>
		</>
	);
};

export default Edit;
