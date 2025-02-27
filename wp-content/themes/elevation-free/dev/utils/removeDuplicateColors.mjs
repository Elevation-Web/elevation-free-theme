export const removeDuplicateColors = (themeColors = []) => {
	// Remove duplicates based on the color key
	themeColors = themeColors.reduce((acc, current) => {
		const x = acc.find((item) => item.color === current.color);
		if (!x) {
			return acc.concat([current]);
		} else {
			return acc;
		}
	}, []);

	return themeColors;
};
