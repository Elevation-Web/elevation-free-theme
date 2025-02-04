/* External Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { useEffect } from '@wordpress/element';

/* Internal Dependencies */
import json from './block.json';
import { getBlockName } from '../../utils/helpers';
import { Controls } from './controls';
import initSwiper from '../../../assets/scripts/utilities/swiper';

const Edit = (props) => {
	const { attributes, clientId, setAttributes } = props;
	const { id, anchor } = attributes;

	const { name: blockName } = json;
	const { name } = getBlockName(blockName);

	const blockProps = useBlockProps({
		className: `${name}`,
	});

	function swiper() {
		const swiperTest = setInterval(() => {
			if (document.querySelector(`.${name}__swiper`)) {
				initSwiper(`.${name}__swiper`);
				clearInterval(swiperTest);
			}
		}, 1000);
	}

	swiper();

	document.addEventListener('DOMContentLoaded', () => {
		const { subscribe, select } = wp.data;

		let previousBlocks = select('core/block-editor').getBlocks();

		subscribe(() => {
			const currentBlocks = select('core/block-editor').getBlocks();

			if (
				JSON.stringify(previousBlocks) !== JSON.stringify(currentBlocks)
			) {
				handleBlocksChange(currentBlocks);
				previousBlocks = currentBlocks;
			}
		});

		const handleBlocksChange = (blocks) => {
			blocks.forEach((block) => {
				if (
					block.name ===
					'elevation/contract-components--feed-default-events'
				) {
					swiper();
				}
			});
		};
	});

	useEffect(() => {
		setAttributes({ id: `${name}-${clientId}` });
	}, [clientId, name, setAttributes]);

	return (
		<>
			<Controls {...props} />
			<div id={anchor || id} data-block-id={name} {...blockProps}>
				<ServerSideRender
					block={blockName}
					attributes={attributes}
					loadingResponsePlaceholder={Spinner}
				/>
			</div>
		</>
	);
};

export default Edit;
