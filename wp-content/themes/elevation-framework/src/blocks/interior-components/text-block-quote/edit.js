import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import previewImage from './preview.webp';
import { allowedBlocks, template } from './template';
import { getBlockName } from '../../utils/helpers';
import './editor.scss';
import { ColorPicker } from '../../components/ColorPicker';

/* Block */
import json from './block.json';

const Edit = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { clientId, attributes, setAttributes } = props;

	const { id, anchor, preview, borderColor } = attributes;

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

	const controls = (
		<InspectorControls>
			<PanelBody
				title={__('Quote Settings', 'elevation')}
				initialOpen={true}
			>
				<ColorPicker
					label={__('Border Color', 'elevation')}
					color={borderColor}
					onChange={(color) => setAttributes({ borderColor: color })}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{controls}
			<div id={anchor || id} data-block-id={blockId} {...blockProps}>
				<div
					aria-hidden="true"
					className={`${name}__border`}
					style={{ borderColor: borderColor }}
				>
					<svg width="21" height="16" viewBox="0 0 21 16" fill="none">
						<path
							d="M7.39949 0.00173205C7.14492 -0.00173205 6.96706 0.0883348 6.81188 0.294449C4.87993 2.88733 2.94275 5.47329 1.00382 8.05925C0.226156 9.09675 -0.0981613 10.2503 0.0256371 11.5389C0.287183 14.2721 2.87474 16.3246 5.61923 15.9574C8.49972 15.5712 10.1963 13.0562 9.98182 10.6954C9.87197 9.48993 9.39595 8.45242 8.54855 7.5864C8.07253 7.09969 7.51457 6.72557 6.86245 6.46056C6.88686 6.4034 6.90081 6.36703 6.91824 6.33412C7.35067 5.45597 7.78134 4.57609 8.21377 3.69794C8.68281 2.74531 9.15359 1.79268 9.62088 0.838314C9.84581 0.37932 9.60868 0.00519616 9.10128 0.00346411C8.5346 0.00346411 7.96617 0.0103923 7.39949 0V0.00173205Z"
							fill={borderColor}
						/>
						<path
							d="M19.1234 14.9237C21.4453 13.1128 21.644 9.63474 19.5435 7.57945C19.0607 7.10809 18.5151 6.73031 17.8649 6.46517C17.9625 6.26588 18.0479 6.08738 18.1368 5.91062C18.9648 4.22792 19.7876 2.54176 20.6243 0.864264C20.8509 0.41023 20.5755 -0.0264736 20.0909 0.00125367C19.5505 0.0324468 19.0084 0.0185832 18.468 0.00471958C18.1682 -0.00394518 17.9677 0.101765 17.7865 0.344378C15.8603 2.93341 13.9219 5.51378 11.9922 8.09934C11.0823 9.31761 10.7999 10.6797 11.1381 12.1527C11.9556 15.707 16.2246 17.1835 19.1234 14.9237Z"
							fill={borderColor}
						/>
					</svg>
				</div>
				<InnerBlocks
					template={template}
					allowedBlocks={allowedBlocks}
					templateLock={false}
				/>
			</div>
		</>
	);
};

export default Edit;
