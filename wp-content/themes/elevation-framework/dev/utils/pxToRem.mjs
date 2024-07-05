export const pxToRem = (pxValue, baseFontSize = 16) => {
	const pixels = parseFloat(pxValue);
	return `${pixels / baseFontSize}rem`;
};
