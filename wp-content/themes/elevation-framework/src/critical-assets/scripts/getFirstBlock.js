const getFirstsBlock = () => {
	const blocks = Array.from(document.querySelectorAll('[data-block-id]'));

	const firstTwoBlockIds = blocks
		.map((block) => block.dataset.blockId)
		.slice(0, 2);

	return firstTwoBlockIds;
};

export default getFirstsBlock;
