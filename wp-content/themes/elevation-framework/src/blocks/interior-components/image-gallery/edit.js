/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	MediaReplaceFlow,
	MediaPlaceholder,
	URLInput,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	Button,
	Popover,
	ToggleControl,
	PanelBody,
} from '@wordpress/components';
import { keyboardReturn } from '@wordpress/icons';
import { useState, useEffect } from '@wordpress/element';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';

/* Block */
import json from './block.json';
import './editor.scss';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes, setAttributes, context } = props;
	const { img, link, isLazy, showCaption } = attributes;
	const inheritClassName = context['elevation/image-classname'];

	useEffect(() => {
		setAttributes({
			inheritClassName: inheritClassName || 'media',
		});
	}, [inheritClassName, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name} ${inheritClassName}`,
	});

	const setImageAttributes = (media) => {
		const { url, id, caption } = media;

		setAttributes({
			img: {
				url,
				id,
				caption,
			},
		});
	};

	const [visible, setVisible] = useState(false);

	const controls = (
		<InspectorControls>
			<PanelBody title={__('Image Settings')}>
				<ToggleControl
					__nextHasNoMarginBottom
					label="Defer image loading?"
					help={isLazy ? 'Yes' : 'No'}
					checked={isLazy}
					onChange={(newValue) => {
						setAttributes({
							isLazy: newValue,
						});
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);

	const blockControls = (
		<BlockControls>
			<MediaReplaceFlow
				mediaId={img?.id}
				mediaUrl={img?.url}
				allowedTypes={['image']}
				onSelect={setImageAttributes}
				name={!img?.url ? __('Add Image') : __('Replace Image')}
			/>
			<Button variant="secondary" onClick={() => setVisible(!visible)}>
				{link.url ? 'Change Link' : 'Add Link to Image'}
			</Button>
			{visible && (
				<Popover onClose={() => setVisible(false)}>
					<form className={`${name}__form`}>
						<URLInput
							value={link.url}
							onChange={(value) => {
								setAttributes({
									link: {
										...link,
										url: value,
									},
								});
							}}
						/>
						<Button
							onClick={() => setVisible(false)}
							icon={keyboardReturn}
							label={__('Apply')}
							type="submit"
						/>
					</form>
					<ToggleControl
						label={__('Open in new tab')}
						checked={link.target}
						onChange={(value) => {
							setAttributes({
								link: {
									...link,
									target: value,
								},
							});
						}}
					/>
				</Popover>
			)}
		</BlockControls>
	);

	return (
		<>
			{controls}
			<div {...blockProps}>
				{blockControls}
				{img?.url ? (
					<>
						<img
							src={img?.url}
							className={`${name}__img`}
							loading={isLazy ? 'lazy' : 'eager'}
						/>
						{img?.caption && (
							<span className={`${name}__img--caption`}>
								{img.caption}
							</span>
						)}
					</>
				) : (
					<MediaPlaceholder
						onSelect={setImageAttributes}
						allowedTypes={['image']}
						multiple={false}
						labels={{ title: 'Image' }}
					/>
				)}
			</div>
		</>
	);
};

export default Edit;
