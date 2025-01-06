import { addCSS, addJS, base } from './utils';

// Load CSS and JS files for each block
const loadBlocksCSSandJS = (
	firstsBlocks = [],
	exclude = false,
	addIfExist = [],
	excludedBlocks
) => {
	let uniqueBlocksIds = [];

	const blocksWithJs = Array.from(
		document.querySelectorAll('[data-block-js="true"]')
	);

	const blocksWithJsArray = blocksWithJs.map(
		(block) => block.dataset.blockId
	);

	// Get all block IDs present in the DOM
	const blocksInDOM = Array.from(
		document.querySelectorAll('[data-block-id]')
	).map((block) => block.dataset.blockId);

	if (addIfExist.length > 0) {
		// Filter addIfExist to only include IDs present in the DOM
		const validAddIfExist = addIfExist.filter((id) =>
			blocksInDOM.includes(id)
		);

		// Combine validAddIfExist and firstsBlocks (ensure no duplicates)
		uniqueBlocksIds = Array.from(
			new Set([...validAddIfExist, ...firstsBlocks])
		);
		console.log('uniqueBlocksIds', uniqueBlocksIds);
	} else if (exclude) {
		if (firstsBlocks.length === 0) return;
		uniqueBlocksIds = firstsBlocks;
	} else {
		// Find all elements with the "block-id" data attribute
		const blocks = Array.from(document.querySelectorAll('[data-block-id]'));

		// Get unique block IDs array
		uniqueBlocksIds = blocks
			.filter((block, index, self) => {
				const ids = self.map((elem) => elem.dataset.blockId);
				return ids.indexOf(block.dataset.blockId) === index;
			})
			.map((block) => block.dataset.blockId);

		// Remove excluded blocks
		uniqueBlocksIds = uniqueBlocksIds.filter(
			(id) => !firstsBlocks.includes(id)
		);
	}

	// exclude blocks
	if (excludedBlocks.length > 0) {
		uniqueBlocksIds = uniqueBlocksIds.filter(
			(id) => !excludedBlocks.includes(id)
		);
	}

	// Loop through each block
	uniqueBlocksIds?.forEach(function (id) {
		const path = `${base}/build/blocks/${id}`;
		// Load CSS file
		addCSS(path);

		if (blocksWithJsArray.includes(id)) {
			// Load JS file
			addJS(path, 'view');
		}
	});
};

export default loadBlocksCSSandJS;
