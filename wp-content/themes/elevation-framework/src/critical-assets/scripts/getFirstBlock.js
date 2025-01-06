const getFirstsBlock = (firstBlocks = []) => {
	const blocks = Array.from(document.querySelectorAll('[data-block-id]'));

	// Collect all block IDs
	const blockIds = blocks.map((block) => block.dataset.blockId);

	// Filter out the block IDs that are in the `firstBlocks` array
	const uniqueBlockIds = blockIds.filter((id) => !firstBlocks.includes(id));

	// Get the first 2 unique block IDs
	const firstTwoBlockIds = uniqueBlockIds.slice(0, 2);

	console.log('firstTwoBlockIds', firstTwoBlockIds);

	return firstTwoBlockIds;
};

export default getFirstsBlock;
