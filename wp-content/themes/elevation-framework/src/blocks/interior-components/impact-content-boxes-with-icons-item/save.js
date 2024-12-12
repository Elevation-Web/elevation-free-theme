/* Gutenberg Dependencies */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/* Internal Dependencies */
import { getBlockName } from '../../utils/helpers';
import { ImageWithFocalPoint } from '../../components/ImageWithFocalPoint';

/* Block */
import json from './block.json';

const save = (props) => {
	const { name: blockName } = json;
	const { name, blockId } = getBlockName(blockName);

	const { attributes } = props;
	const {
		anchor,
		id,
		value,
		before_value,
		after_value,
		remove_comma,
		icon,
		title_size,
		borderColor,
		backgroundColor,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `${name}`,
		style: {
			'--border-color': borderColor,
			'--background-color': backgroundColor,
		},
	});

	return (
		<div
			data-block-id={blockId}
			data-block-js="false"
			id={anchor || id}
			{...blockProps}
		>
			<div className={`${name}__header`}>
				<div className={`${name}__icon-container no-hover`}>
					<ImageWithFocalPoint
						img={icon}
						className={`${name}__img no-animate`}
						selectorId={anchor || id}
					/>
				</div>
				<div>
					<h2
						className={`${name}__value has-${title_size}-font-size`}
					>
						<span className={`${name}__value-before`}>
							{before_value}
						</span>
						{remove_comma ? (
							<span
								className={`${name}__value-value numscrolleryears`}
								data-num={value}
							>
								{value}
							</span>
						) : (
							<span
								className={`${name}__value-value numscroller`}
								data-num={value}
							>
								{value}
							</span>
						)}
						<span className={`${name}__value-after`}>
							{after_value}
						</span>
					</h2>
				</div>
			</div>
			<div className={`${name}__content`}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default save;
