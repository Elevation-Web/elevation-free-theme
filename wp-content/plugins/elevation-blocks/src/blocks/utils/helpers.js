export const getBlockName = (blockName) => {
	const newName = blockName.split('/')[1];
	const className = newName.split('--');

	return { blockId: className.join('/'), name: className[1] };
};
