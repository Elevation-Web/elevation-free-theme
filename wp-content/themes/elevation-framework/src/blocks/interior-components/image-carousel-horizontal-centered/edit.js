/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __experimentalInputControl, Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/* Block */
import './editor.scss';
import json from './block.json';
import previewImage from './preview.webp';
import { allowedBlocks, TEMPLATE } from './template';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];
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
			<div
				data-block-id={name}
				data-block-js="true"
				id={anchor || id}
				{...blockProps}
			>
				<InnerBlocks
					template={TEMPLATE}
					allowedBlocks={allowedBlocks}
					templateLock={'all'}
				/>
			</div>
		</>
	);
};

export default Edit;
