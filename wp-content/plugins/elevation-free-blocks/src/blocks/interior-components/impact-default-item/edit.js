/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import './editor.scss';
import json from './block.json';
import previewImage from './preview.webp';
import { template, allowedBlocks } from './template';
import { Controls } from './controls';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;
	const { id, preview, value, remove_comma, title_size } = attributes;

	const blockProps = useBlockProps({
		className: `${name}`,
	});

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

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
			<div
				data-block-id={blockId}
				data-block-js="true"
				id={id}
				{...blockProps}
			>
				<div className={`${name}__header`}>
					<h2
						className={`${name}__value has-${title_size}-font-size`}
					>
						<RichText
							tagName="div"
							className={`${name}__value-value`}
							value={value}
							onChange={(newValue) =>
								setAttributes({ value: newValue })
							}
						/>
					</h2>
				</div>
				<div className={`${name}__content`}>
					<InnerBlocks
						template={template}
						templateInsertUpdatesSelection={true}
						allowedBlocks={allowedBlocks}
						orientation={'horizontal'}
					/>
				</div>
			</div>
		</>
	);
};

export default Edit;
