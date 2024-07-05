import { addCSS, addJS, base } from './utils';

// Load CSS and JS files for each block
const loadBlocksCSSandJS = (excludedBlocks, exclude = false) => {
	let uniqueBlocksIds = [];

	if (exclude) {
		if (excludedBlocks.length === 0) return;
		uniqueBlocksIds = excludedBlocks;
	} else {
		// Find all elements with the "block" class
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
			(id) => !excludedBlocks.includes(id)
		);
	}

	// Loop through each block
	uniqueBlocksIds?.forEach(function (id) {
		const path = `${base}/build/blocks/${id}`;
		// Load CSS file
		addCSS(path);

		// Load JS file
		addJS(path);
	});
};

export default loadBlocksCSSandJS;
