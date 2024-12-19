import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { TextControl, Button, SVG, Path } from '@wordpress/components';
import { getBlockName } from '../../utils/helpers';
import { useEffect, useState } from '@wordpress/element';
import { template, allowedBlocks } from './template';
import json from './block.json';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const { id, anchor, heading, style, itemNumber } = attributes;

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setAttributes({ id: anchor || `${name}-${clientId}` });
	}, [clientId, setAttributes]);

	const blockProps = useBlockProps({
		className: `${name}__item`,
	});

	return (
		<div data-block-id={blockId} {...blockProps} {...style}>
			<span
				className="wp-block-heading has-h-6-font-size numbered-accordion__number"
				aria-controls={id}
			>
				<TextControl
					label="Item Number"
					value={itemNumber}
					onChange={(value) => setAttributes({ itemNumber: value })}
				/>
			</span>
			<div className="numbered-accordion__item-body">
				<TextControl
					value={heading}
					onChange={(value) => setAttributes({ heading: value })}
				/>
				<Button
					aria-expanded={isOpen}
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					variant={'secondary'}
				>
					{isOpen ? 'Close' : 'Expand'}
					{isOpen ? (
						<SVG
							width="12"
							height="3"
							viewBox="0 0 12 3"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<Path
								d="M10 1.5L2 1.5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</SVG>
					) : (
						<SVG
							width="12"
							height="13"
							viewBox="0 0 12 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<Path
								d="M6 1.5V11.5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<Path
								d="M11 6.5L1 6.5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</SVG>
					)}
				</Button>
				<div
					id={id}
					className={`numbered-accordion__panel ${isOpen ? 'active' : ''}`}
				>
					<InnerBlocks
						template={template}
						allowedBlocks={allowedBlocks}
						templateLock={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Edit;
