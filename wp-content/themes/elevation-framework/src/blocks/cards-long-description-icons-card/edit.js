import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { allowedBlocks, template } from './template';

/* Block */
import json from './block.json';
import './editor.scss';
import { Controls } from './controls';

const Edit = (props) => {
	const { name: blockName } = json;
	const name = blockName.split('/')[1];
	const { clientId, attributes, setAttributes } = props;

	const { id, anchor, preview, icon, iconBackgroundColor } = attributes;

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
			<Controls {...props} />
			<div data-block-id={name} id={anchor || id} {...blockProps}>
				<div
					className={`${name}__icon-container no-hover`}
					style={{ backgroundColor: iconBackgroundColor }}
				>
					{icon?.url && (
						<img
							src={icon.url}
							className={`${name}__img`}
							selectorId={anchor || id}
						/>
					)}
				</div>
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
