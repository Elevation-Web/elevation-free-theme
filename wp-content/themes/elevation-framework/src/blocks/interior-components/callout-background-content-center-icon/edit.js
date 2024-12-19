/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { useEffect, useState } from '@wordpress/element';

/* Internal Dependencies */

import { getBlockName } from '../../utils/helpers';

import { template, allowedBlocks } from './template';

/* Blocks */
import json from './block.json';
import './editor.scss';
import previewImage from './preview.webp';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;

	const { preview, style } = attributes;

	const blockProps = useBlockProps({
		className: name,
	});

	const [withContainer, setWithContainer] = useState('');

	useEffect(() => {
		setWithContainer(() => {
			return blockProps.className.includes('alignfull') ? '' : 'contain ';
		});
	}, [blockProps.className]);

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
			<div data-block-id={blockId} {...blockProps} {...style}>
				<div className={`${withContainer}${name}__container`}>
					<div className={`${name}__wrapper`}>
						<InnerBlocks
							template={template}
							allowedBlocks={allowedBlocks}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
