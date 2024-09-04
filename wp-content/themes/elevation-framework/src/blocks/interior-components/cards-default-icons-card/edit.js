/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { allowedBlocks, template } from './template';
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';
import './editor.scss';
import { Controls } from './controls';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;
	const { id, anchor, preview, tagName, link, icon, headingColor } =
		attributes;
	const { text } = link;

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
			<div data-block-id={blockId} id={anchor || id} {...blockProps}>
				<div className={`${name}__container`}>
					{icon?.url && (
						<img
							src={icon.url}
							className={`${name}__icon`}
							selectorId={anchor || id}
						/>
					)}
					<RichText
						style={{
							maxWidth: '100%',
							textWrap: 'wrap',
							marginBottom: '0px',
							'--default-editor-color': headingColor,
						}}
						className="wp-block-heading"
						tagName={'h' + tagName}
						value={text}
						allowedFormats={[]}
						onChange={(newValue) => {
							setAttributes({
								link: {
									...link,
									text: newValue,
								},
							});
						}}
						placeholder={__('Heading...')}
					/>
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
