export const getName = (name) => {
	const newName = name.split('/');

	return newName[1] + newName[2];
};
